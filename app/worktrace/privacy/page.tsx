import type { Metadata } from 'next';
import Link from 'next/link';

const description = 'Worktrace Backup 수동 백업의 Google Drive 접근, 로컬 암호화와 평문 복사본, 토큰 보관, 연결 해제·삭제 및 복구키 관리를 안내합니다.';

export const metadata: Metadata = {
  title: 'Worktrace Backup 개인정보처리방침',
  description,
  alternates: { canonical: '/worktrace/privacy' },
  openGraph: { title: 'Worktrace Backup Privacy', description, url: '/worktrace/privacy', locale: 'ko_KR' },
  twitter: { title: 'Worktrace Backup Privacy', description },
};

export default function WorktracePrivacyPage() {
  return (
    <article className='site-container article-shell'>
      <header className='article-header'>
        <h1 className='article-title'>Worktrace Backup 개인정보처리방침</h1>
        <p className='mt-7 text-sm text-stone-600'>최종 수정일: <time dateTime='2026-10-20'>2026년 10월 20일</time></p>
        <nav aria-label='문서 언어 / Document language' className='mt-5 flex flex-wrap gap-5'>
          <a className='text-link' href='#korean' lang='ko'>한국어</a>
          <a className='text-link' href='#english' lang='en'>English</a>
        </nav>
      </header>
      <div className='prose prose-stone prose-lg max-w-none break-words'>
        <section id='korean' lang='ko' aria-labelledby='korean-title' className='scroll-mt-24'>
          <h2 id='korean-title'>적용 범위와 운영자</h2>
          <p>이 방침은 <Link href='/worktrace'>Worktrace Backup</Link>의 개인용 수동 백업과 해당 Google OAuth 연결에만 적용됩니다. Worktrace 전체 기능이나 다른 서비스의 처리를 포괄하지 않습니다. 운영자 및 개인정보 문의 담당자는 김유준이며, 문의처는 <a href='mailto:saramkimm@gmail.com'>saramkimm@gmail.com</a>입니다.</p>

          <h2>처리하는 정보와 목적</h2>
          <p>사용자가 작업을 마친 뒤 직접 실행하면 Worktrace 로컬 백업에 포함된 기록과 파일을 읽어 백업·검증·암호화합니다. Google OAuth 승인 후 개인 Google Drive에 암호화된 백업을 저장하고, 파일·폴더 ID, 크기, 체크섬 등 메타데이터와 내려받은 암호문을 대조하여 백업을 검증합니다. 자동 스케줄러, 자동 삭제, 동기화는 없습니다.</p>
          <p>요청 권한은 <code>drive.file</code>로 제한하는 설계입니다. 이는 앱이 생성하거나 사용자가 앱에 허용한 파일을 생성·조회·수정·삭제할 수 있는 범위이며, Drive 전체에 대한 포괄적 접근 권한이 아닙니다. 수동 백업은 업로드와 확인에 이 접근을 사용하며 자동 삭제를 수행하지 않습니다. 실제 승인 권한은 Google 승인 화면과 계정의 연결 정보에서 확인해야 합니다.</p>

          <h2>암호화, 로컬 저장과 복구키</h2>
          <p>rclone crypt가 업로드 전에 로컬에서 파일 내용과 파일·디렉터리 이름을 암호화하며, Drive에는 암호화된 백업을 저장합니다. 로컬에는 평문 백업과 복호화한 검증용 복사본, 암호문, 검증 기록이 남을 수 있습니다. 모든 데이터가 항상 암호화되어 있는 것은 아닙니다. 평문이 다른 동기화 프로그램을 통해 전송되지 않도록 자동 동기화되지 않는 로컬 폴더를 사용하고 접근 권한을 관리해야 합니다.</p>
          <p>OAuth 인증 토큰은 로컬의 암호화된 rclone 설정에 보관합니다. 사용자가 설정 잠금 암호와 별도의 crypt 복구키를 안전하게 보관·관리해야 합니다. 복구키를 잃으면 운영자도 백업을 복구할 수 없을 수 있습니다.</p>

          <h2>전송과 제3자 처리</h2>
          <p>이 백업 기능에는 별도 개발자 수집 서버가 없으며, 백업이나 Google 사용자 데이터를 운영자에게 자동 전송하지 않습니다. 데이터를 판매하거나 광고에 이용·제공하거나 AI 서비스로 자동 전송하지 않습니다. Google API로 받은 정보는 설명된 백업·검증 기능을 위해서만 사용합니다.</p>
          <p>Google은 Drive와 OAuth 서비스 제공을 위해 계정·접속 정보, 업로드 시각, 용량·파일 크기 등 서비스 메타데이터를 처리할 수 있습니다. 파일 암호화가 이러한 메타데이터까지 숨기지는 않습니다. Google의 처리는 <a href='https://policies.google.com/privacy'>Google 개인정보처리방침</a>과 해당 서비스 설정에 따릅니다.</p>

          <h2>보관·삭제와 연결 해제</h2>
          <p>로컬 및 Drive 백업과 검증용 복사본은 사용자가 직접 정리할 때까지 남을 수 있으며, 이 기능에는 자동 보존기간 삭제가 없습니다. 사용자는 로컬 파일과 설정을 직접 삭제하고, Drive 백업은 Google Drive에서 별도로 삭제·휴지통 관리할 수 있습니다. Google 서비스의 삭제·보관 처리는 해당 정책에 따릅니다.</p>
          <p><a href='https://myaccount.google.com/connections'>Google 계정 연결 관리</a>에서 Worktrace Backup의 접근을 철회할 수 있습니다. 연결 해제는 이미 저장된 백업이나 로컬 토큰 파일을 삭제하지 않습니다. 사용을 중단할 때에는 로컬 rclone 설정의 관련 토큰과 불필요한 복사본도 별도로 정리하세요. 운영자는 사용자 기기나 개인 Drive의 백업을 원격으로 열람·삭제하는 별도 서비스를 제공하지 않습니다.</p>

          <h2>이 웹사이트와 방침 변경</h2>
          <p>이 안내 사이트는 Vercel에서 제공되며 기존 Vercel Speed Insights로 페이지 성능을 측정합니다. 방문에 필요한 연결 정보와 성능 정보 처리는 백업 파일 업로드와 별개입니다. <a href='https://vercel.com/legal/privacy-policy'>Vercel 개인정보 처리방침</a>을 참고할 수 있습니다. 처리 내용이 바뀌면 이 페이지와 최종 수정일을 갱신합니다. 문의나 삭제 관련 도움이 필요하면 위 이메일로 연락하되, 인증 토큰·설정 암호·복구키는 보내지 마세요.</p>
        </section>

        <hr />

        <section id='english' lang='en' aria-labelledby='english-title' className='scroll-mt-24'>
          <h2 id='english-title'>Worktrace Backup privacy policy</h2>
          <p>This policy covers only personal manual backups and the associated Google OAuth connection in <Link href='/worktrace#english'>Worktrace Backup</Link>. It does not cover all Worktrace features or other services. The operator and privacy contact is Kim Yujun (김유준), at <a href='mailto:saramkimm@gmail.com'>saramkimm@gmail.com</a>. Last updated: October 20, 2026.</p>

          <h3>Information and purpose</h3>
          <p>After finishing work, the user manually runs a backup. The tool reads records and files included in the local Worktrace backup to back up, verify and encrypt them. With Google OAuth authorization, it stores encrypted backups in personal Google Drive and verifies them using file and folder IDs, sizes, checksums and downloaded ciphertext. There is no automatic scheduler, automatic deletion or synchronization.</p>
          <p>The requested scope is designed to be limited to <code>drive.file</code>: creating, reading, modifying and deleting files the app creates or the user authorizes for the app, rather than blanket access to Drive. Manual backup uses this access for upload and verification and does not automatically delete files. Actual granted permissions must be checked on Google&apos;s consent screen and in the account&apos;s connection details.</p>

          <h3>Encryption, local storage and recovery keys</h3>
          <p>Before upload, rclone crypt encrypts file contents and file and directory names locally. Drive stores encrypted backups. Plaintext backups, decrypted verification copies, ciphertext and verification records may remain locally; not all data is encrypted at all times. Use a local folder outside automatic synchronization and manage access so other sync software does not transmit plaintext.</p>
          <p>OAuth tokens are kept in the local encrypted rclone configuration. The user manages the configuration password and separate crypt recovery keys securely. If the keys are lost, even the operator may be unable to recover the backups.</p>

          <h3>Transfers and third parties</h3>
          <p>This backup feature has no separate developer collection server and does not automatically send backups or Google user data to the operator. Data is not sold, used or shared for advertising, or automatically sent to AI services. Information received from Google APIs is used only for the described backup and verification functions.</p>
          <p>Google may process account and connection information, upload times, storage usage, file sizes and other service metadata to provide Drive and OAuth. File encryption does not hide all such metadata. Google&apos;s processing follows <a href='https://policies.google.com/privacy'>Google&apos;s privacy policy</a> and the relevant service settings.</p>

          <h3>Retention, deletion and revoking access</h3>
          <p>Local and Drive backups and verification copies may remain until the user removes them. This feature has no automatic retention cleanup. Delete local files and configuration directly; separately delete Drive backups and manage its trash. Google&apos;s deletion and retention policies apply to its services.</p>
          <p>Revoke Worktrace Backup access through <a href='https://myaccount.google.com/connections'>Google Account connections</a>. Revocation does not delete stored backups or local token files. When stopping use, separately remove related tokens in the local rclone configuration and unwanted copies. The operator provides no separate service to remotely inspect or delete backups on your device or personal Drive.</p>

          <h3>This website and policy updates</h3>
          <p>This site is hosted by Vercel and uses its existing Vercel Speed Insights to measure page performance. Website connection and performance information is separate from backup uploads; see <a href='https://vercel.com/legal/privacy-policy'>Vercel&apos;s privacy policy</a>. Changes in processing will be reflected here with an updated date. Contact the email above for questions or help with deletion, but do not send tokens, configuration passwords or recovery keys.</p>
        </section>
      </div>
    </article>
  );
}
