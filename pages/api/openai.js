import { openai } from "./openai/config";

export default async (req, res) => {
    if (req.body.prompt !== undefined) {
        try {
            const completion = await openai.createCompletion({
                model: "davinci:ft-personal-2023-04-19-11-13-09",
                prompt: req.body.prompt,
            });

            res.status(200).json({ text: `${completion.data.choices[0].text}` });
        } catch (err) {
            res.status(500).json({ text: err.message });
        }
    } else {
        res.status(400).json({ text: "No prompt provided." });
    }
};