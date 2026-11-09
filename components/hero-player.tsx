'use client';

import { Bookmark, Captions, Pause, Play, Repeat2 } from 'lucide-react';
import { useEffect, useRef, useState, useSyncExternalStore } from 'react';

const cues = [
  { primary: 'Play it again. Slower this time.', secondary: '다시 한 번, 이번엔 더 천천히.' },
  { primary: 'I finally caught that line.', secondary: '이제야 그 문장이 들렸어.' },
  { primary: 'Save it. I want to remember this one.', secondary: '저장해 둬. 이 문장은 기억하고 싶어.' },
];

const cueSeconds = 4;
const loopSeconds = cueSeconds * cues.length;
const startSeconds = 12 * 60 + 4;
const loopStart = 34;
const loopWidth = 28;

const reducedMotionQuery = '(prefers-reduced-motion: reduce)';
const getReducedMotion = () => window.matchMedia(reducedMotionQuery).matches;
const subscribeReducedMotion = (onChange: () => void) => {
  const query = window.matchMedia(reducedMotionQuery);
  query.addEventListener('change', onChange);
  return () => query.removeEventListener('change', onChange);
};

const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const rest = (seconds % 60).toFixed(1).padStart(4, '0');
  return `00:${String(minutes).padStart(2, '0')}:${rest}`;
};

export function ScreenBackdrop() {
  return (
    <div className='screen-backdrop' aria-hidden='true'>
      {bokeh.map((light, index) => (
        <i key={index} style={light as React.CSSProperties} />
      ))}
    </div>
  );
}

const bokeh = [
  { '--x': '50%', '--y': '-12%', '--size': '42rem', '--tint': 'radial-gradient(closest-side, #e8742c, transparent)', '--alpha': 0.55, '--blur': '0', '--speed': '28s' },
  { '--x': '68%', '--y': '14%', '--size': '50rem', '--tint': 'radial-gradient(closest-side, #0f8f99, transparent)', '--alpha': 0.6, '--blur': '0', '--speed': '34s', '--dx': '-3rem' },
  { '--x': '36%', '--y': '30%', '--size': '32rem', '--tint': 'radial-gradient(closest-side, #1b4fa8, transparent)', '--alpha': 0.65, '--blur': '0', '--speed': '22s' },
  { '--x': '70%', '--y': '14%', '--size': '4.5rem', '--tint': '#ffc56b', '--alpha': 0.75, '--speed': '19s' },
  { '--x': '84%', '--y': '22%', '--size': '7rem', '--tint': '#ff9a4d', '--alpha': 0.4, '--speed': '26s', '--dx': '-2rem' },
  { '--x': '62%', '--y': '38%', '--size': '6rem', '--tint': '#62e0dc', '--alpha': 0.32, '--speed': '23s' },
  { '--x': '91%', '--y': '52%', '--size': '3.5rem', '--tint': '#ffe9b0', '--alpha': 0.7, '--speed': '17s', '--dx': '-1rem' },
  { '--x': '76%', '--y': '58%', '--size': '5rem', '--tint': '#ff6f61', '--alpha': 0.34, '--speed': '21s' },
  { '--x': '54%', '--y': '20%', '--size': '2.75rem', '--tint': '#ffe9b0', '--alpha': 0.6, '--speed': '18s' },
  { '--x': '95%', '--y': '8%', '--size': '5.5rem', '--tint': '#79d7ff', '--alpha': 0.38, '--speed': '25s', '--dx': '-2.5rem' },
];

export function HeroPlayer() {
  const [cue, setCue] = useState(0);
  // Reduced-motion visitors start paused; the toggle lets anyone stop or resume the preview.
  const reducedMotion = useSyncExternalStore(subscribeReducedMotion, getReducedMotion, () => false);
  const [userPaused, setUserPaused] = useState<boolean | null>(null);
  const isPaused = userPaused ?? reducedMotion;
  const playerRef = useRef<HTMLDivElement>(null);
  const timeRef = useRef<HTMLSpanElement>(null);
  const headRef = useRef<HTMLSpanElement>(null);
  const elapsedRef = useRef(0);

  useEffect(() => {
    const hero = playerRef.current?.closest('.home-hero');
    if (!hero) return;

    let frame = 0;
    let last = 0;
    const tick = (now: number) => {
      if (last) elapsedRef.current = (elapsedRef.current + (now - last) / 1000) % loopSeconds;
      last = now;
      const elapsed = elapsedRef.current;
      setCue(Math.floor(elapsed / cueSeconds));
      if (timeRef.current) timeRef.current.textContent = formatTime(startSeconds + elapsed);
      if (headRef.current) headRef.current.style.left = `${loopStart + (elapsed / loopSeconds) * loopWidth}%`;
      frame = requestAnimationFrame(tick);
    };

    // The hero only plays while it is on screen and the visitor has not paused it.
    const observer = new IntersectionObserver(([entry]) => {
      cancelAnimationFrame(frame);
      last = 0;
      const running = entry.isIntersecting && !isPaused;
      hero.toggleAttribute('data-paused', !running);
      if (running) frame = requestAnimationFrame(tick);
    });
    observer.observe(hero);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [isPaused]);

  return (
    <div ref={playerRef} className='hero-player'>
      <div key={cue} className='hero-subtitles' aria-hidden='true'>
        <p className='hero-subtitle-primary' lang='en'>
          {cues[cue].primary}
        </p>
        <p className='hero-subtitle-secondary'>{cues[cue].secondary}</p>
      </div>
      <div className='player-track' aria-hidden='true'>
        <span
          className='player-loop'
          style={{ '--loop-start': `${loopStart}%`, '--loop-width': `${loopWidth}%` } as React.CSSProperties}
        />
        <span ref={headRef} className='player-head' style={{ left: `${loopStart}%` }} />
      </div>
      <div className='site-container player-controls'>
        <div>
          <button
            type='button'
            className='player-toggle'
            aria-label='배경 미리보기 일시정지'
            aria-pressed={isPaused}
            onClick={() => setUserPaused(!isPaused)}
          >
            {isPaused ? <Play size={16} fill='currentColor' /> : <Pause size={16} fill='currentColor' />}
          </button>
          <span ref={timeRef} className='player-time' aria-hidden='true'>
            {formatTime(startSeconds)}
          </span>
          <span className='player-hide-sm' aria-hidden='true'>
            0.75×
          </span>
        </div>
        <div aria-hidden='true'>
          <span className='player-on inline-flex items-center gap-1.5'>
            <Repeat2 size={16} /> A–B
          </span>
          <span className='player-on inline-flex items-center gap-1.5'>
            <Captions size={16} /> EN·KO
          </span>
          <Bookmark size={16} className={cue === 2 ? 'player-saved' : undefined} />
        </div>
      </div>
    </div>
  );
}
