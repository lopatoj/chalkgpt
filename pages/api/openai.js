import { openai } from "./openai/config";

export default async (req, res) => {
    const add = (prompt) => {
        return `This is an essay about ${prompt}, using vivid descriptions ;and complex rhetorical techniques:`;
    }

    if (req.body.prompt !== undefined) {
        try {
            const completion = await openai.createCompletion({
                model: "davinci:ft-personal-2023-04-19-11-13-09",
                prompt: add(req.body.prompt),
                max_tokens: 300,
            });

            res.status(200).json({ text: `${completion.data.choices[0].text}` });
        } catch (err) {
            res.status(500).json({ text: "error" + err.message });
        }
    } else {
        res.status(400).json({ text: "No prompt provided." });
    };
};