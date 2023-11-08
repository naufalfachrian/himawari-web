export function SocialLink({href, src, alt}: {href: string, src: string, alt: string}) {
  return (
    <a className='p-2 rounded-full hover:bg-blue-200' href={href} target="_blank">
      <img src={src} alt={alt} width={24} height={24} />
    </a>
  )
}