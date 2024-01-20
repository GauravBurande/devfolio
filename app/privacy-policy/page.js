import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ThemeToggle";

// You are an excellent lawyer.

// I need your help to write a simple privacy policy for my website. Here is some context:
// - Website: https://devfolio.vercel.app
// - Name: DevFolio
// - Description: A JavaScript code boilerplate to help entrepreneurs launch their startups faster
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Purpose of Data Collection: Order processing
// - Data sharing: we do not share the data with any other parties
// - Children's Privacy: we do not collect any data from children
// - Updates to the Privacy Policy: users will be updated by email
// - Contact information: devfolio.vercel.app

// Please write a simple privacy policy for my site. Add the current date.  Do not add or explain your reasoning. Answer:

export const metadata = getSEOTags({
  title: `Privacy Policy | ${config.appName}`,
  canonicalUrlRelative: "/privacy-policy",
});

const PrivacyPolicy = () => {
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
          Privacy Policy for {config.appName}
        </h1>

        <pre
          className="leading-relaxed text-lg whitespace-pre-wrap"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          {`Effective Date: 1 February 2024

At IndexerPro, we highly value and prioritize your privacy. This privacy policy outlines our practices regarding the collection, use, and sharing of information when you engage with our website or utilize our services.

Information We Collect

We gather the following information when you interact with our website or services:

- Personal information you provide to us, such as your name and email address.
- Information about your device and usage of our website or services, including your IP address, device type, and browsing history.

Payment Information

We prioritize the security of your payment information. All payment details are securely processed by our trusted payment processor, Stripe. For details, please refer to Stripe's privacy policy: `}
          <a className="underline hover:text-foreground/70" href="https://stripe.com/privacy">privacy policy</a>{`.

How We Use Your Information

We employ the information we collect to:

- Provide, enhance, and maintain our website and services.
- Communicate with you regarding your account and usage of our website or services.
- Safeguard the security and integrity of our website and services.

Sharing Your Information

We do not sell or disclose your personal information for third-party marketing purposes. However, we may share your information under the following circumstances:

- To comply with legal obligations, such as responding to subpoenas or court orders.
- To safeguard the rights, property, and safety of our company, customers, or others.

Your Rights

Under the GDPR, you possess certain rights concerning your personal information, including the rights to access, correct, erase, restrict, and object to the processing of your data. Additionally, you have the right to data portability and can withdraw your consent at any time. For the exercise of these rights, please contact us using the information provided below.

Changes to This Privacy Policy

We may periodically update this privacy policy. Any changes will be posted on this page, and we encourage you to regularly review the policy.

Contact Us

If you have inquiries or concerns regarding this privacy policy or the handling of your personal information, please reach out to us at `}
          <a href="mailto:support@indexerpro.com" target="_blank" className="px-1 underline hover:text-foreground/70">support@indexerpro.com.</a>
        </pre>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
