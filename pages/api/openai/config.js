const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

delete configuration.baseOptions.headers['User-Agent'];

export const openai = new OpenAIApi(configuration);