const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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",
});

export const openai = new OpenAIApi(configuration);