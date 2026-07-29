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
      className='group relative flex flex-col gap-3 rounded-2xl border border-stone-200 bg-white p-6 shadow-[0_1px_2px_rgba(28,25,23,0.04)] transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-stone-300 hover:shadow-[0_12px_30px_rgba(28,25,23,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-950 focus-visible:ring-offset-4'
    >
      <h2 className='text-xl font-semibold tracking-[-0.02em] text-stone-950 md:text-2xl'>{title}</h2>
      <p className='text-[0.95rem] leading-7 text-stone-600 transition-colors group-hover:text-stone-700'>{description}</p>
      {meta && <span className='text-xs font-medium uppercase tracking-[0.08em] text-stone-500'>{meta}</span>}
      <span
        aria-hidden='true'
        className='mt-1 text-sm font-medium text-stone-500 transition-all group-hover:translate-x-1 group-hover:text-stone-900'
      >
        View details&nbsp;→
      </span>
    </Link>
  );
}
