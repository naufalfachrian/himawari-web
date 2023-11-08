export function MainMenu({title, description, href}: {title: string, description: string, href: string}) {
    return (
        <a
          href={href}
          className="group rounded-lg border-transparent px-5 py-4 transition-colors hover:bg-brand-white"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            <span className="text-brand-blue bg-brand-white p-2 rounded-lg font-brand">{title}</span>{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none text-brand-blue">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 font-brand`}>
            {description}
          </p>
        </a>
    )
}