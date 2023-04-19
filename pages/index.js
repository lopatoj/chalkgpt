import { Rubik } from 'next/font/google'

const rubik = Rubik({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={rubik.className}>
      <div class="w-full grid content-end justify-center h-screen">
        <div class="p-10 m-5 rounded-md bg-gray-100 shadow-md">
          <form class="w-full max-w-lg mx-auto p-4">
            <input class="w-full bg-gray-200 text-gray-700 border-0 py-2 px-4 mb-4 rounded leading-tight focus:outline-none focus:bg-white" id="prompt" type="text" placeholder="Prompt" />
          </form>
        </div>
      </div>
    </main>
  )
}
