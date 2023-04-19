import Head from 'next/head'

import { openai } from './api/openai/config';

import { useEffect, useState } from 'react';

export default function Home() {
  const [info, setInfo] = useState(false);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (document.getElementById("prompt").innerText === "") return;

    setLoading(true);

    const prompt = document.getElementById("prompt").innerText;
    document.getElementById("prompt").innerText = "";

    const completion = openai.complete({
      engine: "davinci",
      prompt: prompt,
    });

    setMessages([...messages, { prompt: prompt, response: completion.data.choices[0].text }]);

    console.log(messages);
    setLoading(false);
  };

  const toggle = () => {
    setInfo(!info);
  }

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, [messages]);

  return (
    <main>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Chalk inspired GPT clone" />
        <meta name="author" content="Justin Lopato" />

        <link rel="icon" href="/favicon.ico" />

        <title>ChalkGPT</title>
      </Head>
      <div class="fixed bottom-0 w-min p-5">
        <div class={`rounded-md p-3 bg-emerald-800 transition-all shadow-md ${info ? "opacity-100" : "opacity-0"}`}>
          <p class="text-md text-gray-200 transition-all">Hello, this is my submission for my ISP.</p>
          <p class="text-md text-gray-200 mt-3 transition-all">It is a chatbot AI thing that {"(attempts)"} to imitate the writing style of Mr. Chalk.</p>
          <p class="text-md text-gray-200 mt-3 transition-all">To be honest, I am unsure of the morality of this.</p>
          <p class="text-md text-gray-200 mt-3 transition-all">Works best in Google Chrome.</p>
        </div>
        <div class="p-4 mt-5 bg-emerald-700 text-white shadow-md w-min rounded-md none transition-all">
          <h1 class="text-2xl w-max font-bold">ChalkGPT by Justin Lopato</h1>
          <button class="pt-2 text-gray-300 text-left text-sm hover:text-white transition" onClick={toggle}>{"Click here to show information."}</button>
        </div>
      </div>
      <div class="w-auto h-auto flex justify-center">
        <div class="w-1/3 font-mono pt-5">
          {messages.length === 0 && <div class="text-center mt-10 text-3xl font-bold text-white font-sans">Enter a prompt to get started!</div>}
          {messages.map((message) =>
            <div
              class="w-full p-5 mx-5 mt-5 rounded-md bg-emerald-800 shadow-md text-white transition-all hover:-tranemerald-y-1 hover:shadow-lg hover:bg-[rgb(89,63,47)]"
              style={{ cursor: "pointer" }}
              onClick={() => { setMessages(messages.filter((m) => m !== message)) }}
            >
              <h3 class="font-semibold mb-4">User: {message.prompt}</h3>
              <p>Chalk: {message.response}</p>
            </div>
          )}
          {loading && <div class="text-center mt-5 text-white animate-pulse font-sans">Loading...</div>}
          <div class="h-32"></div>
        </div>
        <div class="fixed bottom-0 w-1/2">
          <form class="w-full flex p-2 m-5 rounded-md bg-emerald-700 shadow-md" onSubmit={handleSubmit}>
            <span class="w-full transition text-3xl bg-emerald-700 text-white border-0 py-2 px-2 rounded-l leading-tight focus:outline-none focus:bg-emerald-600" id="prompt" type="text" role="textbox" contentEditable="plaintext-only" />
            <button class="bg-emerald-700 text-gray-200 p-3 rounded-r text-3xl hover:bg-emerald-600 focus:bg-emerald-800 transition" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </main>
  );
}
