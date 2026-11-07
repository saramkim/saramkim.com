import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { Camera } from 'lucide-react';
import { guidePaths } from './guide-status';
import type { Shot } from './shots';

export function GuideSwitch({ current }: { current: 'guide' | 'updates' }) {
  const items = [
    { key: 'guide', href: guidePaths.guide, label: '기본 사용법', hint: '처음 쓰는 분' },
    { key: 'updates', href: guidePaths.updates, label: '2.0 변경 안내', hint: '이전 버전을 쓰던 분' },
  ] as const;
  return (
    <nav className='guide-switch' aria-label='Play Plus 안내'>
      {items.map((item) => (
        <Link key={item.key} href={item.href} aria-current={current === item.key ? 'page' : undefined}>
          <strong>{item.label}</strong>
          <span>{item.hint}</span>
        </Link>
      ))}
    </nav>
  );
}

export function SectionHeader({ index, id, title, lead }: { index: string; id: string; title: string; lead?: ReactNode }) {
  return (
    <header className='guide-section-header'>
      <span className='index-number'>{index}</span>
      <h2 id={id}>{title}</h2>
      {lead ? <p>{lead}</p> : null}
    </header>
  );
}

export function Steps({ items }: { items: ReactNode[] }) {
  return (
    <ol className='guide-steps'>
      {items.map((item, index) => (
        <li key={index}>
          <span aria-hidden='true'>{index + 1}</span>
          <div>{item}</div>
        </li>
      ))}
    </ol>
  );
}

export function Note({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <aside className='guide-note'>
      {title ? <strong>{title}</strong> : null}
      <div>{children}</div>
    </aside>
  );
}

export function ShotFigure({
  shot,
  caption,
  badge,
  size = 'panel',
}: {
  shot: Shot;
  caption: ReactNode;
  badge?: string;
  // panel: side-panel capture; wide: video frame; large: browser window crop; compact: small capture at its own size.
  size?: 'panel' | 'wide' | 'large' | 'compact';
}) {
  return (
    <figure className={`guide-shot${size === 'panel' ? '' : ` guide-shot-${size}`}`}>
      {badge ? <span className='guide-shot-badge'>{badge}</span> : null}
      <div className='guide-shot-frame'>
        <Image
          src={shot.src}
          alt={shot.alt}
          sizes={size === 'wide' || size === 'large' ? '(max-width: 1023px) 90vw, 680px' : '(max-width: 767px) 80vw, 280px'}
          loading='lazy'
        />
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

// A clearly marked slot for a capture that needs a playing Coupang Play video. It never imitates the UI.
export function PendingShot({ id, title, shows, wide = false }: { id: string; title: string; shows: string; wide?: boolean }) {
  return (
    <figure className={`guide-shot guide-shot-pending${wide ? ' guide-shot-wide' : ''}`} data-capture-pending={id}>
      <div className='guide-shot-frame'>
        <Camera size={22} aria-hidden='true' />
        <span className='guide-pending-id'>캡처 대기 · {id}</span>
        <strong>{title}</strong>
        <p>{shows}</p>
      </div>
      <figcaption>쿠팡플레이 재생 화면이 필요해 아직 실제 캡처를 넣지 않았습니다.</figcaption>
    </figure>
  );
}

export function ShotRow({ children }: { children: ReactNode }) {
  return <div className='guide-shot-row'>{children}</div>;
}

export function Kbd({ children }: { children: ReactNode }) {
  return <kbd className='guide-kbd'>{children}</kbd>;
}

// Visible UI labels are quoted exactly as the 2.0 panel shows them.
export function Ui({ children }: { children: ReactNode }) {
  return <span className='guide-ui'>{children}</span>;
}
