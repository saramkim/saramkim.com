import Link from 'next/link';

interface CardProps {
  href: string;
  title: string;
  description: string;
}

export function Card({ href, title, description }: CardProps) {
  return (
    <Link
      href={href}
      className='flex flex-col gap-2 border p-6 bg-white rounded-lg hover:bg-gray-50 transition-colors group'
    >
      <h2 className='text-2xl font-semibold group-hover:text-gray-900 text-gray-800'>{title}</h2>
      <p className='text-gray-600 group-hover:text-gray-900'>{description}</p>
    </Link>
  );
}
