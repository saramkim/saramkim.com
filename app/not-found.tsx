import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className='site-container flex min-h-[65vh] flex-col items-start justify-center py-20'>
      <p className='eyebrow'>404 · Not found</p>
      <h1 className='mt-5 text-5xl font-semibold tracking-[-0.045em] sm:text-6xl'>페이지를 찾을 수 없습니다.</h1>
      <p className='mt-5 max-w-xl text-lg leading-8 text-stone-600'>
        주소가 바뀌었거나 존재하지 않는 페이지입니다. 홈페이지에서 다시 시작해 주세요.
      </p>
      <Link href='/' className='button-primary mt-8'>
        <ArrowLeft aria-hidden='true' size={17} />
        홈으로 돌아가기
      </Link>
    </div>
  );
}
