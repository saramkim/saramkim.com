import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { contactEmail, webSubtitleUrl } from '@lib/products';

const Footer = () => (
  <footer className='site-footer'>
    <div className='site-container'>
      <div className='footer-grid'>
        <div className='footer-brand'>
          <Link href='/' className='text-xl font-semibold tracking-tight'>
            saramkim<span className='text-teal-700'>.</span>
          </Link>
          <p>작은 도구로, 더 편한 일상.</p>
          <a href={`mailto:${contactEmail}`} className='text-link'>
            {contactEmail}
          </a>
        </div>
        <nav aria-label='제품 및 도움'>
          <h2 className='footer-heading'>제품</h2>
          <Link href='/play-plus'>Play Plus</Link>
          <a href={webSubtitleUrl}>
            WebSubtitle <ArrowUpRight size={13} aria-hidden='true' />
          </a>
          <Link href='/#help'>도움·문의</Link>
        </nav>
        <nav aria-label='제작자와 기록'>
          <h2 className='footer-heading'>만드는 사람</h2>
          <Link href='/about'>소개</Link>
          <Link href='/blog'>글</Link>
          <Link href='/projects'>제작 사례</Link>
          <a href='https://github.com/saramkim'>
            GitHub <ArrowUpRight size={13} aria-hidden='true' />
          </a>
        </nav>
        <nav aria-label='개인정보 및 앱 안내'>
          <h2 className='footer-heading'>개인정보·앱 안내</h2>
          <Link href='/play-plus/privacy'>Play Plus 개인정보</Link>
          <Link href='/relay/privacy' lang='en'>
            Relay Privacy
          </Link>
          <Link href='/worktrace'>Worktrace Backup</Link>
          <Link href='/worktrace/privacy'>Worktrace Backup 개인정보</Link>
        </nav>
      </div>
      <div className='footer-bottom'>
        <span>© {new Date().getFullYear()} saramkim</span>
        <span>독립적으로 만들고, 꾸준히 다듬습니다.</span>
      </div>
    </div>
  </footer>
);

export default Footer;
