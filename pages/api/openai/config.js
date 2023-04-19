const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  model: "davinci:ft-personal-2023-04-19-09-13-52",
  apiKey: process.env.OPENAI_API_KEY,
});

export const openai = new OpenAIApi(configuration);