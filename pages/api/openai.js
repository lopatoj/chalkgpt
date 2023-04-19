import { openai } from "./openai/config";

export default async (req, res) => {
    if (req.body.prompt !== undefined) {
        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: req.body.prompt }],
        });

        res.status(200).json({ text: `${completion.data.choices[0].message.content}` });
    } else {
        res.status(400).json({ text: "No prompt provided." });
    }
};