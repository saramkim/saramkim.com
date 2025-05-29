import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='max-w-2xl mx-auto text-center py-12'>
      <h1 className='text-5xl font-bold mb-6'>404</h1>
      <h2 className='text-2xl font-semibold mb-4'>Page Not Found</h2>
      <p className='text-gray-600 mb-8'>Sorry, the page you are looking for does not exist.</p>
      <Link
        href='/'
        className='inline-block px-6 py-3 border border-black text-black hover:bg-black hover:text-white transition-colors'
      >
        Go Home
      </Link>
    </div>
  );
}
