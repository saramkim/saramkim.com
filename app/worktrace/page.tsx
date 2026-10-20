import type { Metadata } from 'next';
import Link from 'next/link';

const description = 'Worktrace Backup은 작업을 마친 뒤 로컬에서 백업을 검증·암호화하고 개인 Google Drive에 저장하는 개인용 수동 백업 도구입니다.';

export const metadata: Metadata = {
  title: 'Worktrace Backup',
  description,
  alternates: { canonical: '/worktrace' },
  openGraph: { title: 'Worktrace Backup', description, url: '/worktrace', locale: 'ko_KR' },
  twitter: { title: 'Worktrace Backup', description },
};

export default function WorktracePage() {
  return (
    <article className='site-container article-shell'>
      <header className='article-header'>
        <h1 className='article-title'>Worktrace Backup</h1>
        <p className='mt-7 text-stone-600'>개인용 수동 백업 / Personal manual backup</p>
        <nav aria-label='문서 언어 / Document language' className='mt-5 flex flex-wrap gap-5'>
          <a className='text-link' href='#korean' lang='ko'>한국어</a>
          <a className='text-link' href='#english' lang='en'>English</a>
        </nav>
      </header>
      <div className='prose prose-stone prose-lg max-w-none break-words'>
        <section id='korean' lang='ko' aria-labelledby='korean-title' className='scroll-mt-24'>
          <h2 id='korean-title'>작업을 마친 뒤, 직접 백업</h2>
          <p>Worktrace Backup은 김유준이 운영하는 개인용 로컬 백업 도구이자 Google OAuth 앱 이름입니다. Worktrace의 로컬 기록과 파일을 사용자의 개인 Google Drive에 암호화해 보관하기 위한 도구이며, 별도 회원가입이나 개발자 수집 서버가 없습니다.</p>
          <ol>
            <li>Worktrace 작업을 종료하고 사용자가 수동 백업을 실행합니다.</li>
            <li>로컬 백업을 만들고 검증한 뒤, rclone crypt로 파일 내용과 이름을 로컬에서 암호화합니다.</li>
            <li>사용자가 Google OAuth로 허용한 개인 Drive에 암호화된 백업을 업로드하고, 다시 내려받아 대조·복호화·검증합니다.</li>
          </ol>
          <p>Google Drive 접근은 앱이 생성하거나 사용자가 앱에 허용한 파일을 다루는 <code>drive.file</code> 범위로 제한하도록 설계했습니다. 계정 연결과 실제 업로드는 사용자가 별도로 실행합니다. 자동 스케줄러, 자동 삭제, 동기화는 없습니다.</p>
          <p>로컬에는 평문 백업과 검증용 복사본이 남을 수 있습니다. 사용자가 백업과 복구키를 관리해야 하며, 키를 잃으면 복구가 어려울 수 있습니다. 이 안내는 Worktrace 전체 기능이 아닌 Worktrace Backup 수동 백업에 한정됩니다.</p>
          <p><Link href='/worktrace/privacy'>Worktrace Backup 개인정보처리방침</Link></p>
          <p>운영자: 김유준 · 문의: <a href='mailto:saramkimm@gmail.com'>saramkimm@gmail.com</a></p>
        </section>

        <hr />

        <section id='english' lang='en' aria-labelledby='english-title' className='scroll-mt-24'>
          <h2 id='english-title'>Back up manually after work</h2>
          <p>Worktrace Backup is a personal local backup tool operated by Kim Yujun (김유준), and the name of its Google OAuth app. It stores encrypted backups of local Worktrace records and files in the user&apos;s personal Google Drive. It has no separate account registration or developer collection server.</p>
          <ol>
            <li>Finish Worktrace activity and manually start a backup.</li>
            <li>Create and verify a local backup, then encrypt file contents and names locally with rclone crypt.</li>
            <li>Upload the encrypted backup to the personal Drive authorized through Google OAuth, then download, compare, decrypt and verify it.</li>
          </ol>
          <p>Drive access is designed to use only the <code>drive.file</code> scope for files the app creates or the user authorizes for the app. The user separately connects their account and runs the upload. There is no automatic scheduler, automatic deletion or synchronization.</p>
          <p>Plaintext backups and verification copies may remain locally. The user manages backups and recovery keys; losing the keys may prevent recovery. This page covers only Worktrace Backup manual backups, rather than all Worktrace features.</p>
          <p><Link href='/worktrace/privacy#english'>Worktrace Backup Privacy Policy</Link></p>
          <p>Operator: Kim Yujun · Contact: <a href='mailto:saramkimm@gmail.com'>saramkimm@gmail.com</a></p>
        </section>
      </div>
    </article>
  );
}
