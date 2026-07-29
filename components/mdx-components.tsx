import type { ComponentPropsWithoutRef, ReactNode } from 'react';

const imageDimensions: Record<string, { width: number; height: number }> = {
  '/images/language-still-matters/flowers.webp': { width: 1024, height: 1024 },
  '/images/think-or-vanish/develop_pre.webp': { width: 1050, height: 500 },
  '/images/think-or-vanish/develop_post.webp': { width: 1050, height: 500 },
};

const MDXComponents = {
  h1: ({ children }: { children: ReactNode }) => (
    <h1 className='mb-5 mt-10 text-3xl font-bold tracking-[-0.03em] text-stone-950'>{children}</h1>
  ),
  h2: ({ children }: { children: ReactNode }) => (
    <h2 className='mb-4 mt-12 scroll-mt-24 text-2xl font-semibold tracking-[-0.025em] text-stone-950'>{children}</h2>
  ),
  h3: ({ children }: { children: ReactNode }) => (
    <h3 className='mb-3 mt-9 scroll-mt-24 text-xl font-semibold tracking-[-0.02em] text-stone-950'>{children}</h3>
  ),
  h4: ({ children }: { children: ReactNode }) => (
    <h4 className='mb-2 mt-7 text-lg font-semibold text-stone-950'>{children}</h4>
  ),
  p: ({ children }: { children: ReactNode }) => <p className='my-5 leading-8 text-stone-700'>{children}</p>,
  a: ({ href, children }: { href?: string; children: ReactNode }) => (
    <a
      href={href}
      className='rounded-sm font-medium text-stone-950 underline decoration-stone-400 underline-offset-4 transition-colors hover:decoration-stone-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-950 focus-visible:ring-offset-2'
    >
      {children}
    </a>
  ),
  ul: ({ children }: { children: ReactNode }) => (
    <ul className='my-5 list-disc space-y-2 pl-6 marker:text-stone-400'>{children}</ul>
  ),
  ol: ({ children }: { children: ReactNode }) => (
    <ol className='my-5 list-decimal space-y-2 pl-6 marker:font-medium marker:text-stone-500'>{children}</ol>
  ),
  li: ({ children }: { children: ReactNode }) => <li className='pl-1 leading-7 text-stone-700'>{children}</li>,
  blockquote: ({ children }: { children: ReactNode }) => (
    <blockquote className='my-7 border-l-2 border-stone-900 bg-stone-100 py-1 pl-5 pr-4 text-stone-700 [&>p]:my-3'>
      {children}
    </blockquote>
  ),
  code: ({ className, children, ...props }: ComponentPropsWithoutRef<'code'>) => (
    <code
      className={
        className
          ? `${className} font-mono text-[0.84rem] leading-6 text-stone-100`
          : 'rounded-md bg-stone-200/70 px-1.5 py-0.5 font-mono text-[0.875em] font-medium text-stone-800'
      }
      {...props}
    >
      {children}
    </code>
  ),
  pre: ({ children, ...props }: ComponentPropsWithoutRef<'pre'>) => (
    <pre
      className='my-7 overflow-x-auto rounded-xl border border-stone-800 bg-stone-950 p-5 text-left shadow-sm'
      tabIndex={0}
      {...props}
    >
      {children}
    </pre>
  ),
  hr: () => <hr className='my-10 border-t border-stone-200' />,
  table: ({ children }: { children: ReactNode }) => (
    <div className='my-7 overflow-x-auto rounded-xl border border-stone-200'>
      <table className='min-w-full border-collapse text-sm'>{children}</table>
    </div>
  ),
  th: ({ children }: { children: ReactNode }) => (
    <th className='border-b border-r border-stone-200 bg-stone-100 px-4 py-3 text-left font-semibold text-stone-900 last:border-r-0'>
      {children}
    </th>
  ),
  td: ({ children }: { children: ReactNode }) => (
    <td className='border-b border-r border-stone-200 px-4 py-3 align-top leading-6 text-stone-700 last:border-r-0'>
      {children}
    </td>
  ),
  img: ({ src, alt, width, height, ...props }: ComponentPropsWithoutRef<'img'>) => {
    const dimensions = typeof src === 'string' ? imageDimensions[src] : undefined;

    return (
      // MDX can reference arbitrary local or remote sources, while static export
      // has no image optimization server. Known local images still get dimensions.
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt ?? ''}
        width={width ?? dimensions?.width}
        height={height ?? dimensions?.height}
        loading='lazy'
        decoding='async'
        className='my-8 h-auto max-w-full rounded-xl border border-stone-200 bg-stone-100'
        {...props}
      />
    );
  },
};

export default MDXComponents;
