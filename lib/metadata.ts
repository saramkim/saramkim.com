import type { Metadata } from 'next';

export const siteName = 'saramkim';
export const siteUrl = 'https://www.saramkim.com';
export const defaultOgImage = '/og.png';
export const playPlusOgImage = '/og/play-plus.png';

// Every social image is rendered or cropped to this size by scripts/generate-og.mjs; verify-export enforces it.
const imageSize = { width: 1200, height: 630 } as const;

type PageMetadataInput = {
  /** Page title; the root layout's template appends "| saramkim". */
  title: string;
  description: string;
  /** Canonical path, e.g. "/play-plus". */
  path: string;
  /** Title for link previews when it should differ from the page title. */
  socialTitle?: string;
  /** Path of a 1200x630 image under public/. */
  image?: string;
  imageAlt?: string;
  locale?: 'ko_KR' | 'en_US';
  article?: { publishedTime: string; modifiedTime: string };
};

/**
 * Next.js merges metadata one level deep: a page that sets `openGraph` or `twitter` replaces the layout's whole
 * object, including its image. Building every page's metadata here keeps the preview image, card type and site
 * name from silently disappearing on pages that only meant to set their own title.
 */
export function pageMetadata({
  title,
  description,
  path,
  socialTitle = title,
  image = defaultOgImage,
  imageAlt = socialTitle,
  locale = 'ko_KR',
  article,
}: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: socialTitle,
      description,
      url: path,
      siteName,
      locale,
      ...(article ? { type: 'article' as const, ...article } : { type: 'website' as const }),
      images: [{ url: image, ...imageSize, alt: imageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: socialTitle,
      description,
      images: [{ url: image, alt: imageAlt }],
    },
  };
}
