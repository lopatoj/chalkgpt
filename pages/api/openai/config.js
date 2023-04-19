const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
  organization: "org-I4tlqMCIWp6VH2uqe63Owqwi",
});

delete configuration.baseOptions.headers['User-Agent'];

export const openai = new OpenAIApi(configuration);