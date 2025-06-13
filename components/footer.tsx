const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='border-t border-gray-200 p-4'>
      <div className='container mx-auto max-w-4xl text-center text-gray-600 text-sm'>
        <div className='flex justify-center items-center gap-4 flex-wrap'>
          <a
            href='https://github.com/saramkim'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-gray-900 transition-colors'
            aria-label='GitHub'
          >
            GitHub
          </a>
          <span className='text-gray-400'>|</span>
          <a href='mailto:saramkimm@gmail.com' className='hover:text-gray-900 transition-colors' aria-label='Email'>
            saramkimm@gmail.com
          </a>
          <span className='text-gray-400 hidden sm:inline'>|</span>
          <span>© {currentYear} saramkim</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
