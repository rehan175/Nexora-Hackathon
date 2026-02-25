'use server';
/**
 * @fileOverview A Genkit flow for generating hackathon problem statements.
 *
 * - generateProblemStatements - A function that generates hackathon problem statements.
 * - ProblemStatementGeneratorInput - The input type for the generateProblemStatements function.
 * - ProblemStatementGeneratorOutput - The return type for the generateProblemStatements function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProblemStatementGeneratorInputSchema = z.object({
  theme: z.string().describe('The main theme or track for the hackathon problem statements (e.g., "Artificial Intelligence", "Decentralized Web", "Climate Tech").'),
  keywords: z.array(z.string()).optional().describe('A list of keywords or concepts to incorporate into the problem statements.'),
  count: z.number().int().min(1).max(10).default(3).describe('The number of problem statements to generate.'),
  difficulty: z.enum(['easy', 'medium', 'hard']).optional().describe('The desired difficulty level for the problem statements.'),
});
export type ProblemStatementGeneratorInput = z.infer<typeof ProblemStatementGeneratorInputSchema>;

const ProblemStatementOutputSchema = z.object({
  num: z.string().describe('A unique identifier for the problem statement, e.g., "PS-AI-01", "PS-W3-01". The abbreviation part should be derived from the theme (e.g., "Artificial Intelligence" -> "AI", "Decentralized Web" -> "W3", "Climate Tech" -> "CT").'),
  title: z.string().describe('A concise and engaging title for the problem statement.'),
  description: z.string().describe('A detailed description of the hackathon challenge, providing enough context for participants to start brainstorming solutions.'),
  difficulty: z.enum(['easy', 'medium', 'hard']).describe('The difficulty level of the problem statement.'),
});

const ProblemStatementGeneratorOutputSchema = z.array(ProblemStatementOutputSchema).describe('An array of generated hackathon problem statements.');
export type ProblemStatementGeneratorOutput = z.infer<typeof ProblemStatementGeneratorOutputSchema>;

const prompt = ai.definePrompt({
  name: 'generateProblemStatementsPrompt',
  input: {schema: ProblemStatementGeneratorInputSchema},
  output: {schema: ProblemStatementGeneratorOutputSchema},
  prompt: `You are an expert hackathon organizer and challenge designer. Your task is to create novel, diverse, and challenging problem statements for an upcoming hackathon.

Generate {{count}} problem statements based on the following criteria:

Theme: {{{theme}}}
{{#if keywords}}Keywords: {{#each keywords}}{{#unless @first}}, {{/unless}}{{{this}}}{{/each}}.{{/if}}
{{#if difficulty}}Desired Difficulty: {{{difficulty}}}.{{/if}}

For each problem statement, provide a unique identifier (num), a compelling title, a detailed description of the challenge, and its difficulty level. The 'num' field should start with "PS-" followed by an abbreviation of the theme (e.g., "Artificial Intelligence" -> "AI", "Decentralized Web" -> "W3", "Climate Tech" -> "CT") and then a two-digit number, e.g., "PS-AI-01".

Ensure the problem statements are clear, inspiring, and provide enough context for participants to start brainstorming solutions. The descriptions should be detailed enough to convey the core challenge but leave room for creative solutions. Make sure to generate statements that align well with the requested difficulty.
`,
});

const generateProblemStatementsFlow = ai.defineFlow(
  {
    name: 'generateProblemStatementsFlow',
    inputSchema: ProblemStatementGeneratorInputSchema,
    outputSchema: ProblemStatementGeneratorOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    return output!;
  }
);

export async function generateProblemStatements(
  input: ProblemStatementGeneratorInput
): Promise<ProblemStatementGeneratorOutput> {
  return generateProblemStatementsFlow(input);
}
