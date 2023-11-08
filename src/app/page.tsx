import { MainMenu } from '@/components/mainMenu'
import { SocialLink } from '@/components/socialLink'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center lg:justify-between lg:flex">
        <div className="left-0 top-24 flex h-auto w-full justify-center lg:static lg:h-auto lg:w-auto">
          <Image
            src="/himawari.png"
            alt="Himawari Logo"
            width={180}
            height={60}
            priority
            />
        </div>
        <div className='font-brand font-medium flex lg:w-auto justify-center'>
          <span className='rounded-lg bg-brand-white p-2 text-brand-blue text-center'>
            Partner Komunitas dan Kreatif untuk Kreator Virtual!
          </span>
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

      <div className="mb-32 grid text-left lg:mb-16 lg:max-w-5xl lg:w-full lg:grid-cols-4 md:grid-cols-2">
        <MainMenu 
          title={'Anggota'} 
          description={'Lihat siapa saja yang bergabung dengan kami!'} 
          href={'/'}
        />
        <MainMenu 
          title={'Gabung'} 
          description={'Mari gabung dan mekar bersama kami!'}
          href={'/'}
        />
        <MainMenu 
          title={'Informasi'} 
          description={'Siapa kami dan apa yang kami lakukan?'}
          href={'/'}
        />
        <MainMenu 
          title={'Kontak'} 
          description={'Bagaimana cara menghubungi kami?'}
          href={'/'}
        />
      </div>

      <div className="fixed bottom-0 left-0 w-full flex flex-col justify-center items-center">
        <div className='items-center flex gap-x-4'>
          <SocialLink href={'https://www.youtube.com/@IdHimawari'} src={'/youtube.svg'} alt={'YouTube Logo'} />
          <SocialLink href={'https://discord.com/invite/dDjw6tW9JG'} src={'/discord.svg'} alt={'Discord Logo'} />
          <SocialLink href={'https://twitter.com/IdHimawari'} src={'/twitter.svg'} alt={'Twitter Logo'} />
          <SocialLink href={'https://www.instagram.com/idhimawari/'} src={'/instagram.svg'} alt={'Instagram Logo'} />
        </div>
        <span
          className="pointer-events-none flex place-items-center gap-2 pb-4 pt-2 lg:pointer-events-auto text-sm opacity-50 font-brand"
        >
          ©️ 2023 Himawari, PT. Mekar Bersama Bunga (Perorangan)
        </span>
      </div>
    </main>
  )
}
