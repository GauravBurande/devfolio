import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ThemeToggle";

// You are an excellent lawyer.

// I need your help to write a simple Terms & Services for my website. Here is some context:
// - Website: https://devfolio.vercel.app
// - Name: DevFolio
// - Contact information: support@devfolio.vercel.app
// - Description: A JavaScript code boilerplate to help entrepreneurs launch their startups faster
// - Ownership: when buying a package, users can download code to create apps. They own the code but they do not have the right to resell it. They can ask for a full refund within 7 day after the purchase.
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Link to privacy-policy: https://devfolio.vercel.app/privacy-policy
// - Governing Law: France
// - Updates to the Terms: users will be updated by email

// Please write a simple Terms & Services for my site. Add the current date. Do not add or explain your reasoning. Answer:

export const metadata = getSEOTags({
  title: `Terms and Conditions | ${config.appName}`,
  canonicalUrlRelative: "/tos",
});

const TOS = () => {
  return (
    <main className="max-w-xl mx-auto">
      <div className="p-5">
        <div className="flex items-center justify-between gap-10">
          <Link href="/">
            <Button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 -translate-x-1 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
                  clipRule="evenodd"
                />
              </svg>{" "}
              Back
            </Button>
          </Link>

          <ModeToggle />
        </div>
        <h1 className="text-3xl font-extrabold py-6">
          Terms and Conditions for {config.appName}
        </h1>

        <pre
          className="leading-relaxed text-lg whitespace-pre-wrap"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          {`Effective Date: 1 February 2024

Welcome to IndexerPro! These Terms of Service ("Terms") govern your use of the IndexerPro website and services. By accessing or using our website and services, you agree to be bound by these Terms. If you do not agree to these Terms, please refrain from using IndexerPro.

1. Description of Services
IndexerPro offers a service to transform your web presence through lightning-fast indexing. Gain visibility on Google within minimum 48 hours, track progress effortlessly, and propel your traffic. Our automatic indexing tool ensures your pages get noticed on Google quickly.

2. Ownership and User Data
You own your data. We collect and process personal data, including name, email, payment information, and Google Search Console information. Non-personal data is collected through web cookies. For details, please refer to our `}
          <a className="underline hover:text-foreground/70" href="/privacy-policy">privacy policy</a>{`.

3. Acceptable Use
You may only use IndexerPro for lawful purposes and in compliance with applicable laws and regulations.

4. Purchases and Refunds
By acquiring IndexerPro, you agree to pay the one-time payment fee and any applicable taxes. Payments are non-recurring, and you can cancel anytime by contacting us. Refunds are not available.

5. Availability
We make no guarantee that IndexerPro will be available at all times. We reserve the right to suspend or terminate access for any reason.

6. Accounts
When creating an IndexerPro account, provide accurate information and update it as needed. Maintain the security of your account, and notify us immediately of any unauthorized use. Do not disclose your account credentials to third parties.

7. Limitation of Liability
IndexerPro is not liable for indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profits.

8. Indemnification
You agree to indemnify and hold IndexerPro harmless from any claims or demands arising from your breach of these Terms.

9. Disclaimer
Your use of IndexerPro is at your own risk. We provide services on an "AS IS" and "AS AVAILABLE" basis, expressly disclaiming all warranties, whether express or implied. We do not guarantee that IndexerPro will meet your specific requirements, operate without interruptions, be timely, secure, or error-free. Additionally, we make no warranty regarding the accuracy or reliability of results obtained through IndexerPro or the quality of any products, services, information, or materials acquired.

10. Governing Law and Miscellaneous Provisions
These Terms shall be governed and construed in accordance with the laws of India. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.

These Terms, including any additional agreements incorporated by reference, constitute the entire agreement between us regarding our Service and supersede and replace any prior agreements we might have between us regarding the Service.

11. Updates to the Terms
Users will be updated on changes to the Terms via email.

12. Changes to These Terms
We reserve the right to modify or replace these Terms at any time. Material changes will be notified at least 30 days in advance. Your continued use constitutes acceptance of the revised terms.

Contact Us
If you have any questions about these Terms, contact us at `}
          <a href="mailto:support@indexerpro.com" target="_blank" className="px-1 underline hover:text-foreground/70">support@indexerpro.com.</a>
        </pre>
      </div>
    </main>
  );
};

export default TOS;
