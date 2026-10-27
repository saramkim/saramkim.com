import type { Metadata } from 'next';

const description = 'Play Plus의 설정 동기화, 자막·저장한 문장, 선택적 OpenSubtitles 검색·다운로드와 의견 전송에서 처리하는 정보와 보관·삭제 방법을 안내합니다.';

export const metadata: Metadata = {
  title: 'Play Plus 개인정보처리방침',
  description,
  alternates: { canonical: '/play-plus/privacy' },
  openGraph: { title: 'Play Plus Privacy', description, url: '/play-plus/privacy', locale: 'ko_KR' },
  twitter: { title: 'Play Plus Privacy', description },
};

export default function PlayPlusPrivacyPage() {
  return (
    <article className='site-container article-shell'>
      <header className='article-header'>
        <h1 className='article-title'>Play Plus 개인정보처리방침</h1>
        <p className='mt-7 text-sm text-stone-600'>최종 수정일: <time dateTime='2026-10-27'>2026년 10월 27일</time></p>
        <nav aria-label='문서 언어 / Document language' className='mt-5 flex flex-wrap gap-5'>
          <a className='text-link' href='#korean' lang='ko'>한국어</a>
          <a className='text-link' href='#english' lang='en'>English</a>
        </nav>
      </header>
      <div className='prose prose-stone prose-lg max-w-none break-words'>
        <section id='korean' lang='ko' aria-labelledby='korean-title'>
          <h2 id='korean-title'>적용 범위와 운영자</h2>
          <p>이 방침은 Play Plus 확장 프로그램의 자막 학습·재생 제어, 선택적 OpenSubtitles 검색·다운로드와 의견 보내기 기능에 적용됩니다. Play Plus는 별도 회원가입이나 로그인을 요구하지 않으며, 쿠팡플레이 이용에는 해당 서비스의 계정과 이용 조건이 적용됩니다. 운영자 및 개인정보 문의 담당자는 김유준이며, 문의처는 <a href='mailto:saramkimm@gmail.com'>saramkimm@gmail.com</a>입니다. 의견 수집은 해당 기능이 활성화된 버전에서만 이루어집니다.</p>

          <h2>기본 기능에서 처리하는 정보</h2>
          <ul>
            <li><strong>설정:</strong> 자막 언어·표시 스타일, 단축키, 이동·반복·재생 속도 설정을 Chrome의 동기화 저장소(chrome.storage.sync)에 저장합니다. Chrome 동기화를 켜면 Google의 동기화 기능을 통해 로그인한 다른 Chrome에 설정이 전달될 수 있습니다. 동기화를 끄면 기기에 저장됩니다. 개발자의 서버로 보내는 정보가 아니며, <a href='https://policies.google.com/privacy'>Google 개인정보처리방침</a>과 Chrome 동기화 설정이 적용됩니다.</li>
            <li><strong>업로드한 자막:</strong> 사용자가 선택한 파일의 자막 내용, 제목, 언어, 등록 시각과 지연 설정을 기기의 확장 프로그램 저장소(chrome.storage.local)에 저장하여 표시·편집합니다. 파일을 개발자 서버에 업로드하지 않습니다.</li>
            <li><strong>저장한 문장:</strong> 저장 기능을 사용하면 자막 본문, 영상 주소, 재생 위치와 저장 시각을 기기에 보관하여 복습하거나 해당 장면을 다시 엽니다. 복사 기능을 사용하면 선택한 자막을 시스템 클립보드에 씁니다. 클립보드 내용을 읽어 수집하지 않습니다.</li>
            <li><strong>탭·재생·기본 자막:</strong> 패널 연결과 영상 탐지를 위해 활성 탭의 주소·제목 등 탭 정보, 영상 식별값·재생 상태와 쿠팡플레이 자막을 처리합니다. 저장한 장면을 열 때 열린 탭의 주소를 비교합니다. 연결 상태, 자막, 처리 대기 정보는 메모리와 Chrome 세션 저장소에 일시 보관합니다. 일반 웹 탐색 이력을 개발자에게 전송하지 않습니다.</li>
            <li><strong>화면 상태:</strong> 테마, 마지막 패널 화면, 시작 안내 완료 여부와 배너를 닫았는지를 기기의 패널 저장소(localStorage)에 저장합니다.</li>
          </ul>
          <p>기본 자막을 불러올 때 쿠팡플레이의 재생 정보 요청 주소와 요청 헤더를 이용하여 해당 서비스에 요청하고, 제공된 자막 주소에서 자막을 가져옵니다. 연결 준비 중에는 요청 주소와 헤더가 세션 저장소에 잠시 남을 수 있습니다. 이러한 요청에는 쿠팡플레이 서비스가 요구하는 인증 정보가 포함될 수 있으며, 개발자의 의견 서버로 전달하지 않습니다. 쿠팡플레이의 계정·재생 서비스에서 이루어지는 처리는 해당 서비스의 개인정보처리방침이 적용됩니다.</p>

          <h2>기본 기능의 보관·삭제와 권한</h2>
          <p>업로드한 자막과 저장한 문장은 사용자가 해당 목록에서 삭제할 때까지 기기에 남습니다. 확장 프로그램을 제거하면 기기의 확장 프로그램 저장 데이터가 삭제됩니다. 동기화된 설정은 Chrome의 동기화·데이터 관리 기능으로 관리할 수 있습니다. 일시적인 세션 저장소는 확장 프로그램을 다시 로드하거나 브라우저를 재시작하면 지워집니다. 운영자는 기기에만 저장된 자막이나 문장을 원격으로 열람·삭제할 수 없습니다.</p>
          <p>저장소 권한은 설정과 자막 보관에, unlimitedStorage는 자막 저장 용량에, 기존 버전에서 요청하는 tabs 권한은 활성 탭 연결과 저장한 장면 열기를 위한 탭 정보 조회에 사용합니다. 이 권한을 제거한 버전은 쿠팡플레이 사이트 접근 권한으로 해당 사이트의 탭 정보를 확인합니다. webRequest와 쿠팡플레이 사이트 접근 권한은 재생 정보·자막 감지와 페이지 내 기능에, sidePanel은 사이드 패널 제공에 사용합니다. 의견 서버 접근은 별도의 선택적 권한입니다.</p>
          <p>Play Plus는 Chrome Web Store 사용자 데이터 정책과 제한적 사용(Limited Use) 요건에 따라 데이터를 설명된 사용자 기능 제공·개선에만 사용합니다. 데이터를 판매하거나 개인 맞춤 광고에 사용·전달하지 않습니다. 운영자가 읽는 정보는 사용자가 명시적으로 전송에 동의한 의견이나 직접 보낸 문의 내용이며, 기기의 자막·저장한 문장을 자동 수집해 읽지 않습니다.</p>

          <h2 id='online-subtitles'>선택적 OpenSubtitles 검색·다운로드</h2>
          <p>온라인 자막 검색을 지원하는 버전에서는 사용자가 해당 화면에서 검색을 켠 경우에만 OpenSubtitles 검색 API(api.opensubtitles.com)에 요청합니다. 현재 작품의 제목, 자막 언어, 작품 유형, 시즌·회차가 검색 조건으로 전송되며, 사용자가 검색어를 수정하거나 연도를 입력하면 그 값도 전송됩니다. 결과 페이지를 요청하면 페이지 번호도 포함됩니다. 검색이 켜진 화면에서 작품이 바뀌면 자동으로 다시 검색합니다.</p>
          <p>요청에는 Play Plus의 앱 API 식별 정보와 확장 프로그램 버전이 포함됩니다. OpenSubtitles는 요청을 처리하면서 IP 주소 등 연결 정보를 처리할 수 있으며, 제목·회차 등의 검색 조건으로 관심 작품이나 시청 중인 작품을 추정할 수 있습니다. 쿠팡 계정 정보, 쿠팡 쿠키, 영상 주소, 업로드한 자막 파일과 저장한 문장을 OpenSubtitles에 보내지 않습니다. 별도의 OpenSubtitles 로그인이나 계정 정보 입력을 요구하지 않고, API·다운로드 요청에 쿠키를 첨부하지 않습니다.</p>
          <p>‘받아서 등록’을 누르면 선택한 자막의 파일 ID와 요청 형식을 OpenSubtitles 다운로드 API로 보내고, 응답으로 받은 www.opensubtitles.com의 다운로드 주소에서 자막 파일을 가져옵니다. 다운로드 요청은 실패하거나 취소해도 서비스 이용 한도에 반영될 수 있습니다. 받은 자막의 내용·제목·언어 등 등록 정보는 기기의 확장 프로그램 저장소(chrome.storage.local)에 저장하며, 자막 관리에서 삭제할 수 있습니다. Play Plus 개발자의 의견 서버로 검색 조건이나 다운로드한 파일을 보내지 않습니다.</p>
          <p>검색 켜기 여부는 기기에 저장하고, 검색 조건과 결과는 열린 화면의 메모리에서 처리합니다. 검색을 끄거나 해당 화면을 나가면 이후 자동 검색을 멈추고 진행 중인 요청의 취소를 시도합니다. 검색을 끄거나 확장 프로그램을 제거해도 OpenSubtitles에 이미 전달된 정보가 삭제되는 것은 아닙니다. 검색을 사용하지 않아도 직접 자막 파일을 추가하는 기능과 기존 재생 기능을 이용할 수 있습니다.</p>
          <p>OpenSubtitles는 Play Plus 운영자와 별개의 외부 서비스입니다. 외부 서비스의 보관·삭제와 요청에 관한 처리는 <a href='https://opensubtitles.tawk.help/article/privacy-policy'>OpenSubtitles 개인정보처리방침</a>과 해당 서비스의 문의 절차를 따릅니다. 이 안내는 외부 API의 특정 보관 기간이나 국내 전용 처리를 보장하지 않습니다.</p>

          <h2>선택적 의견 보내기: 어떤 정보를 왜 처리하나요?</h2>
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
          <p>‘보내기’를 누르면 전송 안내 확인창이 열립니다. 안내를 읽고 ‘동의하고 보내기’를 누른 경우에만 서버 접근 권한을 요청하고 전송을 시도합니다. 확인창에서 ‘돌아가기’를 누르거나 Escape 키로 닫으면 작성한 글을 유지하며 전송하지 않습니다. 설치, 안내 열기, 입력, 배너 닫기만으로 의견을 전송하지 않습니다. 최초 전송 시 Chrome이 수집 서버에 대한 선택적 접근 권한을 요청할 수 있습니다. 거부하거나 의견을 보내지 않아도 기존 자막·재생 기능을 계속 사용할 수 있습니다.</p>
          <p>전송 전 초안은 열린 패널 메모리에만 있으며, 취소하거나 패널을 닫으면 사라질 수 있습니다. 실패 시 패널 안에 글을 남겨 직접 재시도할 수 있게 합니다. 서버 저장이 확인된 경우에만 성공으로 표시합니다. 배너를 닫았는지는 기기의 확장 프로그램 저장소에 기록하며 의견 서버로 보내지 않습니다.</p>

          <h2>Cloudflare 처리와 국외 처리</h2>
          <p>수집 API와 데이터베이스는 미국 법인 Cloudflare, Inc.의 Workers 및 D1 서비스를 사용합니다. 의견 전송 시 HTTPS 통신으로 위 정보가 Cloudflare에 전달되어 처리·보관됩니다. 네트워크 요청은 Cloudflare의 글로벌 인프라에서 처리될 수 있으며, 국내 전용 처리·보관을 보장하지 않습니다.</p>
          <p>Cloudflare는 서비스 제공과 보안·남용 방지를 위해 IP 주소 등 연결 정보를 처리할 수 있습니다. Play Plus Worker는 연결 IP를 일시적인 요청 횟수 제한에 사용하지만 의견 데이터베이스에 IP나 브라우저 정보를 저장하지 않으며, 의견 본문을 애플리케이션 로그에 기록하지 않습니다. 플랫폼 자체의 연결 정보 처리는 Cloudflare의 정책에 따릅니다.</p>
          <p>수탁 서비스의 자세한 설명은 <a href='https://www.cloudflare.com/privacypolicy/'>Cloudflare 개인정보 처리방침</a>과 <a href='https://www.cloudflare.com/cloudflare-customer-dpa/'>데이터 처리 부속계약</a>에서 확인할 수 있습니다. Cloudflare의 개인정보 문의처는 <a href='mailto:privacyquestions@cloudflare.com'>privacyquestions@cloudflare.com</a>입니다. 전송을 원하지 않으면 ‘동의하고 보내기’를 누르지 않거나 선택적 서버 권한을 거부하면 됩니다.</p>

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
          <h2 id='english-title'>Play Plus privacy policy</h2>
          <p>This policy covers subtitle learning, playback controls, optional OpenSubtitles search and downloads, and feedback in the Play Plus extension. Play Plus does not require its own account or login; using Coupang Play remains subject to that service’s account requirements and terms. Feedback is collected only in versions where the feature is enabled. The operator and privacy contact is Kim Yujun (김유준), reachable at <a href='mailto:saramkimm@gmail.com'>saramkimm@gmail.com</a>. Last updated: October 27, 2026.</p>

          <h3>Information used by the core features</h3>
          <ul>
            <li><strong>Settings:</strong> subtitle language and appearance, shortcuts, skipping, looping and playback-speed settings are stored in Chrome sync storage (chrome.storage.sync). With Chrome sync enabled, Google’s sync service may transfer these settings to other signed-in Chrome browsers. With sync disabled, they stay on the device. They are not sent to the developer’s server. <a href='https://policies.google.com/privacy'>Google’s privacy policy</a> and your Chrome sync settings apply.</li>
            <li><strong>Imported subtitles:</strong> subtitle text from a file you select, its title, language, registration time and delay are stored in the extension’s device storage (chrome.storage.local) for display and editing. Importing does not upload the file to the developer.</li>
            <li><strong>Saved lines:</strong> when you save a line, its text, video URL, playback position and save time are kept on your device for review and reopening the scene. Copying writes the selected subtitle to the system clipboard. The extension does not read and collect clipboard contents.</li>
            <li><strong>Tabs, playback and native subtitles:</strong> active-tab information such as URL and title, video identity, playback state and Coupang Play subtitles are processed to connect the panel and detect the player. Open-tab URLs are compared when reopening a saved scene. Connection state, subtitles and pending actions are held temporarily in memory and Chrome session storage. General browsing history is not transmitted to the developer.</li>
            <li><strong>Interface state:</strong> theme, last panel screen, onboarding completion and banner dismissal are kept in the panel’s device storage (localStorage).</li>
          </ul>
          <p>To retrieve native subtitles, the extension uses the URL and headers of Coupang Play’s playback-information request to request data from that service, then fetches subtitles from the provided subtitle URLs. Pending request URLs and headers may be held briefly in session storage while a connection is established. These requests may include authentication information required by Coupang Play; it is not forwarded to the developer’s feedback server. Coupang Play’s own privacy policy governs its account and playback services.</p>

          <h3>Core-feature retention, deletion and permissions</h3>
          <p>Imported subtitles and saved lines remain on the device until you delete them from their lists. Removing the extension clears its device storage. Synced settings can be managed through Chrome’s sync and data controls. Temporary session storage is cleared when the extension reloads or the browser restarts. The operator cannot remotely read or delete subtitles or lines stored only on your device.</p>
          <p>Storage permissions retain settings and subtitles; unlimitedStorage supports subtitle storage capacity. Older versions request the tabs permission to inspect tab information for connecting the active tab and reopening saved scenes. Versions without that permission use Coupang Play site access to inspect tabs on that site. WebRequest and Coupang Play site access support playback-information and subtitle detection and in-page features. SidePanel provides the side panel. Feedback-server access is a separate optional permission.</p>
          <p>Play Plus follows the Chrome Web Store User Data Policy, including Limited Use requirements, and uses data only to provide or improve the described user-facing features. Data is not sold or used or transferred for personalized advertising. The operator reads feedback you explicitly agree to send or inquiries you send directly; device subtitles and saved lines are not automatically collected for human review.</p>

          <h3 id='online-subtitles-en'>Optional OpenSubtitles search and downloads</h3>
          <p>In versions that support online subtitle search, requests to the OpenSubtitles search API (api.opensubtitles.com) start only after you enable search in that view. Search terms include the current title, subtitle language, content type, season and episode, plus any query you edit or year you enter. A result-page request also includes its page number. When the title changes while the enabled view is open, it searches again automatically.</p>
          <p>Requests include the Play Plus app API identifier and extension version. OpenSubtitles may process connection data such as your IP address, and search terms such as the title and episode can reveal what you are interested in or watching. Coupang account details, Coupang cookies, video URLs, imported subtitle files and saved lines are not sent to OpenSubtitles. No separate OpenSubtitles login or account details are required, and API and download requests omit cookies.</p>
          <p>Selecting Download &amp; add sends the selected subtitle file ID and requested format to the OpenSubtitles download API, then retrieves the subtitle file from the returned www.opensubtitles.com download URL. Failed or cancelled requests may still count against the service allowance. The downloaded subtitle and registration information such as its title and language are stored in extension storage on your device (chrome.storage.local) and can be deleted in subtitle management. Search terms and downloaded files are not sent to the Play Plus developer&apos;s feedback server.</p>
          <p>The enabled preference is stored on your device; search terms and results are held in the open view&apos;s memory. Turning search off or leaving the view stops subsequent automatic searches and attempts to cancel pending requests. Turning it off or removing the extension does not delete information already delivered to OpenSubtitles. You can still add local subtitle files and use existing playback features without enabling online search.</p>
          <p>OpenSubtitles is an external service separate from the Play Plus operator. Its retention, deletion and request handling are governed by the <a href='https://opensubtitles.tawk.help/article/privacy-policy'>OpenSubtitles privacy policy</a> and its contact procedures. This notice does not promise a particular external API retention period or processing only in Korea.</p>

          <h3>Optional feedback: information and purpose</h3>
          <p>The developer reads voluntarily submitted feedback to understand issues and improve features and usability. The database stores only your message (1–1,000 characters after trimming), extension version, a random per-submission receipt ID for duplicate prevention, and a server-generated UTC receipt time.</p>
          <p>There are no name, email, phone or account fields. Viewing history, video URLs or titles, subtitles, uploaded files, Coupang account information and cookies are not automatically attached. Free text may still contain personal information; please do not include names, contact details or sensitive information about yourself or others. The receipt ID is not a persistent person identifier. The operator does not sell feedback or use it for advertising targeting. Individual replies to anonymous feedback are not guaranteed.</p>

          <h3>Your choice and transmission</h3>
          <p>Selecting Send opens a confirmation dialog. Server access is requested and a submission attempted only after you read the notice and select Agree and send. Go back or Escape closes the confirmation without sending and preserves your draft. Installing, opening, typing or dismissing the banner does not submit feedback. Chrome may request optional access to the feedback server on the first submission. Declining or choosing not to send does not prevent existing subtitle or playback features from working.</p>
          <p>Unsent text stays in the open panel&apos;s memory and may be lost when you cancel or close it. On failure, the panel keeps the text for a manual retry. Success is shown only after confirmed server storage. Banner dismissal is stored on your device and is not sent to the feedback server.</p>

          <h3>Cloudflare and international processing</h3>
          <p>The API and database use Workers and D1 provided by Cloudflare, Inc., a United States company. When you send, the information described above is transmitted over HTTPS to Cloudflare for processing and storage. Requests may be processed through Cloudflare&apos;s global infrastructure; Korea-only processing or storage is not guaranteed.</p>
          <p>Cloudflare may process connection metadata such as IP addresses to deliver and secure its services. The Play Plus Worker uses the connecting IP transiently for rate limiting, but does not store it or browser information in the feedback database and does not log message contents. Cloudflare&apos;s own metadata processing follows its policies.</p>
          <p>See <a href='https://www.cloudflare.com/privacypolicy/'>Cloudflare&apos;s privacy policy</a> and <a href='https://www.cloudflare.com/cloudflare-customer-dpa/'>data processing addendum</a>. Its privacy contact is <a href='mailto:privacyquestions@cloudflare.com'>privacyquestions@cloudflare.com</a>. To decline transmission, do not select Agree and send or deny the optional server permission.</p>

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
