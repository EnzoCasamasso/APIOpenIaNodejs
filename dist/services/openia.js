import { Configuration, OpenAIApi } from 'openai';
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
export const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "Hello world",
});
console.log(completion.data.choices[0].text);
//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
//# sourceMappingURL=openia.js.map