import type { StaticImageData } from 'next/image';
import panelLibrarySaved from './shots/panel-library-saved.webp';
import panelOnlineResults from './shots/panel-online-results.webp';
import panelRangeRepeating from './shots/panel-range-repeating.webp';
import panelRangeSelected from './shots/panel-range-selected.webp';
import playPanelOpen from './shots/play-panel-open.webp';
import v1141MoreMenu from './shots/v1141-more-menu.webp';
import videoDualSubtitles from './shots/video-dual-subtitles.webp';
import videoMenuBasic from './shots/video-menu-basic.webp';
import videoMenuMore from './shots/video-menu-more.webp';
import panelFilesDraft from './shots/panel-files-draft.webp';
import panelFilesEmpty from './shots/panel-files-empty.webp';
import panelFilesList from './shots/panel-files-list.webp';
import panelLibraryEmpty from './shots/panel-library-empty.webp';
import panelOnlineConsent from './shots/panel-online-consent.webp';
import panelSettings from './shots/panel-settings.webp';
import panelSettingsPresets from './shots/panel-settings-presets.webp';
import panelShortcutsAdd from './shots/panel-shortcuts-add.webp';
import panelShortcutsBasic from './shots/panel-shortcuts-basic.webp';
import panelShortcutsStudy from './shots/panel-shortcuts-study.webp';
import panelSubtitlesEmpty from './shots/panel-subtitles-empty.webp';
import v1141Settings from './shots/v1141-settings.webp';
import v1141VideoSettings from './shots/v1141-video-settings.webp';
import v1141Welcome from './shots/v1141-welcome.webp';

export type Shot = { src: StaticImageData; alt: string };

// Real captures. Only cropped to the relevant area and converted to WebP; never resized, retouched or composited.
// Panel-only 2.0 screens: play-plus main d7caa34 production build, Korean UI, no video connected.
// Playback screens (playPanelOpen … panelOnlineResults, settings, filesList): Korean Chrome on Coupang Play,
// 2026-11-06, play-plus c44a18e (= d7caa34 + negative-time display fix). 1.14.1: tag v1.14.1 build.
export const shots = {
  playPanelOpen: {
    src: playPanelOpen,
    alt: '쿠팡플레이 재생 화면 오른쪽에 Play Plus 패널이 열린 모습. 툴바에 Play Plus 아이콘이 있고, 패널 자막 탭에 영어 자막 목록과 현재 재생 표시, 하단에 연결됨·감지됨 상태가 보입니다. 영상 영역은 보호되어 검게 캡처되었습니다.',
  },
  videoDualSubtitles: {
    src: videoDualSubtitles,
    alt: '검게 캡처된 영상 위에 영어 주 자막 Would you like something to drink?와 그 아래 한국어 보조 자막 마실 것 좀 줄까?가 함께 표시된 모습.',
  },
  videoMenuBasic: {
    src: videoMenuBasic,
    alt: '영상 위 조작 메뉴의 기본 화면. Play Plus 패널 닫기, 더보기, 이전 자막, 다음 자막, 현재 자막 반복, 속도 증가, 속도 감소가 세로로 나열되고 속도 버튼 아래에 단축키가 표시됩니다.',
  },
  videoMenuMore: {
    src: videoMenuMore,
    alt: '영상 위 조작 메뉴의 더보기 화면. 기본 조작으로, 구간 반복 재생, 현재 자막 한 번 재생, A 시작점 지정, B 끝점 지정, 주 자막 끄기(Q), 보조 자막 켜기(W), 자막 끝 자동 일시정지, 집중 모드가 있습니다.',
  },
  rangeSelected: {
    src: panelRangeSelected,
    alt: '자막 탭에서 세 문장을 구간으로 선택한 모습. 선택한 문장이 하나의 테두리로 묶이고, 아래에 자막 3개 선택 17:43–17:50과 듣기, 반복, 저장, 복사 버튼이 있습니다.',
  },
  rangeRepeating: {
    src: panelRangeRepeating,
    alt: '같은 구간을 반복하는 중. 선택한 문장마다 반복 중 표시가 붙고, 아래에 반복 중 17:43–17:50과 중지 버튼이 보입니다.',
  },
  librarySaved: {
    src: panelLibrarySaved,
    alt: '저장한 문장 세 개가 최근 저장순으로 나열된 보관함. 검색창, 선택 버튼, 최근 저장순·영상별 전환과 문장마다 듣기, 복사, 삭제 버튼이 있습니다.',
  },
  onlineResults: {
    src: panelOnlineResults,
    alt: '온라인 자막 찾기 결과. 작품 제목 Now You See Me 2와 영어·영화 조건이 자동으로 채워져 결과 50개가 나오고, 결과마다 받아서 등록 버튼이 있습니다.',
  },
  v1141MoreMenu: {
    src: v1141MoreMenu,
    alt: 'Play Plus 1.14.1 패널 오른쪽 아래 더보기 메뉴. 설정 초기화, 학습 최적화, 한마디 남기기 항목이 있습니다.',
  },
  subtitlesEmpty: {
    src: panelSubtitlesEmpty,
    alt: 'Play Plus 2.0 패널의 자막 탭. 쿠팡플레이에서 영상을 열면 자막이 보인다는 안내와 쿠팡플레이 열기, 자막 파일 추가 버튼이 있고 하단에 쿠팡플레이 아님 상태가 표시됩니다.',
  },
  settings: {
    src: panelSettings,
    alt: '영상이 연결된 설정 탭. 주 자막 카드에 수신됨 표시, 사용 스위치, 언어, 세로 위치 88%, 화면에서 위치 조절, 자막 크기, 자막 색상, 글씨 굵기, 그림자 강도, 배경 불투명도, 줄바꿈이 있고 아래에 보조 자막 카드가 이어집니다.',
  },
  settingsPresets: {
    src: panelSettingsPresets,
    alt: '설정 탭에서 프리셋 메뉴를 연 화면. 기본 제공 아래 기본, 학습과 현재 설정을 프리셋으로 저장 항목이 있습니다.',
  },
  shortcutsBasic: {
    src: panelShortcutsBasic,
    alt: '단축키 탭의 기본 프리셋. Q 주 자막 켜기·끄기, W 보조 자막 켜기·끄기, 쉼표 속도 감소, 마침표 속도 증가, 슬래시 속도 초기화 항목과 단축키 추가 버튼이 있습니다.',
  },
  shortcutsStudy: {
    src: panelShortcutsStudy,
    alt: '단축키 탭에서 학습 프리셋을 불러온 화면. 프리셋 적용됨 안내와 되돌리기 버튼 아래 A, D 이동, S 현재 자막 반복, C 현재 자막 한 번 재생, E 저장 등이 이어집니다.',
  },
  shortcutsAdd: {
    src: panelShortcutsAdd,
    alt: '단축키 추가 양식. 동작, 방향, 이동 방식, 이동 시간, 키 입력란과 취소, 저장 버튼이 있습니다.',
  },
  filesEmpty: {
    src: panelFilesEmpty,
    alt: '파일 탭의 빈 화면. 파일 추가와 온라인 검색 버튼, 패널에 파일을 끌어다 놓아도 된다는 안내가 있습니다.',
  },
  filesDraft: {
    src: panelFilesDraft,
    alt: '자막 파일을 고른 뒤의 추가 양식. 파일 이름, 파일 변경, 언어 선택, 자막 제목과 취소, 추가 버튼이 있습니다.',
  },
  filesList: {
    src: panelFilesList,
    alt: '영상이 연결된 파일 탭. 파일 이름 검색과 정렬 전환 아래, 추가한 자막 파일 두 개에 언어, 제목, 추가 날짜와 주 자막·보조 자막 지정 버튼, 자막 보기, 싱크 조정 버튼이 있습니다.',
  },
  onlineConsent: {
    src: panelOnlineConsent,
    alt: '온라인 자막 찾기 화면. OpenSubtitles로 전송되는 검색 조건 안내와 동의하고 검색 켜기 버튼이 있습니다.',
  },
  libraryEmpty: {
    src: panelLibraryEmpty,
    alt: '보관함 탭의 빈 화면. 자막 목록의 북마크 버튼이나 영상 위 자막을 클릭하면 저장된다는 안내와 쿠팡플레이 열기, 저장 단축키 설정하기 버튼이 있습니다.',
  },
  v1141Settings: {
    src: v1141Settings,
    alt: 'Play Plus 1.14.1 패널. 상단에 자막 설정, 영상 설정, 복습, 자막 분석, 자막 업로드 탭이 있고 메인 자막의 위치 기준과 위치 조정(px) 항목이 보입니다.',
  },
  v1141VideoSettings: {
    src: v1141VideoSettings,
    alt: 'Play Plus 1.14.1의 영상 설정 탭. 영상 이동(1), 영상 이동(2), 단축키 묶음이 스위치와 함께 나열되어 있습니다.',
  },
  v1141Welcome: {
    src: v1141Welcome,
    alt: 'Play Plus 1.14.1 첫 실행 창. 학습 최적화 설정을 적용할지 직접 설정할지 고르는 직접 설정하기, 학습 최적화 버튼이 있습니다.',
  },
} satisfies Record<string, Shot>;
