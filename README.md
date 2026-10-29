# saramkim.com

Play Plus와 WebSubtitle의 제품 발견·설치·사용 지원을 중심으로 운영하는 정적 사이트입니다. Next.js App Router, MDX, Tailwind CSS로 구성하며 빌드 결과는 `out/` 디렉터리에 생성됩니다.

## 페이지 역할

- `/`: 제품 선택과 제품별 문의 진입점. WebSubtitle 사용 지원은 `websubtitle.com`으로 연결합니다.
- `/play-plus`: 공개 기능에 한정한 제품 소개, 설치와 문의 안내입니다.
- `/about`: 제작자 소개, 작업 원칙과 글·제작 사례 진입점입니다.
- `/projects`, `/projects/[slug]`: 기존 제품 제작 사례입니다. `/blog`와 기존 글 주소도 유지합니다.
- `/play-plus/privacy`, `/relay`, `/relay/privacy`, `/worktrace`, `/worktrace/privacy`: 기존 정책과 OAuth 앱 안내입니다. 본문·주소·언어 앵커·관련 접근 경로를 보존합니다.

기본 사용법과 Play Plus 2.0 변경 안내는 출시 후속 범위입니다. 현재는 해당 경로·준비 중 페이지·링크를 만들지 않으며 정적 출력과 sitemap에도 포함하지 않습니다. 새 기능은 공개 여부와 실제 화면을 확인한 뒤 안내합니다. 제작 사례의 사용자 수·평점은 `statsAsOf` 기준의 과거 기록이며 홈·제품 소개에 최신 성과처럼 재사용하지 않습니다.

## 로컬 실행

Node.js 22와 Corepack을 사용합니다.

```bash
corepack enable
yarn install
yarn dev
```

개발 서버는 기본적으로 `http://localhost:3000`에서 실행됩니다.

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

```bash
yarn lint
yarn typecheck
yarn build
yarn verify:export
yarn audit
```

`yarn check`는 lint, typecheck, 정적 빌드, 내보낸 HTML·메타데이터 검증을 순서대로 실행합니다. Pull Request와 `main` 브랜치 push에서도 같은 검증과 high-severity 의존성 audit을 GitHub Actions가 실행합니다.

Windows에서는 Turbopack의 PostCSS 자식 프로세스 소켓 연결이 종료되는 오류를 피하도록 `next.config.js`의 `experimental.turbopackPluginRuntimeStrategy`를 `workerThreads`로 설정합니다. Turbopack은 계속 사용하며, 다른 운영체제에서는 기본 설정을 유지합니다. 현재 Next.js 16.4.3·Node.js 22에서 검증했으며, Next.js 업데이트 시 이 실험 옵션의 지원 여부를 확인합니다.

Yarn audit의 `brace-expansion` advisory는 ESLint 9가 사용하는 `minimatch` 3 계열의 전이 의존성입니다. 패치된 `brace-expansion` 5를 강제로 연결하면 ESLint가 동작하지 않으며, 이 경로에는 저장소가 관리하는 glob만 입력됩니다. 따라서 advisory ID `1124334`만 `.yarnrc.yml`에서 근거와 함께 예외 처리하고 나머지 high-severity 항목은 CI에서 계속 차단합니다.

추가로 `braces` 3.0.3의 [GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm) (advisory ID `1240992`)는 2026-10-15 현재 공식 수정 버전이 없어 운영자 승인으로 해당 ID만 예외 처리합니다. 깊게 중첩된 glob 패턴이 Node.js 호출 스택을 고갈시키는 취약점은 패키지에 남아 있으며, 예외 처리가 이를 수정하지는 않습니다.

확인한 의존 경로는 `eslint-config-next → @next/eslint-plugin-next → fast-glob → micromatch → braces`입니다. 이 사이트는 정적 HTML로 배포되고 ESLint의 `settings.next.rootDir`도 설정하지 않아, 현재 구성에서는 방문자 입력이 해당 경로에 도달하지 않습니다. 저장소가 관리하는 빌드·lint 입력만 사용한다는 조건으로 예외를 한정합니다. 외부 입력으로 glob을 만들거나 해당 설정·실행 경로를 바꾸기 전에 재검토하고, 공식 수정 버전이 나오면 업데이트 후 예외를 제거합니다. 나머지 high-severity 경고는 계속 CI를 실패시킵니다.

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
