import type { Metadata } from 'next';
import { PageHero } from '@/components/page-hero';

export const metadata: Metadata = {
  title: 'Privacy notice',
  description: 'How Team Kinetix collects, uses and protects personal information submitted through this website.',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  return <>
    <PageHero eyebrow="Privacy notice" title="Your information." intro="How Team Kinetix uses and protects the personal information you share through this commercial website." />
    <section className="section-pad bg-white text-[var(--ink)]">
      <article className="prose-copy site-container">
        <h2>Who is responsible for your information</h2>
        <p>Team Kinetix is the controller of personal information collected through this website. You can contact us at <a href="mailto:info@teamkinetix.co.uk">info@teamkinetix.co.uk</a>, by telephone on <a href="tel:+441376337315">+44 (0)1376 337315</a>, or by post at Unit 3E, Moss Road, Witham, Essex CM8 3UW.</p>

        <h2>Information we collect</h2>
        <p>When you make an enquiry, we may collect your name, company or organisation, email address, telephone number, enquiry type and the project information you choose to provide. We also process limited technical information, such as an IP address, to protect the form from misuse and rate-limit repeated submissions.</p>

        <h2>Why we use it</h2>
        <p>We use this information to understand and respond to your enquiry, discuss your requirements, prepare a proposal and, where appropriate, take steps towards providing our services. Our lawful bases are taking steps at your request before entering into a contract and our legitimate interests in managing professional enquiries, maintaining business records and protecting the website from abuse.</p>
        <p>We do not add enquiry details to an unrelated marketing list, and we do not use them for automated decision-making or profiling.</p>

        <h2>What you need to provide</h2>
        <p>Fields marked with an asterisk are needed for us to review and respond to an online enquiry. Other fields are optional. You are not under a statutory obligation to provide information, but without your name, contact details and sufficient project information we may not be able to respond meaningfully.</p>

        <h2>Who we share it with</h2>
        <p>Access is limited to Team Kinetix and trusted service providers who support our website, email and business operations, where they need the information for that purpose. If online form delivery is enabled, Resend (Plus Five Five, Inc.) processes the submission as our email delivery provider. We may also disclose information where required by law or to establish, exercise or defend legal claims. We do not sell personal information.</p>

        <h2>International transfers</h2>
        <p>Some service providers may process information outside the UK. Resend&apos;s primary processing operations are in the United States. Where this happens, appropriate contractual safeguards are used, including the UK Addendum to the EU Standard Contractual Clauses where applicable. You can ask us for more information about the relevant safeguards.</p>

        <h2>How long we keep it</h2>
        <p>We keep enquiry information only for as long as needed to respond, manage any resulting working relationship and meet legal, accounting or reporting requirements. General enquiries that do not lead to work are normally deleted or anonymised within 24 months of the last meaningful contact. Information connected with a contract may be kept for longer where required for business or legal records.</p>

        <h2>Embedded video and external links</h2>
        <p>We do not load a YouTube player until you choose to play a video. At that point, YouTube&apos;s privacy-enhanced player is loaded and Google or YouTube may receive technical and usage information under their own privacy terms. Links to other websites are governed by those websites&apos; privacy notices.</p>

        <h2>Your data protection rights</h2>
        <p>Depending on the circumstances, you may have rights to access, correct, erase or restrict the use of your information, receive a portable copy, and object to processing based on legitimate interests. You have the right to object at any time to processing based on our legitimate interests. These rights are not absolute and exemptions may apply.</p>
        <p>To exercise a right, ask a question or request information about safeguards, email <a href="mailto:info@teamkinetix.co.uk">info@teamkinetix.co.uk</a>. We may need to confirm your identity before completing a request.</p>

        <h2>Complaints</h2>
        <p>Please contact us first so we can try to resolve your concern. You also have the right to complain to the UK Information Commissioner&apos;s Office at <a href="https://ico.org.uk/make-a-complaint/" rel="external">ico.org.uk/make-a-complaint</a> or on 0303 123 1113.</p>

        <h2>Changes to this notice</h2>
        <p>We may update this notice when our services or the law change. The latest version will always be published on this page.</p>
        <p className="text-sm text-black/50">Last updated: 7 September 2026.</p>
      </article>
    </section>
  </>;
}
