# saramkim.com

개인 프로젝트와 글을 소개하는 정적 포트폴리오 사이트입니다. Next.js App Router, MDX, Tailwind CSS로 구성하며 빌드 결과는 `out/` 디렉터리에 생성됩니다.

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

Yarn audit의 `brace-expansion` advisory는 ESLint 9가 사용하는 `minimatch` 3 계열의 전이 의존성입니다. 패치된 `brace-expansion` 5를 강제로 연결하면 ESLint가 동작하지 않으며, 이 경로에는 저장소가 관리하는 glob만 입력됩니다. 따라서 advisory ID `1124334`만 `.yarnrc.yml`에서 근거와 함께 예외 처리하고 나머지 high-severity 항목은 CI에서 계속 차단합니다.

## 배포

`yarn build`는 정적 사이트를 `out/`에 내보냅니다. 현재 운영 도메인은 `https://www.saramkim.com`이며, 배포 플랫폼에는 다음 원칙을 적용합니다.

- `www.saramkim.com`을 canonical 호스트로 사용합니다.
- apex 도메인 `saramkim.com`은 www 호스트로 301 또는 308 영구 리디렉션합니다.
- 배포 대상은 `out/` 디렉터리입니다.
- Node.js 22와 저장소에 지정된 Yarn 버전을 사용합니다.

배포는 호스팅 플랫폼에서 `main` 브랜치를 기준으로 수행합니다. 프로덕션 배포 전에는 CI가 모두 통과했는지 확인합니다.
