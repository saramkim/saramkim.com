import Image from 'next/image';

export function ProductMark({
  product,
  large = false,
}: {
  product: 'play-plus' | 'websubtitle';
  large?: boolean;
}) {
  return (
    <span
      aria-hidden='true'
      className={`product-mark ${product === 'play-plus' ? 'product-mark-play' : 'product-mark-web'} ${large ? 'product-mark-large' : ''}`}
    >
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
