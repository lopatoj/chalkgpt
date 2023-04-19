const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  model: "ft-5L292buSWulS99QcUMR1K8Re",
  apiKey: process.env.OPENAI_API_KEY,
});

export const openai = new OpenAIApi(configuration);