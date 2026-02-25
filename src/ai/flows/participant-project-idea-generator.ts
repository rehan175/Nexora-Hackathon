'use server';
/**
 * @fileOverview A Genkit flow that suggests initial project ideas or innovative approaches for a chosen hackathon track and problem statement.
 *
 * - generateProjectIdeas - A function that generates project ideas.
 * - ParticipantProjectIdeaGeneratorInput - The input type for the generateProjectIdeas function.
 * - ParticipantProjectIdeaGeneratorOutput - The return type for the generateProjectIdeas function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const ParticipantProjectIdeaGeneratorInputSchema = z.object({
  track: z.string().describe('The name of the hackathon track (e.g., "Artificial Intelligence").'),
  problemStatement: z.string().describe('The specific problem statement within the chosen track.'),
});
export type ParticipantProjectIdeaGeneratorInput = z.infer<typeof ParticipantProjectIdeaGeneratorInputSchema>;

const ParticipantProjectIdeaGeneratorOutputSchema = z.object({
  ideas: z.array(z.string()).describe('A list of suggested project ideas or innovative approaches.'),
});
export type ParticipantProjectIdeaGeneratorOutput = z.infer<typeof ParticipantProjectIdeaGeneratorOutputSchema>;

export async function generateProjectIdeas(input: ParticipantProjectIdeaGeneratorInput): Promise<ParticipantProjectIdeaGeneratorOutput> {
  return participantProjectIdeaGeneratorFlow(input);
}

const prompt = ai.definePrompt({
  name: 'participantProjectIdeaGeneratorPrompt',
  input: { schema: ParticipantProjectIdeaGeneratorInputSchema },
  output: { schema: ParticipantProjectIdeaGeneratorOutputSchema },
  prompt: `You are an expert hackathon brainstorming assistant.

Given the following hackathon track and problem statement, generate 3-5 innovative and feasible project ideas or unique approaches that a team could take.
Focus on creative solutions that leverage modern technologies or offer a fresh perspective.

Hackathon Track: {{{track}}}
Problem Statement: {{{problemStatement}}}

Ensure the ideas are distinct and provide enough detail for a participant to kickstart their brainstorming process.`,
});

const participantProjectIdeaGeneratorFlow = ai.defineFlow(
  {
    name: 'participantProjectIdeaGeneratorFlow',
    inputSchema: ParticipantProjectIdeaGeneratorInputSchema,
    outputSchema: ParticipantProjectIdeaGeneratorOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
