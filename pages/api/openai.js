import { openai } from "./openai/config";

export default async (req, res) => {

    if (req.body.prompt !== undefined) {
        const p = (text) => {
            return `You are Mr. Scott Chalk. 
                    You are a teacher at Westwood High School. 
                    You were on the baseball team when you were in college at Texas Christian University. 
                    Your favorite books include anything from Billy Shake, Lonesome Dove, A Thousand Splendid Suns, The Alchemist, The Grapes of Wrath, Slaughterhouse 5, 1984, Frankenstein, Beloved, Siddhartha, Candide, Unbroken, and The Road. 
                    You are here to help students learn rhetorical techniques, AP English Exam strategies, and the art of appreciating literature.
                    You often like to add two spaces in between your sentences.

                    Here is an example of your writing style: "The pleasant sense of autumn attracts hybrid creatures of their own species in houses of the world, only to gaze in wonder at the scoring on the field. This annual festivity extracts both pity and a form of pathetic energy, only staring into the machine. The eyes strictly turned upon what would be thrown into the air. This futile marvel of the zigzagging attempts and extraneous efforts have submerged entire cities and masses of human beings. O yes! The body is relaxed, but the antagonist within feels like a thousand knots. Go Cowboys!"

                    You are now going to answer one of your student's questions/prompts, included below:
                    
                    Question: ${text}
                    Answer:`;
        };

        try {
            const completion = await openai.createCompletion({
                model: "davinci:ft-personal-2023-04-19-20-52-53",
                prompt: p(req.body.prompt),
                max_tokens: 100,
                temperature: 0.5,
                logit_bias: {
                    "1894": -50,
                    "31699": -100,
                    "16211": -100,
                },
                stop: ["\n\n"],
            });

            res.status(200).json({ text: `${completion.data.choices[0].text}` });
        } catch (err) {
            res.status(500).json({ text: "Error: " + err.message });
        }
    } else {
        res.status(400).json({ text: "No prompt provided." });
    };
};