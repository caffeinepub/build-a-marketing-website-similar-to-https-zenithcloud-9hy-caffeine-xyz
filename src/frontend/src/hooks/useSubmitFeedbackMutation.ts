import { useMutation } from '@tanstack/react-query';
import { useActor } from './useActor';

interface SubmitFeedbackParams {
  feedbackText: string;
  discordUser: string | null;
}

export function useSubmitFeedbackMutation() {
  const { actor } = useActor();

  return useMutation({
    mutationFn: async ({ feedbackText, discordUser }: SubmitFeedbackParams) => {
      if (!actor) {
        throw new Error('Backend actor not available');
      }
      
      if (!feedbackText || feedbackText.trim().length === 0) {
        throw new Error('Feedback message cannot be empty');
      }
      
      if (feedbackText.length > 2000) {
        throw new Error('Feedback message is too long (max 2000 characters)');
      }

      await actor.submitFeedback(feedbackText, discordUser);
    },
  });
}
