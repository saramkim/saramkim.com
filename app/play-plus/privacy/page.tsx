import type { Metadata } from 'next';

const description = 'Play Plus의 자발적 의견 보내기 기능에서 처리하는 정보, 90일 보관, Cloudflare 이용 및 문의·삭제 요청 방법을 안내합니다.';

export const metadata: Metadata = {
  title: 'Play Plus 의견 보내기 개인정보 처리방침',
  description,
  alternates: { canonical: '/play-plus/privacy' },
  openGraph: { title: 'Play Plus Feedback Privacy', description, url: '/play-plus/privacy', locale: 'ko_KR' },
  twitter: { title: 'Play Plus Feedback Privacy', description },
};

export default function PlayPlusPrivacyPage() {
  return (
    <article className='site-container article-shell'>
      <header className='article-header'>
        <h1 className='article-title'>Play Plus 의견 보내기 개인정보 처리방침</h1>
        <p className='mt-7 text-sm text-stone-600'>최종 수정일: <time dateTime='2026-10-15'>2026년 10월 15일</time></p>
        <nav aria-label='문서 언어 / Document language' className='mt-5 flex flex-wrap gap-5'>
          <a className='text-link' href='#korean' lang='ko'>한국어</a>
          <a className='text-link' href='#english' lang='en'>English</a>
        </nav>
      </header>
      <div className='prose prose-stone prose-lg max-w-none break-words'>
        <section id='korean' lang='ko' aria-labelledby='korean-title'>
          <h2 id='korean-title'>적용 범위와 운영자</h2>
          <p>이 방침은 Play Plus 확장 프로그램의 선택적 ‘의견 보내기’ 기능에 적용됩니다. 운영자 및 개인정보 문의 담당자는 김유준이며, 문의처는 <a href='mailto:saramkimm@gmail.com'>saramkimm@gmail.com</a>입니다. 의견 수집은 해당 기능이 활성화된 버전에서만 이루어집니다.</p>

          <h2>어떤 정보를 왜 처리하나요?</h2>
          <p>운영자는 의견을 읽고 오류를 파악하거나 기능과 사용성을 개선하기 위해 다음 정보를 처리합니다.</p>
          <ul>
            <li>사용자가 직접 작성하여 보낸 의견 본문: 앞뒤 공백을 제외한 1~1,000자</li>
            <li>확장 프로그램 버전: 의견이 해당하는 버전을 파악하기 위한 정보</li>
            <li>무작위 접수 ID: 같은 의견을 재시도할 때 중복 저장을 방지하기 위한 전송별 식별값</li>
            <li>서버 접수 시각: 보관 기간 계산 및 접수 확인에 사용하는 UTC 시각</li>
          </ul>
          <p>이름, 이메일, 전화번호, 계정 정보를 입력하는 필드는 없습니다. 시청 기록, 영상 주소·제목, 자막, 업로드 파일, 쿠팡 계정 정보와 쿠키를 의견에 자동으로 첨부하지 않습니다. 다만 자유롭게 작성한 글에 개인정보가 포함될 수 있으므로 본인이나 다른 사람의 이름, 연락처, 민감한 내용은 적지 말아 주세요.</p>
          <p>접수 ID는 사람을 추적하는 고정 식별자가 아닙니다. 운영자는 의견 데이터를 판매하거나 광고 타기팅에 사용하지 않습니다. 익명 의견에 대한 개별 답변은 보장하지 않습니다.</p>

          <h2>언제 전송되며 거부할 수 있나요?</h2>
          <p>사용자가 전송 안내를 읽고 ‘보내기’를 누른 경우에만 전송을 시도합니다. 설치, 안내 열기, 입력, 배너 닫기만으로 의견을 전송하지 않습니다. 최초 전송 시 Chrome이 수집 서버에 대한 선택적 접근 권한을 요청할 수 있습니다. 거부하거나 의견을 보내지 않아도 기존 자막·재생 기능을 계속 사용할 수 있습니다.</p>
          <p>전송 전 초안은 열린 패널 메모리에만 있으며, 취소하거나 패널을 닫으면 사라질 수 있습니다. 실패 시 패널 안에 글을 남겨 직접 재시도할 수 있게 합니다. 서버 저장이 확인된 경우에만 성공으로 표시합니다. 배너를 닫았는지는 기기의 확장 프로그램 저장소에 기록하며 의견 서버로 보내지 않습니다.</p>

          <h2>Cloudflare 처리와 국외 처리</h2>
          <p>수집 API와 데이터베이스는 미국 법인 Cloudflare, Inc.의 Workers 및 D1 서비스를 사용합니다. 의견 전송 시 HTTPS 통신으로 위 정보가 Cloudflare에 전달되어 처리·보관됩니다. 네트워크 요청은 Cloudflare의 글로벌 인프라에서 처리될 수 있으며, 국내 전용 처리·보관을 보장하지 않습니다.</p>
          <p>Cloudflare는 서비스 제공과 보안·남용 방지를 위해 IP 주소 등 연결 정보를 처리할 수 있습니다. Play Plus Worker는 연결 IP를 일시적인 요청 횟수 제한에 사용하지만 의견 데이터베이스에 IP나 브라우저 정보를 저장하지 않으며, 의견 본문을 애플리케이션 로그에 기록하지 않습니다. 플랫폼 자체의 연결 정보 처리는 Cloudflare의 정책에 따릅니다.</p>
          <p>수탁 서비스의 자세한 설명은 <a href='https://www.cloudflare.com/privacypolicy/'>Cloudflare 개인정보 처리방침</a>과 <a href='https://www.cloudflare.com/cloudflare-customer-dpa/'>데이터 처리 부속계약</a>에서 확인할 수 있습니다. Cloudflare의 개인정보 문의처는 <a href='mailto:privacyquestions@cloudflare.com'>privacyquestions@cloudflare.com</a>입니다. 전송을 원하지 않으면 ‘보내기’를 누르지 않거나 선택적 서버 권한을 거부하면 됩니다.</p>

          <h2>보관과 삭제</h2>
          <p>의견 원문과 접수 정보는 접수일부터 90일간 보관한 뒤 매일 실행하는 정리 작업에서 삭제합니다. 실행 간격에 따라 실제 삭제까지 최대 하루가 더 걸릴 수 있습니다. 정리 작업이 실패하면 운영자가 확인하고 복구합니다.</p>
          <p>현재 사용하는 무료 D1의 복구 이력에는 삭제된 데이터가 최대 7일 더 남을 수 있습니다. 복구 이력은 장애 복구용이며 일반적인 의견 열람에 사용하지 않습니다. 복구를 수행할 때에는 삭제·만료된 의견이 다시 남지 않도록 정리합니다. 실제 의견을 공개 저장소나 공개 이슈에 그대로 복사하지 않습니다.</p>

          <h2>열람·정정·삭제·처리 중단 요청</h2>
          <p><a href='mailto:saramkimm@gmail.com'>saramkimm@gmail.com</a>으로 요청할 수 있습니다. 해당 의견을 찾을 수 있도록 대략적인 전송 시각과 본문 일부를 알려 주세요. 불필요한 신분증이나 민감한 정보는 보내지 마세요. 별도 사용자 계정을 수집하지 않으므로 작성자를 확인하거나 요청한 의견을 식별하기 어려울 수 있으며, 가능한 처리 범위를 안내합니다.</p>
          <p>Chrome에서 수집 서버 접근 권한을 철회하거나 확장 프로그램을 제거하면 이후 전송을 막을 수 있습니다. 이미 저장된 의견은 자동 삭제 일정 또는 운영자에게 요청한 삭제 절차에 따라 처리됩니다.</p>

          <h2>이 안내 페이지와 방침 변경</h2>
          <p>개인정보 안내 링크는 별도의 saramkim.com 웹페이지를 엽니다. 이 사이트는 Vercel에서 제공되며 기존 Vercel Speed Insights로 페이지 성능을 측정합니다. 페이지 방문에 필요한 연결 정보와 성능 정보 처리는 확장 프로그램의 의견 전송과 별개입니다. <a href='https://vercel.com/legal/privacy-policy'>Vercel 개인정보 처리방침</a>을 참고할 수 있습니다.</p>
          <p>처리 항목, 목적, 보관 기간 또는 수탁 서비스가 변경되면 이 페이지의 내용과 최종 수정일을 갱신하고 필요한 안내를 제공합니다.</p>
        </section>

        <hr />

        <section id='english' lang='en' aria-labelledby='english-title'>
          <h2 id='english-title'>Play Plus feedback privacy policy</h2>
          <p>This policy covers the optional Send feedback feature when enabled in Play Plus. The operator and privacy contact is Kim Yujun (김유준), reachable at <a href='mailto:saramkimm@gmail.com'>saramkimm@gmail.com</a>. Last updated: October 15, 2026.</p>

          <h3>Information and purpose</h3>
          <p>The developer reads voluntarily submitted feedback to understand issues and improve features and usability. The database stores only your message (1–1,000 characters after trimming), extension version, a random per-submission receipt ID for duplicate prevention, and a server-generated UTC receipt time.</p>
          <p>There are no name, email, phone or account fields. Viewing history, video URLs or titles, subtitles, uploaded files, Coupang account information and cookies are not automatically attached. Free text may still contain personal information; please do not include names, contact details or sensitive information about yourself or others. The receipt ID is not a persistent person identifier. The operator does not sell feedback or use it for advertising targeting. Individual replies to anonymous feedback are not guaranteed.</p>

          <h3>Your choice and transmission</h3>
          <p>A submission is attempted only when you select Send after reading the notice. Installing, opening, typing or dismissing the banner does not submit feedback. Chrome may request optional access to the feedback server on the first submission. Declining or choosing not to send does not prevent existing subtitle or playback features from working.</p>
          <p>Unsent text stays in the open panel&apos;s memory and may be lost when you cancel or close it. On failure, the panel keeps the text for a manual retry. Success is shown only after confirmed server storage. Banner dismissal is stored on your device and is not sent to the feedback server.</p>

          <h3>Cloudflare and international processing</h3>
          <p>The API and database use Workers and D1 provided by Cloudflare, Inc., a United States company. When you send, the information described above is transmitted over HTTPS to Cloudflare for processing and storage. Requests may be processed through Cloudflare&apos;s global infrastructure; Korea-only processing or storage is not guaranteed.</p>
          <p>Cloudflare may process connection metadata such as IP addresses to deliver and secure its services. The Play Plus Worker uses the connecting IP transiently for rate limiting, but does not store it or browser information in the feedback database and does not log message contents. Cloudflare&apos;s own metadata processing follows its policies.</p>
          <p>See <a href='https://www.cloudflare.com/privacypolicy/'>Cloudflare&apos;s privacy policy</a> and <a href='https://www.cloudflare.com/cloudflare-customer-dpa/'>data processing addendum</a>. Its privacy contact is <a href='mailto:privacyquestions@cloudflare.com'>privacyquestions@cloudflare.com</a>. To decline transmission, do not select Send or deny the optional server permission.</p>

          <h3>Retention and deletion</h3>
          <p>Messages and receipt information are retained for 90 days, then removed by a daily cleanup. The schedule can add up to one day before deletion. Failed cleanup requires operator investigation and recovery. Deleted data may remain in the current free D1 plan&apos;s recovery history for up to seven additional days. Recovery history is used for incident recovery, not routine feedback review; expired or deleted feedback must be cleaned up after a restore. Real feedback is not copied verbatim into public repositories or public issues.</p>

          <h3>Access, correction, deletion and stopping processing</h3>
          <p>Contact <a href='mailto:saramkimm@gmail.com'>saramkimm@gmail.com</a> with the approximate submission time and a relevant excerpt. Do not send unnecessary identity documents or sensitive details. Since no user account is collected, identifying a submission or verifying its author may be difficult; the operator will explain what can be done. Revoking the server permission or removing the extension prevents future submissions but does not itself delete already stored feedback.</p>

          <h3>This website and policy updates</h3>
          <p>The privacy link opens a separate saramkim.com page hosted by Vercel. The website uses its existing Vercel Speed Insights to measure page performance. Website connection and performance information is separate from extension feedback submissions; see <a href='https://vercel.com/legal/privacy-policy'>Vercel&apos;s privacy policy</a>. Changes to information, purposes, retention or providers will be reflected here with an updated date and appropriate notice.</p>
        </section>
      </div>
    </article>
  );
}
