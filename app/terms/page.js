import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ThemeToggle";

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
          {`Effective Date: 21 Jan 2024

Welcome to DevFolio! These Terms of Service ("Terms") govern your use of the DevFolio website and services. By accessing or using our website and services, you agree to be bound by these Terms. If you do not agree to these Terms, please refrain from using DevFolio.

1. Description of DevFolio
DevFolio is a beautiful and minimalistic simple one-page portfolio platform designed for developers. Users own their individual pages, providing some personal information to build and customize their portfolios.

2.  User Data
DevFolio collects and processes user data, including name, email, and portfolio-related information, to enable the creation and management of individual portfolios. For details, please refer to our `}
          <a className="underline hover:text-foreground/70" href="/privacy-policy">privacy policy</a>{`.

3. Ownership
Users retain ownership of their individual pages and the content provided. DevFolio does not claim ownership over user-generated content.

4. Purchases and Refunds
By acquiring DevFolio, you agree to pay payment fee and any applicable taxes if required. Payments may be one-time purchases or recurring subscriptions, and you can cancel anytime by contacting us.

5. Availability
We make no guarantee that DevFolio will be available at all times. We reserve the right to suspend or terminate access for any reason.

6. Accounts
When creating an DevFolio account, provide accurate information and update it as needed. Maintain the security of your account, and notify us immediately of any unauthorized use. Do not disclose your account credentials to third parties.

7. Limitation of Liability
DevFolio is not liable for indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profits.

8. Indemnification
You agree to indemnify and hold DevFolio harmless from any claims or demands arising from your breach of these Terms.

9. Disclaimer
Your use of DevFolio is at your own risk. We provide services on an "AS IS" and "AS AVAILABLE" basis, expressly disclaiming all warranties, whether express or implied. We do not guarantee that DevFolio will meet your specific requirements, operate without interruptions, be timely, secure, or error-free. Additionally, we make no warranty regarding the accuracy or reliability of results obtained through DevFolio or the quality of any products, services, information, or materials acquired.

10. Governing Law and Miscellaneous Provisions
These Terms shall be governed and construed in accordance with the laws of India. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.

These Terms, including any additional agreements incorporated by reference, constitute the entire agreement between us regarding our Service and supersede and replace any prior agreements we might have between us regarding the Service.

11. Updates to the Terms
Users will be updated on changes to the Terms via email.

12. Changes to These Terms
We reserve the right to modify or replace these Terms at any time. Material changes will be notified at least 30 days in advance. Your continued use constitutes acceptance of the revised terms.

Contact Us
If you have any questions about these Terms, contact us at `}
          <a href="mailto:gaurav@indexerpro.com" target="_blank" className="px-1 underline hover:text-foreground/70">gaurav@indexerpro.com.</a>
        </pre>
      </div>
    </main>
  );
};

export default TOS;
