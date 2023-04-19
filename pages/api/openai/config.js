const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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",
});

export const openai = new OpenAIApi(configuration);