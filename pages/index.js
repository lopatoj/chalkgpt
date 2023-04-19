import Head from 'next/head'
import { Rubik } from 'next/font/google'

const rubik = Rubik({ subsets: ['latin'] })

export default function Home() {

  const handleSubmit = (e) => {
    e.preventDefault();
    const prompt = e.target.prompt.value;
    console.log(prompt);
  };

  return (
    <main className={rubik.className}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Chalk inspired GPT clone" />
        <meta name="author" content="Justin Lopato" />

        <link rel="icon" href="/favicon.ico" />

        <title>ChalkGPT</title>
      </Head>
      <h1 class="text-2xl text-white inline">ChalkGPT by Justin Lopato</h1>
      <div class="w-screen h-auto flex justify-center">
        <div class="p-5 m-5 rounded-md bg-slate-800 shadow-md fixed bottom-0">
          <form class="w-full max-w-lg mx-auto flex" onSubmit={handleSubmit}>
            <input class="w-full text-3xl bg-gray-700 text-white border-0 py-2 px-2 rounded-l leading-tight focus:outline-none focus:bg-gray-600 " id="prompt" type="text" placeholder="Prompt" />
            <button class="bg-slate-900 text-white p-3 rounded-r" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </main>
  );
}
