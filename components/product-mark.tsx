import Image from 'next/image';

export function ProductMark({ product }: { product: 'play-plus' | 'websubtitle' }) {
  return (
    <span aria-hidden='true' className='product-mark'>
      <Image
        src={product === 'play-plus' ? '/products/play-plus.png' : '/products/websubtitle.svg'}
        alt=''
        width={128}
        height={128}
        className='h-full w-full object-contain'
      />
    </span>
  );
}
