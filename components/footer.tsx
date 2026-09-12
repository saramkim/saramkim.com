import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='border-t border-stone-200 bg-stone-100/60 px-4 py-8'>
      <div className='container mx-auto max-w-4xl text-center text-sm text-stone-600'>
        <div className='flex flex-wrap items-center justify-center gap-x-5 gap-y-3'>
          <a
            href='https://github.com/saramkim'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex min-h-11 items-center rounded-md font-medium underline-offset-4 transition-colors hover:text-stone-950 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-950 focus-visible:ring-offset-2'
            aria-label='GitHub profile (opens in a new tab)'
          >
            GitHub
          </a>
          <span aria-hidden='true' className='h-4 w-px bg-stone-300' />
          <a
            href='mailto:saramkimm@gmail.com'
            className='inline-flex min-h-11 items-center rounded-md font-medium underline-offset-4 transition-colors hover:text-stone-950 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-950 focus-visible:ring-offset-2'
          >
            saramkimm@gmail.com
          </a>
          <span aria-hidden='true' className='hidden h-4 w-px bg-stone-300 sm:block' />
          <Link href='/relay/privacy' lang='en' className='text-link'>
            Relay Privacy
          </Link>
          <span aria-hidden='true' className='hidden h-4 w-px bg-stone-300 sm:block' />
          <span className='basis-full text-stone-500 sm:basis-auto'>© {currentYear} saramkim</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
