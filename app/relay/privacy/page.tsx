import type { Metadata } from 'next';
import Link from 'next/link';

const description = 'How Relay, a personal local automation tool, accesses and uses Google Drive and Google Sheets data, stores OAuth credentials, and supports revoking access.';

export const metadata: Metadata = {
  title: 'Relay Privacy Policy',
  description,
  alternates: { canonical: '/relay/privacy' },
  openGraph: { title: 'Relay Privacy Policy', description, url: '/relay/privacy', locale: 'en_US' },
  twitter: { title: 'Relay Privacy Policy', description },
};

export default function RelayPrivacyPage() {
  return (
    <article lang='en' className='site-container article-shell'>
      <header className='article-header'>
        <h1 className='article-title'>Relay Privacy Policy</h1>
        <p className='mt-7 text-sm text-stone-600'>Last updated: <time dateTime='2026-09-13'>September 13, 2026</time></p>
      </header>
      <div className='prose prose-stone prose-lg max-w-none'>
        <h2>About Relay</h2>
        <p>
          <Link href='/relay'>Relay</Link> is a personal local automation tool used by the owner of saramkim.com
          to coordinate selected Google Drive files and Google Sheets with the user&apos;s workflows.
          It runs in the user&apos;s local environment and is not a commercial hosted service.
          This policy describes Relay&apos;s handling of Google user data and OAuth credentials.
        </p>

        <h2>Google data access and use</h2>
        <p>
          With the user&apos;s authorization through Google OAuth, Relay can access Google Drive and Google
          Sheets data needed for the tasks the user requests. This may include file and folder information,
          selected file contents, and spreadsheet contents such as workflow ledgers.
        </p>
        <p>
          Relay uses this access to manage competition workspaces, organize and manage files and folders,
          and read or update workflow ledgers. Its automation logic is designed to operate on authorized
          competition workspaces. Access is used to carry out user-requested functions.
        </p>

        <h2>Advertising, sale, and sharing</h2>
        <p>
          Relay does not use Google user data for advertising. Relay does not sell Google user data or
          commercially share it with third parties.
        </p>

        <h2>Local credentials and storage</h2>
        <p>
          OAuth credentials and tokens are stored in the user&apos;s local environment where Relay runs.
          Credentials and tokens are not stored in public repositories.
        </p>

        <h2>Revoking access and removing credentials</h2>
        <p>
          The user can revoke Relay&apos;s access at any time through the{' '}
          <a href='https://myaccount.google.com/connections'>Google Account permissions management page</a>.
          When the user stops using Relay or its OAuth connection, they can remove the related locally stored
          credentials and tokens from the environment where Relay runs.
        </p>
        <p>
          Removing local credentials does not delete files or spreadsheets in Google Drive or Google Sheets.
          Those can be managed or deleted directly through the respective Google services.
        </p>

        <h2>Google API policy compliance</h2>
        <p>
          Relay&apos;s use and transfer of information received from Google APIs complies with the{' '}
          <a href='https://developers.google.com/terms/api-services-user-data-policy'>
            Google API Services User Data Policy
          </a>, including the applicable Limited Use requirements.
        </p>

        <h2>Contact</h2>
        <p>
          For questions about Relay or this privacy policy, contact the owner of saramkim.com at{' '}
          <a href='mailto:saramkimm@gmail.com'>saramkimm@gmail.com</a>.
        </p>
      </div>
    </article>
  );
}
