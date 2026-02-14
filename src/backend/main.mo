import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Iter "mo:core/Iter";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import OutCall "http-outcalls/outcall";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";
import Text "mo:core/Text";
import Migration "migration";

(with migration = Migration.run)
actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  type Feedback = {
    id : Nat;
    user : Principal;
    discordUser : ?Text;
    feedback : Text;
  };

  let feedbackStore = Map.empty<Nat, Feedback>();
  var feedbackCounter = 0;
  var discordWebhookUrl : ?Text = null;

  public query ({ caller }) func getFeedbackById(id : Nat) : async ?Feedback {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Admins only");
    };
    feedbackStore.get(id);
  };

  public shared ({ caller }) func submitFeedback(feedbackText : Text, discordUser : ?Text) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can submit feedback");
    };

    let id = feedbackCounter;
    feedbackCounter += 1;

    let feedback : Feedback = {
      id;
      user = caller;
      discordUser;
      feedback = feedbackText;
    };

    feedbackStore.add(id, feedback);

    switch (discordWebhookUrl) {
      case (?url) {
        let headers : [OutCall.Header] = [{
          name = "Content-Type";
          value = "application/json";
        }];

        var discordInfo = "\n";
        switch (discordUser) {
          case (?user) {
            discordInfo #= "Discord user: " # user # "\n";
          };
          case (null) { discordInfo #= "No Discord user provided\n" };
        };

        let payload = "{ \"content\": \"User feedback: \\n" # feedbackText # discordInfo # " [IC user: " # caller.toText() # "] \" }";
        ignore await OutCall.httpPostRequest(url, headers, payload, transform);
      };
      case (null) {};
    };
  };

  public shared ({ caller }) func setDiscordWebhookUrl(url : Text) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can perform this action");
    };
    discordWebhookUrl := ?url;
  };

  public query ({ caller }) func getFeedbackRange(startId : Nat, endId : Nat) : async [Feedback] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view feedback");
    };

    var range : Nat = if (endId >= startId) { endId - startId } else { 0 };
    if (range > 1000) { range := 1000 };

    var currentIndex = startId;
    var results = ([] : [Feedback]);

    while (currentIndex <= endId and range > 0) {
      switch (feedbackStore.get(currentIndex)) {
        case (?feedback) {
          results := results.concat([feedback]);
        };
        case (null) {};
      };
      currentIndex += 1;
      range -= 1;
    };
    results;
  };

  public query func transform(input : OutCall.TransformationInput) : async OutCall.TransformationOutput {
    OutCall.transform(input);
  };
};

