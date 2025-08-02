import { openai } from './aiConnection'

export async function teamRandomizer(text: string) {
    try {
        const completion = await openai.chat.completions.create({
            model: 'openai/gpt-4o',
            messages: [
                {
                    role: 'user',
                    content: `You are a team randomizer. Given the following names and your overalls, randomly assign people to teams. The text is: ${text} \n Obs.: Reply this message in JSON format with the following structure: { "teams": [{ "teamName": "Team A", "members": ["Member 1", "Member 2"] }, { "teamName": "Team B", "members": ["Member 3", "Member 4"] }] }. Do not add any other text or explanation.`,
                },
            ],
        });

        const response = completion.choices[0].message.content;

        return response;
    } catch (error) {
        console.error('Error in teamRandomizer:', error);
        throw new Error('Failed to generate team randomization');
    }
}