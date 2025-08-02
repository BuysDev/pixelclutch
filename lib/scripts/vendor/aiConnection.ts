import OpenAI from 'openai';

export const openai = new OpenAI({
    baseURL: 'https://openrouter.ai/api/v1',
    apiKey: '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',
});
