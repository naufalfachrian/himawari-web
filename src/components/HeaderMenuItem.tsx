export default function HeaderMenuItem({
  title,
  href
}: {
  title: string,
  href: string
}) {
  return (
    <a className='rounded-xl text-brand-white py-2 px-3 font-brand hover:bg-brand-white hover:text-brand-blue' href={href}>
      {title}
    </a>
  )
}