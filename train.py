import openai
import os

openai.api_key = os.getenv("OPENAI_API_KEY")

file = openai.File.create(
  file=open("samples_prepared_prepared.jsonl", "rb"),
  purpose='fine-tune',
)

tune = openai.FineTune.create(
    training_file=file.id, 
    model="davinci",
)

print(tune)