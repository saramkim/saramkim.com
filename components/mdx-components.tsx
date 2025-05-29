'use client';

import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

const MDXComponents = {
  h1: ({ children }: { children: React.ReactNode }) => <h1 className='text-3xl font-bold mt-8 mb-4'>{children}</h1>,
  h2: ({ children }: { children: React.ReactNode }) => <h2 className='text-2xl font-bold mt-6 mb-3'>{children}</h2>,
  h3: ({ children }: { children: React.ReactNode }) => <h3 className='text-xl font-bold mt-5 mb-2'>{children}</h3>,
  h4: ({ children }: { children: React.ReactNode }) => <h4 className='text-lg font-bold mt-4 mb-2'>{children}</h4>,
  p: ({ children }: { children: React.ReactNode }) => <p className='my-4 leading-relaxed'>{children}</p>,
  a: ({ href, children }: { href?: string; children: React.ReactNode }) => (
    <a href={href} className='text-blue-600 hover:underline'>
      {children}
    </a>
  ),
  ul: ({ children }: { children: React.ReactNode }) => <ul className='list-disc pl-6 my-4'>{children}</ul>,
  ol: ({ children }: { children: React.ReactNode }) => <ol className='list-decimal pl-6 my-4'>{children}</ol>,
  li: ({ children }: { children: React.ReactNode }) => <li className='my-1'>{children}</li>,
  blockquote: ({ children }: { children: React.ReactNode }) => (
    <blockquote className='border-l-4 border-gray-200 pl-4 py-1 my-4 italic'>{children}</blockquote>
  ),
  code: ({ className, children }: { className?: string; children: React.ReactNode }) => {
    if (!className) {
      return <code className='bg-gray-100 px-1.5 py-0.5 rounded font-mono text-sm'>{children}</code>;
    }

    const language = className.replace('language-', '');
    return (
      <SyntaxHighlighter language={language} style={tomorrow} className='rounded-md my-4'>
        {String(children).trim()}
      </SyntaxHighlighter>
    );
  },
  pre: ({ children }: { children: React.ReactNode }) => <div className='my-6'>{children}</div>,
  hr: () => <hr className='my-8 border-t border-gray-200' />,
  table: ({ children }: { children: React.ReactNode }) => (
    <div className='overflow-x-auto my-6'>
      <table className='min-w-full border-collapse border border-gray-200'>{children}</table>
    </div>
  ),
  th: ({ children }: { children: React.ReactNode }) => (
    <th className='border border-gray-200 px-4 py-2 text-left font-semibold bg-gray-50'>{children}</th>
  ),
  td: ({ children }: { children: React.ReactNode }) => <td className='border border-gray-200 px-4 py-2'>{children}</td>,
  img: ({ src, alt }: { src?: string; alt?: string }) => (
    <img src={src} alt={alt || ''} className='max-w-full my-4 rounded' />
  ),
};

export default MDXComponents;
