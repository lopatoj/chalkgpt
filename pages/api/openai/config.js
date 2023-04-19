const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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",
});

export const openai = new OpenAIApi(configuration);