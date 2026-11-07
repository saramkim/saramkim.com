# saramkim.com

Play Plus와 WebSubtitle의 제품 발견·설치·사용 지원을 중심으로 운영하는 정적 사이트입니다. Next.js App Router, MDX, Tailwind CSS로 구성하며 빌드 결과는 `out/` 디렉터리에 생성됩니다.

## 페이지 역할

- `/`: 제품 선택과 제품별 문의 진입점. WebSubtitle 사용 지원은 `websubtitle.com`으로 연결합니다.
- `/play-plus`: 공개 기능에 한정한 제품 소개, 설치와 문의 안내입니다.
- `/about`: 제작자 소개, 작업 원칙과 글·제작 사례 진입점입니다.
- `/projects`, `/projects/[slug]`: 기존 제품 제작 사례입니다. `/blog`와 기존 글 주소도 유지합니다.
- `/play-plus/privacy`, `/worktrace`, `/worktrace/privacy`: 기존 정책과 OAuth 앱 안내입니다. 본문·주소·언어 앵커·관련 접근 경로를 보존합니다.

Relay 안내와 개인정보처리방침은 사용 종료에 따라 제거했습니다. WebSubtitle 소개·도움말은 한국어 페이지로, 홈의 설치 링크는 Chrome 웹 스토어로 연결합니다.

기본 사용법(`/play-plus/guide`)과 Play Plus 2.0 변경 안내(`/play-plus/updates/2.0`)는 일반 빌드에 포함되는 공개 페이지입니다. 제품 페이지에서 연결하며 sitemap에 포함하고 검색 색인을 허용합니다.

제작 사례의 사용자 수·평점은 `statsAsOf` 기준의 과거 기록이며 홈·제품 소개에 최신 성과처럼 재사용하지 않습니다.

## 로컬 실행

Node.js 22.23.4와 Corepack을 사용합니다. `.node-version`과 `.nvmrc`에 같은 버전을 기록하며 CI도 이를 읽습니다. ESLint 10 때문에 Node 22.13 이상이 필요합니다. nvm-windows에서는 `nvm install 22.23.4`, `nvm use 22.23.4`로 선택한 뒤 `node --version`을 확인합니다.

```bash
corepack enable
yarn install
yarn dev
```

개발 서버는 기본적으로 `http://localhost:3000`에서 실행됩니다.

## Play Plus 안내

기본 사용법과 2.0 변경 안내는 각각 `app/play-plus/guide/page.tsx`, `app/play-plus/updates/2.0/page.tsx`에 있습니다. `yarn dev`와 `yarn build`로 확인하며, `yarn verify:export`는 공개 링크·사이트맵·검색 허용 상태를 검사합니다. 스토어 출시 전에도 공개합니다.

캡처는 `app/play-plus/_guide/shots/`의 실제 화면입니다. 패널 단독 화면은 play-plus `main` d7caa34, 쿠팡플레이 재생 화면은 2026-11-06 한국어 Chrome에서 c44a18e(d7caa34 + 음수 시각 표시 수정)로, 1.14.1 화면은 `v1.14.1` 태그 빌드로 찍었습니다. 필요한 영역만 잘라 WebP로 변환했고, 크기 변경·보정·합성은 하지 않았습니다. 원본 PNG와 촬영 기록(작품·시점, 촬영 후 데이터 복원 확인)은 저장소에 넣지 않고 로컬에 보관합니다. 새 화면을 아직 찍지 못했을 때는 `PendingShot`(점선 상자, `data-capture-pending`)으로 표시합니다. 현재 두 페이지에는 남아 있지 않습니다.

최종 화면이 캡처 시점과 달라지면 캡처와 문구를 갱신합니다.

## 콘텐츠 작성

블로그 글은 `content/blog`, 프로젝트 소개는 `content/projects`에 MDX 파일로 추가합니다. 파일 이름이 URL의 slug가 됩니다.

블로그 frontmatter 예시:

```mdx
---
title: 글 제목
date: 2026-07-29
updated: 2026-07-29
excerpt: 목록과 검색 결과에 표시할 짧은 설명
locale: ko
ogImage: /og.png
---
```

프로젝트 frontmatter 예시:

```mdx
---
title: 프로젝트 이름
description: 프로젝트를 한 문장으로 설명
updated: 2026-07-29
locale: ko
ogImage: /og.png
---
```

필수 필드나 날짜 형식이 잘못되면 빌드가 실패합니다. 이미지는 `public/` 아래에 두고 MDX에서는 `/images/example.webp`처럼 절대 경로로 참조합니다.

## 검증

### 로고와 파비콘

`public/brand/wordmark.svg`는 글자를 패스로 만든 흑백 로고이며, `public/brand/icon.svg`는 같은 첫 글자 `s`를 사용합니다. 외부 폰트 없이 표시됩니다. 헤더·푸터는 `components/brand.tsx`의 공통 로고를 사용합니다.

원본 패스는 `scripts/generate-brand.mjs`에서 관리합니다. 수정 후 `yarn brand:generate`로 SVG, 512px 사이트 아이콘, 180px Apple 아이콘, 16·32·48px 프레임이 포함된 favicon.ico를 함께 재생성합니다. PNG 변환에는 현재 Next.js 의존성으로 설치되는 `sharp`가 필요합니다. Next.js 파일 기반 메타데이터가 `app/`의 아이콘을 연결합니다.

```bash
yarn lint
yarn typecheck
yarn test
yarn build
yarn verify:export
yarn audit
```

`yarn check`는 lint, typecheck, 회귀 테스트, 정적 빌드, 내보낸 HTML·메타데이터 검증을 순서대로 실행합니다. Pull Request와 `main` 브랜치 push에서도 같은 검증과 moderate 이상 의존성 audit을 GitHub Actions가 실행합니다.

Windows에서는 Turbopack의 PostCSS 자식 프로세스 소켓 연결이 종료되는 오류를 피하도록 `next.config.js`의 `experimental.turbopackPluginRuntimeStrategy`를 `workerThreads`로 설정합니다. Turbopack은 계속 사용하며, 다른 운영체제에서는 기본 설정을 유지합니다. 현재 Next.js 16.4.3·Node.js 22에서 검증했으며, Next.js 업데이트 시 이 실험 옵션의 지원 여부를 확인합니다.

의존성 검증은 `scripts/dependencies.test.mjs`에서 MDX의 인코딩된 언어 이름, glob 증폭 제한, ESLint의 React·접근성·import·TypeScript 진단을 검사합니다. `scripts/mdx.test.mjs`는 실제 콘텐츠 로더를 통해 잘못된 날짜 거부와 윤년·선택 필드 처리를 검증합니다.

`minimatch` [GHSA-g3hv-75wg-m249](https://github.com/advisories/GHSA-g3hv-75wg-m249)의 버전 범위는 `<11.0.1` 전체를 포함하지만, 설명과 [공식 수정](https://github.com/isaacs/minimatch/commit/77a0f5c4b80bdc641c3c930a1d9edf5ad2db57f8)은 `optimizationLevel >= 2`의 `firstPhasePreProcess` / `secondPhasePreProcess`에 관한 것입니다. Next의 React/import 플러그인이 요구하는 3.1.5에는 이 알고리즘이 없습니다. 3.x의 callable API를 보존하고, 현대적인 API를 사용하는 ESLint·config-array·TypeScript 파서 경로만 11.0.3으로 고정했습니다. 테스트가 lockfile의 모든 minimatch 버전과 3.x 구현에 해당 알고리즘이 없음을 검사하므로, 예외가 새 취약 버전을 가리지 않도록 CI에서 테스트와 audit을 함께 실행해야 합니다.

이 근거로 advisory ID `1244012`만 audit에서 제외합니다. 기존 `1124334`, `1240992` 예외는 현재 감사에서 보고되지 않아 제거했습니다. 새 권고나 의존성 변경 시 이 판단을 다시 검토합니다. `postcss-selector-parser`는 typography가 6.0.10을 정확히 요구하므로 같은 메이저의 수정 버전 6.1.5로 선택적 고정합니다.

ESLint 10을 사용하며 Next 16.4.3이 제공하는 React/import RuleContext 호환 처리를 유지합니다. 일부 플러그인의 선언된 peer 범위는 아직 ESLint 9까지여서 설치 시 peer 경고가 남습니다. 경고를 숨기거나 peer 범위를 임의로 넓히지 않고, 실제 활성 규칙의 진단을 회귀 테스트로 확인합니다. Next 또는 플러그인 업데이트 시 호환 처리와 경고를 재검토합니다.

## 배포

`yarn build`는 정적 사이트를 `out/`에 내보냅니다. 현재 운영 도메인은 `https://www.saramkim.com`이며, 배포 플랫폼에는 다음 원칙을 적용합니다.

- `www.saramkim.com`을 canonical 호스트로 사용합니다.
- apex 도메인 `saramkim.com`은 www 호스트로 301 또는 308 영구 리디렉션합니다.
- 배포 대상은 `out/` 디렉터리입니다.
- Node.js 22와 저장소에 지정된 Yarn 버전을 사용합니다.

배포는 호스팅 플랫폼에서 `main` 브랜치를 기준으로 수행합니다. 프로덕션 배포 전에는 CI가 모두 통과했는지 확인합니다.

## Worktrace Backup 공개 안내

개인용 수동 백업 소개는 `app/worktrace/page.tsx`, 한국어·영어 개인정보처리방침은 `app/worktrace/privacy/page.tsx`에서 관리합니다. 기존 레이아웃과 성능 측정만 재사용하는 정적 페이지이며 OAuth 연결이나 백업을 실행하지 않습니다.

- 홈페이지 및 canonical: `https://www.saramkim.com/worktrace`
- 개인정보처리방침 및 canonical: `https://www.saramkim.com/worktrace/privacy`

별도 승인 후 commit·push하여 `main` 기반 배포를 완료하고, 두 URL의 공개 접근·canonical·상호 링크를 확인한 뒤 Google OAuth 앱 설정에 입력합니다. 페이지 작성이나 배포는 Google 설정 완료·심사 통과 또는 실제 계정 연결·Drive 업로드의 증거가 아닙니다.
