import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { contactEmail, playPlusStoreUrl } from '@lib/products';
import { guidePaths, guideRobots } from '../_guide/guide-status';
import {
  GuideSwitch,
  Kbd,
  Note,
  PreviewNotice,
  SectionHeader,
  ShotFigure,
  ShotRow,
  Steps,
  Ui,
} from '../_guide/guide-ui';
import { shots } from '../_guide/shots';
import '../_guide/guide.css';

const title = 'Play Plus 기본 사용법';
const description =
  '쿠팡플레이에서 Play Plus 패널을 열고, 자막을 조절하고, 구간을 반복하고, 문장을 저장하는 방법을 실제 화면으로 안내합니다.';

export const metadata: Metadata = {
  title,
  description,
  robots: guideRobots,
  alternates: { canonical: guidePaths.guide },
  openGraph: { title, description, url: guidePaths.guide },
  twitter: { title, description },
};

const toc = [
  { id: 'start', index: '01', title: '시작하기', body: '영상을 열고 Play Plus 패널을 엽니다.' },
  { id: 'watch', index: '02', title: '자막과 시청 조절', body: '주·보조 자막과 영상 위 조작 메뉴.' },
  { id: 'repeat', index: '03', title: '구간 반복', body: '원하는 문장을 골라 반복해서 듣습니다.' },
  { id: 'save', index: '04', title: '문장 저장', body: '저장한 문장을 보관함에서 다시 듣습니다.' },
];

const tabs = [
  ['자막', '지금 보는 영상의 자막 목록. 검색하고, 장면으로 이동하고, 구간을 고릅니다.'],
  ['보관함', '저장한 문장. 검색하고 다시 듣습니다.'],
  ['파일', '내 자막 파일 추가와 온라인 자막 검색.'],
  ['설정', '주 자막·보조 자막의 표시 방식과 자막 프리셋.'],
  ['단축키', '내 단축키와 단축키 프리셋.'],
];

const studyShortcuts: [string, string][] = [
  ['Q / W', '주 자막 / 보조 자막 켜기·끄기'],
  [', / . / /', '속도 감소 / 증가 / 초기화'],
  ['A / D', '자막 1개 뒤로 / 앞으로 이동 (자막이 없으면 3초)'],
  ['S', '현재 자막 반복'],
  ['C', '현재 자막 한 번 재생'],
  ['E / R', '주 자막 / 보조 자막 저장'],
  ['Z / X', '주 자막 / 보조 자막 복사'],
  ['L', '구간 반복 재생'],
  ['[ / ]', 'A 시작점 / B 끝점 지정'],
  ['T', '자막 끝 자동 일시정지'],
];

export default function PlayPlusGuidePage() {
  return (
    <>
      <section className='guide-hero site-container' aria-labelledby='guide-title'>
        <Link href='/play-plus' className='back-link'>
          <ArrowLeft size={16} aria-hidden='true' /> Play Plus
        </Link>
        <PreviewNotice />
        <div className='guide-hero-grid'>
          <div>
            <p className='eyebrow'>Play Plus 2.0 · Guide</p>
            <h1 id='guide-title' className='guide-title'>
              보던 영상에서
              <br />
              <span>바로 시작하세요.</span>
            </h1>
            <p className='guide-lead'>
              쿠팡플레이 영상을 열고 Play Plus 패널만 켜면 됩니다. 처음부터 끝까지 따라 할 필요 없이 필요한 부분만 골라
              읽으세요.
            </p>
            <p className='guide-meta'>데스크톱 Chrome · 쿠팡플레이 전용</p>
          </div>
          <div>
            <GuideSwitch current='guide' />
            <p className='guide-meta'>
              이전 버전을 쓰셨다면{' '}
              <Link className='underline underline-offset-4 hover:text-accent-text' href={guidePaths.updates}>
                2.0 변경 안내
              </Link>
              에서 달라진 점부터 확인하세요.
            </p>
          </div>
        </div>
        <nav className='guide-toc' aria-label='기본 사용법 목차'>
          {toc.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              <span className='index-number'>{item.index}</span>
              <strong>{item.title}</strong>
              <p>{item.body}</p>
            </a>
          ))}
        </nav>
        <p className='guide-toc-more'>
          <span>더 알아보기</span>
          <a className='text-link min-h-0' href='#files'>
            자막 파일과 온라인 검색
          </a>
          <a className='text-link min-h-0' href='#shortcuts'>
            단축키
          </a>
        </p>
      </section>

      <div className='site-container'>
        <section className='guide-section' aria-labelledby='start'>
          <SectionHeader
            index='01'
            id='start'
            title='시작하기'
            lead='Play Plus는 Chrome 옆에 열리는 패널과, 쿠팡플레이 영상 위에 나타나는 조작 메뉴로 이루어져 있습니다.'
          />
          <div className='guide-block'>
            <div className='guide-text'>
              <Steps
                items={[
                  <>
                    <a className='underline underline-offset-4 hover:text-accent-text' href={playPlusStoreUrl}>
                      Chrome 웹 스토어
                    </a>
                    에서 Play Plus를 추가합니다.
                  </>,
                  <>쿠팡플레이에서 보고 싶은 영상을 재생합니다.</>,
                  <>
                    브라우저 오른쪽 위의 Play Plus 아이콘을 누르면 패널이 열립니다. 아이콘이 보이지 않으면 퍼즐 모양의{' '}
                    <strong>확장 프로그램</strong> 버튼에서 Play Plus를 고정하세요.
                  </>,
                  <>
                    패널 아래쪽의 상태 표시로 연결을 확인합니다. 광고가 나오는 동안에는 <Ui>광고 중</Ui>으로 표시되고,
                    광고가 끝나면 자막이 나타납니다.
                  </>,
                ]}
              />
              <Note title='쿠팡플레이 자막과 겹친다면'>
                쿠팡플레이의 기본 자막을 꺼 주세요. Play Plus 자막만 영상 위에 표시됩니다.
              </Note>
              <div>
                <h3 className='text-lg font-bold tracking-tight'>패널의 다섯 탭</h3>
                <dl className='mt-3 grid gap-2 text-[0.9375rem] leading-7 text-body'>
                  {tabs.map(([name, body]) => (
                    <div key={name} className='flex gap-3'>
                      <dt className='w-14 flex-none font-semibold text-ink'>{name}</dt>
                      <dd>{body}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <ShotRow>
              <ShotFigure
                shot={shots.playPanelOpen}
                size='large'
                caption='툴바의 Play Plus 아이콘을 누르면 오른쪽에 패널이 열립니다. 하단에 연결됨·감지됨이 보이면 준비된 상태입니다. 영상 화면은 보호되어 캡처에 검게 나옵니다.'
              />
              <ShotFigure
                shot={shots.subtitlesEmpty}
                caption='쿠팡플레이가 아닌 탭에서 패널을 열면 이렇게 보입니다. 쿠팡플레이 열기로 바로 이동할 수 있습니다.'
              />
            </ShotRow>
          </div>
        </section>

        <section className='guide-section' aria-labelledby='watch'>
          <SectionHeader
            index='02'
            id='watch'
            title='자막과 시청 조절'
            lead='자막 모양은 설정 탭에서, 재생 조작은 영상 위 메뉴에서 합니다.'
          />
          <div className='guide-block'>
            <div className='guide-text'>
              <h3>주 자막과 보조 자막</h3>
              <p>
                두 언어를 함께 보려면 <Ui>설정</Ui> 탭에서 <Ui>주 자막</Ui>과 <Ui>보조 자막</Ui>을 각각 켜고 언어를
                고르세요. 크기, 색상, 글씨 굵기, 그림자, 배경, 줄바꿈도 자막마다 따로 정할 수 있습니다.
              </p>
              <ul>
                <li>
                  설정은 따로 저장 버튼 없이 자동으로 저장됩니다. 대부분은 바꾸는 즉시 저장되고, 슬라이더는 조절을 마치고
                  손을 뗄 때 저장됩니다. 저장하지 못하면 패널에 안내가 표시되고 다시 시도할 수 있습니다.
                </li>
                <li>
                  <Ui>세로 위치</Ui>로 자막 높이를 옮기거나, <Ui>화면에서 위치 조절</Ui>을 눌러 영상 위에서 직접 맞출 수
                  있습니다. 이 기능은 영상이 연결된 뒤에 사용할 수 있습니다.
                </li>
              </ul>
              <h3 className='pt-4'>프리셋으로 한 번에 바꾸기</h3>
              <p>
                <Ui>프리셋</Ui>을 누르면 기본 제공 <Ui>기본</Ui>·<Ui>학습</Ui>과 내가 저장한 프리셋을 불러올 수 있습니다.
                불러오면 현재 자막 설정 전체가 프리셋 내용으로 바뀌며, 잠시 표시되는 <Ui>되돌리기</Ui>로 원래대로 돌릴 수
                있습니다. 지금 설정을 남겨 두려면 <Ui>현재 설정을 프리셋으로 저장</Ui>을 고르세요.
              </p>
            </div>
            <ShotRow>
              <ShotFigure
                shot={shots.settings}
                caption='영상이 연결된 설정 탭. 자막을 받고 있으면 이름 옆에 수신됨이 표시됩니다.'
              />
              <ShotFigure shot={shots.settingsPresets} caption='프리셋 메뉴. 자막 프리셋과 단축키 프리셋은 따로 관리됩니다.' />
            </ShotRow>
          </div>
          <div className='guide-block'>
            <div className='guide-text'>
              <h3>영상 위 조작 메뉴</h3>
              <p>
                영상 위로 마우스를 움직이면 오른쪽에 조작 메뉴가 나타납니다. <Ui>영상 도구 펼치기</Ui>를 누르면 버튼이
                세로로 펼쳐지고, 버튼마다 이름과 지정된 단축키가 함께 표시됩니다.
              </p>
              <ul>
                <li>
                  기본: <Ui>Play Plus 패널 열기</Ui>(패널이 열려 있으면 <Ui>Play Plus 패널 닫기</Ui>), <Ui>이전 자막</Ui>·
                  <Ui>다음 자막</Ui>, <Ui>현재 자막 반복</Ui>,{' '}
                  <Ui>속도 증가</Ui>·<Ui>속도 감소</Ui>
                </li>
                <li>
                  <Ui>더보기</Ui>: <Ui>구간 반복 재생</Ui>, <Ui>현재 자막 한 번 재생</Ui>, <Ui>A 시작점 지정</Ui>·
                  <Ui>B 끝점 지정</Ui>, 주 자막·보조 자막 켜기·끄기, <Ui>자막 끝 자동 일시정지</Ui>, <Ui>집중 모드</Ui>
                </li>
                <li>
                  <Ui>자막 끝 자동 일시정지</Ui>를 켜면 주 자막 한 문장이 끝날 때마다 영상이 멈춥니다. 처음에는 꺼져
                  있으며, 구간 반복이나 한 번 듣기를 하는 동안에는 잠시 적용되지 않습니다.
                </li>
              </ul>
            </div>
            <ShotRow>
              <ShotFigure
                shot={shots.videoMenuBasic}
                size='compact'
                caption='기본 메뉴. 패널이 열려 있어 첫 버튼이 패널 닫기로 보입니다. 단축키가 지정된 버튼에는 키가 함께 표시됩니다.'
              />
              <ShotFigure shot={shots.videoMenuMore} size='compact' caption='더보기를 누른 화면. 기본 조작으로를 누르면 돌아갑니다.' />
              <ShotFigure
                shot={shots.videoDualSubtitles}
                size='wide'
                caption='영어 주 자막과 한국어 보조 자막을 함께 켠 모습. 영상 화면은 보호되어 캡처에 검게 나옵니다.'
              />
            </ShotRow>
          </div>
        </section>

        <section className='guide-section' aria-labelledby='repeat'>
          <SectionHeader
            index='03'
            id='repeat'
            title='구간 반복'
            lead='자막 목록에서 문장을 고르고, 아래에 나타나는 메뉴에서 반복을 누릅니다. 고르기만 해서는 반복이 시작되지 않습니다.'
          />
          <div className='guide-block'>
            <div className='guide-text'>
              <Steps
                items={[
                  <>
                    <Ui>자막</Ui> 탭을 엽니다. 검색어가 있다면 지워 주세요. 검색 중에는 구간을 고를 수 없습니다.
                  </>,
                  <>
                    검색창 아래의 <Ui>구간 선택</Ui>을 켜고, 첫 문장과 마지막 문장을 차례로 누릅니다. 구간 선택을 켜지 않았을
                    때는 문장을 길게 누른 채 끝 문장까지 끌어 내리거나, 문장에 초점을 둔 뒤 <Kbd>Shift</Kbd>+<Kbd>↑</Kbd>/
                    <Kbd>↓</Kbd>로 넓힐 수 있습니다. 그냥 짧게 누르면 그 장면으로 이동만 합니다.
                  </>,
                  <>아래쪽에 고른 문장 수와 시작·끝 시각이 표시되는지 확인합니다.</>,
                  <>
                    <Ui>반복</Ui>을 누릅니다. 반복이 시작되면 버튼이 <Ui>중지</Ui>로 바뀝니다.
                  </>,
                  <>
                    그만 들으려면 <Ui>중지</Ui>를 누릅니다.
                  </>,
                ]}
              />
              <Note title='선택 해제는 반복 중지가 아닙니다'>
                X 버튼이나 <Kbd>Esc</Kbd>로 선택을 지워도 반복은 계속될 수 있습니다. 이때는 패널 아래쪽에{' '}
                <Ui>반복 중</Ui>과 구간 시각, <Ui>반복 중지</Ui> 버튼이 남아 있으니 이 버튼으로 끝내세요. 영상 위 메뉴의{' '}
                <Ui>반복 중지</Ui>를 눌러도 됩니다.
              </Note>
              <p>
                같은 메뉴의 <Ui>듣기</Ui>는 고른 구간을 한 번만 재생하고 멈춥니다. <Ui>저장</Ui>은 고른 문장을 하나로
                저장하고, <Ui>복사</Ui>는 자막 글자를 복사합니다.
              </p>
              <p>
                지금 나오는 한 문장만 반복하려면 영상 위 메뉴의 <Ui>현재 자막 반복</Ui>을, 원하는 두 지점 사이를 반복하려면{' '}
                <Ui>A 시작점 지정</Ui>·<Ui>B 끝점 지정</Ui> 뒤 <Ui>구간 반복 재생</Ui>을 쓰세요.
              </p>
            </div>
            <ShotRow>
              <ShotFigure
                shot={shots.rangeSelected}
                caption='세 문장을 고른 상태. 아래에 선택한 수와 시각, 듣기·반복·저장·복사가 나타납니다.'
              />
              <ShotFigure
                shot={shots.rangeRepeating}
                caption='반복을 누른 뒤. 문장마다 반복 중이 표시되고 버튼이 중지로 바뀝니다.'
              />
            </ShotRow>
          </div>
        </section>

        <section className='guide-section' aria-labelledby='save'>
          <SectionHeader
            index='04'
            id='save'
            title='문장 저장'
            lead='다시 보고 싶은 문장을 저장하면 보관함에 모입니다. 저장은 반복과 따로 동작합니다.'
          />
          <div className='guide-block'>
            <div className='guide-text'>
              <h3>저장하는 방법</h3>
              <ul>
                <li>자막 목록에서 문장 옆의 북마크 버튼을 누릅니다.</li>
                <li>영상 위에 표시된 자막을 클릭합니다.</li>
                <li>
                  여러 문장은 구간을 고른 뒤 아래쪽의 <Ui>저장</Ui>을 누르면 하나로 저장됩니다.
                </li>
                <li>저장 단축키를 지정해 두면 키 하나로 저장할 수 있습니다.</li>
              </ul>
              <h3 className='pt-4'>보관함에서 다시 듣기</h3>
              <p>
                <Ui>보관함</Ui>에서 최근 저장순이나 영상별로 모아 보고, 문장이나 작품 제목으로 검색할 수 있습니다. 저장한
                장면을 다시 들으려면 문장 옆의 <Ui>듣기</Ui>를 누르세요. 문장 글자를 눌러서는 재생되지 않습니다.
              </p>
              <Note>
                설정과 프리셋은 Chrome 동기화를 따르지만, 저장한 문장과 추가한 자막 파일은 지금 쓰는 브라우저에만
                저장됩니다.
              </Note>
            </div>
            <ShotRow>
              <ShotFigure shot={shots.libraryEmpty} caption='아직 저장한 문장이 없을 때의 보관함. 저장하는 방법을 바로 안내합니다.' />
              <ShotFigure
                shot={shots.librarySaved}
                caption='저장한 문장. 듣기로 그 장면을 다시 재생하고, 선택으로 여러 문장을 골라 정리합니다.'
              />
            </ShotRow>
          </div>
        </section>

        <section className='guide-section' aria-labelledby='files'>
          <SectionHeader
            index='더 알아보기'
            id='files'
            title='자막 파일과 온라인 검색'
            lead='쿠팡플레이에 원하는 언어의 자막이 없다면, 가지고 있는 파일을 추가하거나 OpenSubtitles에서 찾아 등록하세요.'
          />
          <div className='guide-block'>
            <div className='guide-text'>
              <h3>내 자막 파일 추가</h3>
              <Steps
                items={[
                  <>
                    <Ui>파일</Ui> 탭에서 <Ui>파일 추가</Ui>를 누릅니다. VTT, SRT, SMI, ASS, SSA 파일을 5 MiB까지 쓸 수
                    있고, 패널에 끌어다 놓아도 됩니다.
                  </>,
                  <>
                    언어와 제목을 확인하고 <Ui>추가</Ui>를 누릅니다. 파일을 끌어다 놓기만 해서는 추가되지 않습니다.
                  </>,
                  <>
                    파일 카드에서 <Ui>주 자막</Ui> 또는 <Ui>보조 자막</Ui>을 눌러 영상에 씁니다. 이 버튼은 영상이 연결된
                    뒤에 누를 수 있습니다.
                  </>,
                ]}
              />
              <p>
                <Ui>자막 보기</Ui>는 파일 내용을 자막 탭에서 읽는 기능이고, 영상에 표시되는 자막은 바뀌지 않습니다. 자막이
                영상보다 빠르거나 늦으면 <Ui>싱크 조정</Ui>으로 맞추세요. ASS·SSA 파일은 글자만 가져오며 원본의 스타일과
                효과는 표시하지 않습니다.
              </p>
            </div>
            <ShotRow>
              <ShotFigure shot={shots.filesEmpty} caption='파일 탭. 파일 추가와 온라인 검색이 여기에 있습니다.' />
              <ShotFigure shot={shots.filesDraft} caption='파일을 고르면 언어와 제목을 확인한 뒤 추가합니다. 화면은 예시 파일입니다.' />
              <ShotFigure
                shot={shots.filesList}
                caption='추가한 파일 목록. 영상이 연결되면 주 자막·보조 자막으로 지정할 수 있습니다.'
              />
            </ShotRow>
          </div>
          <div className='guide-block'>
            <div className='guide-text'>
              <h3>OpenSubtitles에서 찾기</h3>
              <Steps
                items={[
                  <>
                    <Ui>파일</Ui> 탭에서 <Ui>온라인 검색</Ui>을 누르고, 전송되는 정보를 확인한 뒤 <Ui>동의하고 검색 켜기</Ui>
                    를 누릅니다.
                  </>,
                  <>
                    쿠팡플레이에서 작품 정보를 가져올 수 있으면 제목, 시즌·회차 등이 자동으로 채워지고 검색됩니다. 값이
                    다르면 고쳐서 다시 검색하세요. 작품 정보를 가져오지 못해 칸이 비어 있으면 <Ui>작품 제목</Ui>을 직접
                    입력하고 <Ui>검색</Ui>을 누릅니다.
                  </>,
                  <>
                    원하는 결과의 <Ui>받아서 등록</Ui>을 누르면 파일 목록에 추가됩니다. 영상에 쓰려면 파일 카드에서 주
                    자막이나 보조 자막으로 지정하세요.
                  </>,
                ]}
              />
              <p>
                로그인 없이 받을 수 있으며, 하루에 받을 수 있는 횟수가 정해져 있습니다. 받기에 실패하거나 취소해도 횟수가
                차감될 수 있습니다. 전송하는 정보는{' '}
                <Link className='underline underline-offset-4 hover:text-accent-text' href='/play-plus/privacy#online-subtitles'>
                  개인정보처리방침
                </Link>
                에서 확인할 수 있습니다.
              </p>
            </div>
            <ShotRow>
              <ShotFigure shot={shots.onlineConsent} caption='온라인 검색을 켜기 전에는 OpenSubtitles로 아무것도 보내지 않습니다.' />
              <ShotFigure
                shot={shots.onlineResults}
                caption='보고 있는 영화의 제목과 언어·유형이 자동으로 채워진 결과. 조건은 필터 편집에서 바꿉니다.'
              />
            </ShotRow>
          </div>
        </section>

        <section className='guide-section' aria-labelledby='shortcuts'>
          <SectionHeader
            index='더 알아보기'
            id='shortcuts'
            title='단축키'
            lead='자주 쓰는 동작을 키 하나로 실행하세요. 단축키는 단축키 탭에서 항목별로 추가하고 고칩니다.'
          />
          <div className='guide-block'>
            <div className='guide-text'>
              <p>
                처음 설치하면 <Ui>기본</Ui> 프리셋의 다섯 가지 키가 준비되어 있습니다. 이동·반복·저장까지 키로 하고 싶다면{' '}
                <Ui>프리셋</Ui>에서 <Ui>학습</Ui>을 불러오세요. 이전 버전에서 업데이트했다면 원래 쓰던 키를 이어서 쓰며,
                일부 이동 단위가 바뀐 내용은{' '}
                <Link className='underline underline-offset-4 hover:text-accent-text' href={`${guidePaths.updates}#changed`}>
                  변경 안내
                </Link>
                에 있습니다.
              </p>
              <p>
                <Ui>단축키 추가</Ui>나 연필 버튼으로 항목을 편집한 뒤에는 <Ui>저장</Ui>을 눌러야 반영됩니다. 저장하기 전에는
                기존 단축키가 그대로 동작합니다.
              </p>
              <div className='guide-table-wrap'>
                <table className='guide-table'>
                  <caption className='sr-only'>학습 프리셋의 단축키</caption>
                  <thead>
                    <tr>
                      <th scope='col'>학습 프리셋 키</th>
                      <th scope='col'>동작</th>
                    </tr>
                  </thead>
                  <tbody>
                    {studyShortcuts.map(([keys, action]) => (
                      <tr key={keys}>
                        <th scope='row'>{keys}</th>
                        <td>{action}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <ShotRow>
              <ShotFigure shot={shots.shortcutsBasic} caption='새로 설치했을 때의 기본 단축키.' />
              <ShotFigure shot={shots.shortcutsStudy} caption='학습 프리셋을 불러온 직후. 되돌리기로 원래 키를 복원할 수 있습니다.' />
              <ShotFigure shot={shots.shortcutsAdd} caption='단축키 추가. 동작과 키를 정한 뒤 저장합니다.' />
            </ShotRow>
          </div>
        </section>
      </div>

      <section className='site-container guide-end' aria-labelledby='guide-next'>
        <div>
          <h2 id='guide-next'>이전 버전을 쓰셨나요?</h2>
          <p>탭 구성과 저장 방식, 단축키 관리가 달라졌습니다. 바뀐 점과 새로 생긴 기능을 한 페이지에 모았습니다.</p>
          <Link href={guidePaths.updates} className='button-secondary mt-6'>
            2.0 변경 안내 <ArrowRight size={16} aria-hidden='true' />
          </Link>
        </div>
        <div>
          <h2>도움이 더 필요하면</h2>
          <p>
            문제가 생겼다면 설치한 버전과 상황을 적어 이메일로 알려 주세요. 계정 정보나 비밀번호는 보내지 마세요.
          </p>
          <a className='text-link mt-4' href={`mailto:${contactEmail}`}>
            {contactEmail} <ArrowUpRight size={16} aria-hidden='true' />
          </a>
        </div>
      </section>
    </>
  );
}
