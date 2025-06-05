const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='border-t border-gray-200 py-6 px-4'>
      <div className='container mx-auto max-w-4xl text-center text-gray-600 text-sm'>
        <p>© {currentYear} saramkim. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
