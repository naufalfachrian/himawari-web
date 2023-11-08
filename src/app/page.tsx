import HeaderMenuItem from '@/components/HeaderMenuItem'
import { SocialLink } from '@/components/SocialLink'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <header className="flex items-center p-4 lg:max-w-screen-2xl lg:mx-auto w-full">
        <div className='lg:-mr-auto'>
          <Image
            src="/himawari.png"
            alt="Himawari Logo"
            width={180}
            height={60}
          />
        </div>
        <div className='lg:ml-auto lg:flex gap-4 hidden'>
          <HeaderMenuItem title='Anggota' href='/' />
          <HeaderMenuItem title='Gabung' href='/' />
          <HeaderMenuItem title='Informasi' href='/' />
          <HeaderMenuItem title='Kontak' href='/' />
          <HeaderMenuItem title='Belanja' href='/' />
        </div>
      </header>
      <div className='fixed flex items-center flex-col bottom-0 w-full h-auto'>
        <div className='items-center flex gap-x-4'>
          <SocialLink href={'https://www.youtube.com/@IdHimawari'} src={'/youtube.svg'} alt={'YouTube Logo'} />
          <SocialLink href={'https://discord.com/invite/dDjw6tW9JG'} src={'/discord.svg'} alt={'Discord Logo'} />
          <SocialLink href={'https://twitter.com/IdHimawari'} src={'/twitter.svg'} alt={'Twitter Logo'} />
          <SocialLink href={'https://www.instagram.com/idhimawari/'} src={'/instagram.svg'} alt={'Instagram Logo'} />
        </div>
        <span className='font-brand text-sm opacity-50 pb-6'>
          ©️ 2023 Himawari, PT. Mekar Bersama Bunga (Perorangan)
        </span>
      </div>
    </main>
  )
}
