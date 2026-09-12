import type { Metadata } from 'next';
import Link from 'next/link';

const description = 'Relay is a personal local automation tool for coordinating selected Google Drive files and Google Sheets with user-requested workflows.';

export const metadata: Metadata = {
  title: 'Relay',
  description,
  alternates: { canonical: '/relay' },
  openGraph: { title: 'Relay', description, url: '/relay', locale: 'en_US' },
  twitter: { title: 'Relay', description },
};

export default function RelayPage() {
  return (
    <article lang='en' className='site-container article-shell'>
      <h1 className='article-title mb-8'>Relay</h1>
      <div className='prose prose-stone prose-lg max-w-none'>
        <p>
          Relay is a personal local automation tool used by the owner of saramkim.com to coordinate selected
          Google Drive files and Google Sheets with the user&apos;s workflows. It runs in the user&apos;s local
          environment and is not a commercial hosted service.
        </p>
        <p>
          With the user&apos;s authorization through Google OAuth, Relay can manage competition workspaces,
          organize files and folders, and read or update workflow ledgers in Google Sheets. Its automation
          logic is designed to operate on authorized competition workspaces to carry out user-requested tasks.
        </p>
        <p><Link href='/relay/privacy'>Relay Privacy Policy</Link></p>
      </div>
    </article>
  );
}
