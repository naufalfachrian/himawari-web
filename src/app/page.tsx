import { MainMenu } from '@/components/mainMenu'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between lg:flex">
        <div className="fixed left-0 top-24 flex h-auto w-full justify-center lg:static lg:h-aut lg:w-auto">
          <Image
            src="/himawari.png"
            alt="Himawari Logo"
            width={180}
            height={60}
            priority
            />
        </div>
        <div className="fixed bottom-0 left-0 hidden h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative hidden place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:max-w-5xl lg:w-full lg:grid-cols-4 lg:text-left">
        <MainMenu 
          title={'Talents'} 
          description={'Find more information about our talents!'} 
          href={'/'}
        />
        <MainMenu 
          title={'About'} 
          description={'How we started and our vision!'}
          href={'/'}
        />
        <MainMenu 
          title={'Join'} 
          description={'Let\'s join us and grow together!'}
          href={'/'}
        />
        <MainMenu 
          title={'Contact Us'} 
          description={'We look forward to hearing from you!'}
          href={'/'}
        />
      </div>

      <div className="fixed bottom-0 left-0 w-full flex justify-center">
        <span
          className="pointer-events-none flex place-items-center gap-2 p-4 lg:pointer-events-auto text-sm opacity-50 font-brand"
        >
          ©️ 2021 Himawari, PT. Mekar Bersama Bunga (Perorangan)
        </span>
      </div>
    </main>
  )
}
