import Link from 'next/link';

interface CardProps {
  href: string;
  title: string;
  description: string;
  meta?: string;
}

export function Card({ href, title, description, meta }: CardProps) {
  return (
    <Link
      href={href}
      className='group relative flex flex-col gap-3 rounded-lg border border-line bg-surface p-7 transition-colors duration-200 hover:border-accent-text'
    >
      <h2 className='text-2xl font-bold tracking-[-0.03em] text-ink md:text-3xl'>{title}</h2>
      <p className='text-[0.95rem] leading-7 text-body'>{description}</p>
      {meta && <span className='font-mono text-xs font-medium uppercase tracking-[0.08em] text-muted'>{meta}</span>}
      <span
        aria-hidden='true'
        className='mt-auto pt-3 text-sm font-medium text-muted transition-all group-hover:translate-x-1 group-hover:text-accent-text'
      >
        View details&nbsp;→
      </span>
    </Link>
  );
}
