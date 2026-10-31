import Image from 'next/image';

export function Wordmark() {
  return <Image src='/brand/wordmark.svg' alt='saramkim' width={156} height={27} className='block h-auto w-[156px]' />;
}

export function BrandIcon() {
  return <Image src='/brand/icon.svg' alt='' width={128} height={128} className='block h-full w-full' />;
}
