const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  model: "ft-fckZczTEDsyfcBzaFjSaIk0K",
  apiKey: process.env.OPENAI_API_KEY,
});

delete configuration.baseOptions.headers['User-Agent'];

export const openai = new OpenAIApi(configuration);