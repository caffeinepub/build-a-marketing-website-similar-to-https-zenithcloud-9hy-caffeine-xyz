import { useState } from 'react';
import { Loader2, Send, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useSubmitFeedbackMutation } from '@/hooks/useSubmitFeedbackMutation';
import SectionShell from '../marketing/SectionShell';

export default function FeedbackFormSection() {
  const [message, setMessage] = useState('');
  const [discordUser, setDiscordUser] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const mutation = useSubmitFeedbackMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(false);

    try {
      await mutation.mutateAsync({
        feedbackText: message.trim(),
        discordUser: discordUser.trim() || null,
      });

      // Success - reset form and show confirmation
      setMessage('');
      setDiscordUser('');
      setShowSuccess(true);

      // Hide success message after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      // Error is handled by mutation.error
      console.error('Feedback submission error:', error);
    }
  };

  const isSubmitDisabled = 
    mutation.isPending || 
    !message.trim() || 
    message.length > 2000;

  return (
    <SectionShell id="feedback" className="bg-transparent">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Send Us Your Feedback
          </h2>
          <p className="text-lg opacity-90">
            Have suggestions or feedback? We'd love to hear from you!
          </p>
        </div>

        <div className="mc-card p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Message field */}
            <div className="space-y-2">
              <Label htmlFor="message" className="text-base font-medium">
                Your Message <span className="text-destructive">*</span>
              </Label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Share your thoughts, suggestions, or feedback..."
                className="min-h-[150px] resize-y"
                maxLength={2000}
                disabled={mutation.isPending}
              />
              <p className="text-sm text-muted-foreground">
                {message.length} / 2000 characters
              </p>
            </div>

            {/* Discord username field (optional) */}
            <div className="space-y-2">
              <Label htmlFor="discordUser" className="text-base font-medium">
                Discord Username <span className="text-sm text-muted-foreground">(optional)</span>
              </Label>
              <Input
                id="discordUser"
                type="text"
                value={discordUser}
                onChange={(e) => setDiscordUser(e.target.value)}
                placeholder="YourDiscordName#1234"
                maxLength={100}
                disabled={mutation.isPending}
              />
              <p className="text-sm text-muted-foreground">
                Include your Discord username if you'd like us to follow up with you
              </p>
            </div>

            {/* Success message */}
            {showSuccess && (
              <Alert className="border-green-500 bg-green-500/10">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <AlertDescription className="text-green-500">
                  Thank you! Your feedback has been submitted successfully.
                </AlertDescription>
              </Alert>
            )}

            {/* Error message */}
            {mutation.isError && (
              <Alert variant="destructive">
                <AlertDescription>
                  {mutation.error instanceof Error 
                    ? mutation.error.message 
                    : 'Failed to submit feedback. Please try again.'}
                </AlertDescription>
              </Alert>
            )}

            {/* Submit button */}
            <Button
              type="submit"
              disabled={isSubmitDisabled}
              className="w-full mc-button cta-orange"
              size="lg"
            >
              {mutation.isPending ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-5 w-5" />
                  Send Feedback
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </SectionShell>
  );
}
