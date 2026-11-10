import Link from 'next/link';
import { ArrowLeft, ArrowRight, Bookmark, Globe, LayoutGrid, MonitorPlay, Repeat2, SlidersHorizontal } from 'lucide-react';
import { pageMetadata, playPlusOgImage } from '@lib/metadata';
import { guidePaths } from '../../_guide/guide-status';
import { GuideSwitch, Note, SectionHeader, ShotFigure, ShotRow, Ui } from '../../_guide/guide-ui';
import { shots } from '../../_guide/shots';
import '../../_guide/guide.css';

const title = 'Play Plus 2.0 변경 안내';
const description =
  'Play Plus 1.14에서 2.0으로 업데이트하면 무엇이 달라지는지, 기능을 찾는 위치와 바뀐 동작, 새 기능과 기존 설정·자료를 정리했습니다.';

export const metadata = pageMetadata({
  title,
  description,
  path: guidePaths.updates,
  image: playPlusOgImage,
  imageAlt: 'Play Plus — 보던 쿠팡플레이가, 언어 공부가 됩니다.',
});

const guide = (hash: string) => `${guidePaths.guide}#${hash}`;

const highlights = [
  {
    icon: LayoutGrid,
    title: '패널을 다섯 탭으로',
    body: '자막·보관함·파일·설정·단축키로 나눴습니다. 별도의 영상 설정 화면은 없어졌습니다.',
    href: '#where',
    link: '찾는 위치 보기',
  },
  {
    icon: Repeat2,
    title: '고른 구간을 듣고, 반복하고, 저장',
    body: '자막 목록에서 여러 문장을 고른 뒤 듣기·반복·저장·복사를 고를 수 있습니다.',
    href: guide('repeat'),
    link: '구간 반복 사용법',
  },
  {
    icon: Bookmark,
    title: '새 보관함',
    body: '최근 저장순·영상별로 모아 보고, 문장과 작품 제목으로 검색하고, 저장한 구간을 다시 듣습니다.',
    href: guide('save'),
    link: '문장 저장 사용법',
  },
  {
    icon: Globe,
    title: '온라인 자막 검색',
    body: '보고 있는 작품 정보로 OpenSubtitles를 검색하고, 고른 자막을 받아서 바로 등록합니다.',
    href: guide('files'),
    link: '온라인 검색 사용법',
  },
  {
    icon: SlidersHorizontal,
    title: '자막·단축키 프리셋',
    body: '기본·학습 프리셋을 불러오거나 지금 설정을 내 프리셋으로 저장합니다. 자막과 단축키는 따로 관리합니다.',
    href: guide('watch'),
    link: '프리셋 사용법',
  },
  {
    icon: MonitorPlay,
    title: '이름이 보이는 영상 위 메뉴',
    body: '세로로 펼쳐지는 메뉴에 버튼 이름과 단축키가 함께 보입니다. 자주 쓰지 않는 조작은 더보기에 있습니다.',
    href: guide('watch'),
    link: '영상 위 메뉴 사용법',
  },
];

const locations = [
  ['자막 설정', '설정', '메인 자막·서브 자막은 주 자막·보조 자막으로 이름이 바뀌었습니다.'],
  ['영상 설정의 영상 이동·단축키', '단축키', '기능별 묶음 대신 필요한 동작을 항목으로 추가합니다.'],
  ['복습', '보관함', '저장한 문장을 검색하고 다시 듣습니다.'],
  ['자막 분석', '자막', '지금 보는 영상의 전체 자막과 구간 선택.'],
  ['자막 업로드', '파일', '자막 파일 추가와 온라인 검색.'],
  ['첫 실행 창·더보기의 학습 최적화', '설정·단축키의 프리셋 → 학습', '원할 때 직접 불러옵니다. 첫 실행 창은 나타나지 않습니다.'],
  ['더보기의 설정 초기화', '설정·단축키의 프리셋 → 기본', '자막 설정과 단축키를 각각 기본값으로 되돌립니다.'],
];

const defaults = [
  ['주 자막', '영어 · 켜짐', '한국어 · 켜짐'],
  ['보조 자막', '한국어 · 켜짐', '영어 · 꺼짐'],
  ['자막 크기', '기존 기본 크기', '주·보조 모두 더 크게'],
  ['그림자', '기존 기본값', '더 진하게'],
  ['보조 자막 줄바꿈', '한 줄', '여러 줄'],
  ['위치', '기존 기본 위치', '새 기본 위치'],
];

export default function PlayPlusUpdate20Page() {
  return (
    <>
      <section className='guide-hero site-container' aria-labelledby='update-title'>
        <Link href='/play-plus' className='back-link'>
          <ArrowLeft size={16} aria-hidden='true' /> Play Plus
        </Link>
        <div className='guide-hero-grid'>
          <div>
            <p className='eyebrow'>Play Plus 2.0 · Update notes</p>
            <h1 id='update-title' className='guide-title'>
              2.0에서
              <br />
              <span>달라진 점.</span>
            </h1>
            <p className='guide-lead'>
              기능을 더 쉽게 찾고, 고른 문장을 바로 반복하고 저장할 수 있도록 패널과 조작을 다시 정리했습니다. 직접
              저장해 둔 설정과 단축키, 추가한 자막 파일, 저장한 문장은 업데이트 후에도 이어서 쓸 수 있습니다.
            </p>
            <p className='guide-meta'>1.14에서 2.0으로 업데이트하는 분을 위한 안내입니다.</p>
          </div>
          <div>
            <GuideSwitch current='updates' />
            <p className='guide-meta'>
              처음 쓰신다면{' '}
              <Link className='underline underline-offset-4 hover:text-accent-text' href={guidePaths.guide}>
                기본 사용법
              </Link>
              부터 보세요.
            </p>
          </div>
        </div>
        <nav className='guide-toc' aria-label='변경 안내 목차'>
          {[
            ['where', '01', '찾는 위치', '탭과 메뉴가 어디로 옮겨졌는지'],
            ['changed', '02', '바뀐 동작', '저장 방식, 단축키, 이동 단위'],
            ['removed', '03', '없어진 기능', '더 이상 제공하지 않는 조작'],
            ['data', '04', '설정과 자료', '이어지는 것과 기본값 변화'],
          ].map(([id, index, name, body]) => (
            <a key={id} href={`#${id}`}>
              <span className='index-number'>{index}</span>
              <strong>{name}</strong>
              <p>{body}</p>
            </a>
          ))}
        </nav>
      </section>

      <div className='site-container'>
        <section className='guide-section' aria-labelledby='highlights'>
          <SectionHeader index='한눈에' id='highlights' title='2.0의 주요 변화' />
          <ul className='guide-highlights'>
            {highlights.map(({ icon: Icon, title: name, body, href, link }) => (
              <li key={name}>
                <Icon size={24} aria-hidden='true' />
                <h3>{name}</h3>
                <p>{body}</p>
                <a href={href}>
                  {link} <ArrowRight size={13} aria-hidden='true' />
                </a>
              </li>
            ))}
          </ul>
          <p className='mt-6 text-sm leading-7 text-muted'>
            이 밖에 ASS·SSA 자막 파일 추가, 파일 이름의 언어 표시로 언어 자동 선택, 자막 끝 자동 일시정지, 영상 위에서 자막
            위치를 맞추는 기능이 새로 생겼습니다.
          </p>
        </section>

        <section className='guide-section' aria-labelledby='where'>
          <SectionHeader
            index='01'
            id='where'
            title='찾는 위치가 바뀌었어요'
            lead='패널 위쪽의 탭 이름과 구성이 달라졌습니다. 예전에 쓰던 화면은 아래에서 찾을 수 있습니다.'
          />
          <ShotRow>
            <ShotFigure shot={shots.v1141Settings} badge='1.14.1' caption='1.14.1: 자막 설정·영상 설정·복습·자막 분석·자막 업로드.' />
            <ShotFigure shot={shots.settings} badge='2.0' caption='2.0: 자막·보관함·파일·설정·단축키. 같은 자막 설정이 설정 탭에 있습니다.' />
          </ShotRow>
          <div className='guide-table-wrap guide-table-stack'>
            <table className='guide-table'>
              <caption className='sr-only'>1.14.1과 2.0의 기능 위치</caption>
              <thead>
                <tr>
                  <th scope='col'>1.14.1</th>
                  <th scope='col'>2.0</th>
                  <th scope='col'>참고</th>
                </tr>
              </thead>
              <tbody>
                {locations.map(([before, after, note]) => (
                  <tr key={before}>
                    <th scope='row'>{before}</th>
                    <td className='is-new' data-label='2.0'>{after}</td>
                    <td data-label='참고'>{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className='guide-section' aria-labelledby='changed'>
          <SectionHeader index='02' id='changed' title='동작이 바뀐 것' />
          <div className='guide-block'>
            <div className='guide-text'>
              <h3>자막 설정은 바로 저장됩니다</h3>
              <p>
                예전에는 값을 바꾼 뒤 저장해야 했지만, 이제 <Ui>설정</Ui> 탭의 자막 설정은 바꾸는 즉시 저장되고 영상에
                반영됩니다. 슬라이더는 조절을 마칠 때 저장됩니다. 저장하지 못하면 패널에 안내가 표시되고 다시 시도할 수
                있습니다.
              </p>
              <p>
                단축키 항목, 파일의 제목·언어·싱크는 지금도 <Ui>저장</Ui>을 눌러야 반영됩니다.
              </p>
              <h3 className='pt-4'>단축키는 항목별로 관리합니다</h3>
              <p>
                영상 이동(1)·(2)와 단축키 묶음을 켜고 끄던 방식 대신, <Ui>단축키</Ui> 탭에서 동작과 대상, 키를 하나의
                항목으로 추가하고 편집합니다. 업데이트만으로 기본·학습 프리셋의 키가 적용되지는 않으며, 쓰던 키를 이어서
                씁니다.
              </p>
              <Note title='이동 단위가 바뀐 경우'>
                이동 시간은 초 단위로만 정합니다. 분으로 정해 두었던 이동은 같은 길이의 초로 바뀝니다(1분 → 60초). 자막
                단위 이동은 한 번에 자막 1개씩이며, 여러 자막씩 건너뛰도록 정해 두었다면 1개씩 이동으로 바뀝니다.
              </Note>
            </div>
            <ShotRow>
              <ShotFigure shot={shots.v1141VideoSettings} badge='1.14.1' caption='1.14.1의 영상 설정. 기능별 묶음을 스위치로 켰습니다.' />
              <ShotFigure shot={shots.shortcutsAdd} badge='2.0' caption='2.0의 단축키 추가. 동작과 키를 정하고 저장합니다.' />
            </ShotRow>
          </div>
          <div className='guide-block'>
            <div className='guide-text'>
              <h3>학습 최적화는 프리셋으로</h3>
              <p>
                처음 실행할 때 나타나던 선택 창이 없어졌습니다. 같은 성격의 설정은 <Ui>설정</Ui>과 <Ui>단축키</Ui> 탭의{' '}
                <Ui>프리셋</Ui> → <Ui>학습</Ui>으로 원할 때 불러옵니다.
              </p>
              <ul>
                <li>프리셋을 불러오면 자막 설정 또는 단축키 전체가 프리셋 내용으로 바뀝니다. 직후에는 되돌릴 수 있습니다.</li>
                <li>
                  지금 설정을 <Ui>현재 설정을 프리셋으로 저장</Ui>으로 남겨 두면 언제든 다시 불러올 수 있습니다. 프리셋을
                  불러온 뒤 설정을 바꿔도 저장된 프리셋 내용은 바뀌지 않습니다.
                </li>
              </ul>
              <h3 className='pt-4'>자막 위치</h3>
              <p>
                상단·중앙·하단 기준과 px 값 대신 <Ui>세로 위치</Ui> 슬라이더로 정하고, <Ui>화면에서 위치 조절</Ui>로 영상
                위에서 직접 맞출 수 있습니다. 예전에 정한 위치는 업데이트 후에도 그대로 적용됩니다.
              </p>
              <h3 className='pt-4'>보관함에서 다시 듣기</h3>
              <p>
                저장한 장면은 문장 옆의 <Ui>듣기</Ui>로 다시 재생합니다. 문장 글자를 눌러서는 재생되지 않습니다. 여러 문장을
                골라 한 번에 삭제할 수 있고, 같은 영상에서 이어진 문장은 조건이 맞으면 하나로 합칠 수 있습니다.
              </p>
            </div>
            <ShotRow>
              <ShotFigure shot={shots.v1141Welcome} badge='1.14.1' caption='1.14.1의 첫 실행 창. 2.0에서는 나타나지 않습니다.' />
              <ShotFigure shot={shots.settingsPresets} badge='2.0' caption='2.0에서는 프리셋 메뉴에서 기본·학습을 고릅니다.' />
            </ShotRow>
          </div>
        </section>

        <section className='guide-section' aria-labelledby='removed'>
          <SectionHeader index='03' id='removed' title='없어진 기능' />
          <div className='guide-block'>
            <div className='guide-text'>
              <h3>자막 간격 건너뛰기</h3>
              <p>
                영상 위 메뉴에 있던 자막 간격 건너뛰기 버튼과 기능을 제공하지 않습니다. 다음 문장으로 넘어가려면 영상 위
                메뉴의 <Ui>다음 자막</Ui>이나 이동 단축키를 쓰세요.
              </p>
              <h3 className='pt-4'>설정 초기화</h3>
              <p>
                1.14.1의 더보기 메뉴에 있던 <strong>설정 초기화</strong>(자막 설정과 단축키를 한꺼번에 되돌리기)가
                없어졌습니다. 대신 자막과 단축키를 따로 기본값으로 되돌립니다.
              </p>
              <ul>
                <li>
                  자막 설정: <Ui>설정</Ui> 탭 → <Ui>프리셋</Ui> → <Ui>기본</Ui>
                </li>
                <li>
                  단축키: <Ui>단축키</Ui> 탭 → <Ui>프리셋</Ui> → <Ui>기본</Ui>. 직접 추가하거나 고친 단축키가 기본 키로
                  바뀝니다.
                </li>
                <li>
                  불러온 직후에는 <Ui>되돌리기</Ui>로 원래 값을 복원할 수 있습니다. 추가한 자막 파일과 저장한 문장은
                  그대로입니다.
                </li>
              </ul>
              <h3 className='pt-4'>별도의 영상 설정 화면</h3>
              <p>
                재생 속도 같은 조작은 영상 위 메뉴와 단축키로 하고, 키 설정은 <Ui>단축키</Ui> 탭에서 합니다.
              </p>
            </div>
            <ShotRow>
              <ShotFigure
                shot={shots.v1141MoreMenu}
                badge='1.14.1'
                caption='1.14.1의 더보기 메뉴. 설정 초기화와 학습 최적화가 2.0에서는 프리셋으로 바뀌었습니다.'
              />
              <ShotFigure shot={shots.videoMenuMore} badge='2.0' size='compact' caption='2.0 영상 위 메뉴의 더보기. 자막 간격 건너뛰기는 없습니다.' />
            </ShotRow>
          </div>
        </section>

        <section className='guide-section' aria-labelledby='data'>
          <SectionHeader
            index='04'
            id='data'
            title='기존 설정과 자료'
            lead='업데이트해도 다시 설정할 필요가 없도록, 직접 저장한 값은 새 화면으로 옮겨 씁니다.'
          />
          <div className='guide-block'>
            <div className='guide-text'>
              <h3>이어서 쓰는 것</h3>
              <ul>
                <li>직접 저장한 주·보조 자막 설정</li>
                <li>지정해 둔 단축키 (이동 단위는 위의 안내처럼 바뀔 수 있습니다)</li>
                <li>추가한 자막 파일</li>
                <li>
                  저장한 문장. 다만 예전에 저장한 문장에는 끝 시각 등의 정보가 없어 구간 듣기나 합치기가 적용되지 않을 수
                  있습니다.
                </li>
              </ul>
              <Note>
                설정과 프리셋은 Chrome 동기화를 따르지만, 추가한 자막 파일과 저장한 문장은 지금 쓰는 브라우저에만
                저장됩니다.
              </Note>
            </div>
            <div className='guide-text'>
              <h3>자막 설정을 저장한 적이 없다면</h3>
              <p>
                주 자막과 보조 자막 설정을 한 번도 저장하지 않았다면(단축키만 바꾼 경우 포함), 2.0의 새 기본값으로
                시작합니다. 원하는 값으로 다시 바꾸거나 프리셋을 불러오세요.
              </p>
              <div className='guide-table-wrap guide-table-stack'>
                <table className='guide-table'>
                  <caption className='sr-only'>1.14.1과 2.0의 자막 기본값</caption>
                  <thead>
                    <tr>
                      <th scope='col'>항목</th>
                      <th scope='col'>1.14.1 기본값</th>
                      <th scope='col'>2.0 기본값</th>
                    </tr>
                  </thead>
                  <tbody>
                    {defaults.map(([name, before, after]) => (
                      <tr key={name}>
                        <th scope='row'>{name}</th>
                        <td data-label='1.14.1'>{before}</td>
                        <td className='is-new' data-label='2.0'>{after}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section className='guide-section' aria-labelledby='same'>
          <SectionHeader
            index='그대로'
            id='same'
            title='계속 쓸 수 있는 기능'
            lead='두 언어 자막, 25단계 자막 크기, 자막 목록 검색과 따라가기, 현재 문장 반복·한 번 재생, A/B 구간 반복, 집중 모드는 1.14에서처럼 쓸 수 있습니다. 위치와 이름만 일부 달라졌습니다.'
          />
        </section>
      </div>

      <section className='site-container guide-end' aria-labelledby='update-next'>
        <div>
          <h2 id='update-next'>새 화면으로 다시 익히기</h2>
          <p>시작하기, 자막과 시청 조절, 구간 반복, 문장 저장을 2.0 화면으로 안내합니다.</p>
          <Link href={guidePaths.guide} className='button-secondary mt-6'>
            기본 사용법 <ArrowRight size={16} aria-hidden='true' />
          </Link>
        </div>
        <div>
          <h2>문제가 있나요?</h2>
          <p>업데이트 후 설정이나 저장한 문장이 보이지 않는다면, 설치한 버전과 상황을 적어 알려 주세요.</p>
          <Link href='/play-plus#support' className='text-link mt-4'>
            문의 안내 <ArrowRight size={16} aria-hidden='true' />
          </Link>
        </div>
      </section>
    </>
  );
}
