import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className='max-w-2xl mx-auto'>
      <section className='mb-12'>
        <h1 className='text-3xl md:text-4xl font-bold mb-6'>Hello, I'm Saram Kim</h1>
        <p className='text-lg mb-4'>
          Welcome to my personal website. I'm a developer focused on creating meaningful digital experiences.
        </p>
        <p className='text-lg'>
          This site contains my thoughts, projects, and experiences that I'd like to share with the world.
        </p>
      </section>

      <section className='mb-12'>
        <h2 className='text-2xl font-bold mb-4'>Projects</h2>
        <div className='space-y-6'>
          <div className='border border-gray-200 p-6 rounded-md'>
            <h3 className='text-xl font-semibold mb-2'>Play Plus</h3>
            <p className='mb-4 text-gray-700'>
              A project focused on enhancing interactive experiences. Details coming soon.
            </p>
            <div className='text-gray-500'>Coming soon</div>
          </div>

          <div className='border border-gray-200 p-6 rounded-md'>
            <h3 className='text-xl font-semibold mb-2'>IMJS</h3>
            <p className='mb-4 text-gray-700'>An innovative JavaScript-based solution. Details coming soon.</p>
            <div className='text-gray-500'>Coming soon</div>
          </div>
        </div>
      </section>

      <section>
        <h2 className='text-2xl font-bold mb-4'>Latest Writings</h2>
        <Link href='/blog' className='inline-flex items-center group'>
          <span className='mr-2 group-hover:underline'>Visit my blog</span>
          <ArrowRight size={16} className='transition-transform group-hover:translate-x-1' />
        </Link>
      </section>
    </div>
  );
}
