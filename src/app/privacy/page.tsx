import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for danielkhalili.com",
};

export default function Privacy() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
      <h1 className="text-3xl sm:text-4xl font-light mb-8">
        Privacy <span className="gradient-text font-medium">Policy</span>
      </h1>

      <div className="prose prose-invert max-w-none space-y-6 text-sm text-text-body leading-relaxed">
        <p>Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p>

        <h2 className="text-lg font-medium text-text mt-8 mb-3">Information Collection</h2>
        <p>
          This website collects information you voluntarily provide through the
          contact form, including your name, email address, and message content.
          This information is used solely to respond to your inquiry.
        </p>

        <h2 className="text-lg font-medium text-text mt-8 mb-3">Use of Information</h2>
        <p>
          Information submitted through the contact form is sent to my email and
          is not shared with third parties, sold, or used for marketing purposes.
        </p>

        <h2 className="text-lg font-medium text-text mt-8 mb-3">Analytics</h2>
        <p>
          This site may use privacy-respecting analytics to understand general
          usage patterns. No personally identifiable information is collected
          through analytics.
        </p>

        <h2 className="text-lg font-medium text-text mt-8 mb-3">Contact</h2>
        <p>
          Questions about this privacy policy can be directed to{" "}
          <a href="mailto:dkhalili93@gmail.com" className="text-primary hover:underline">
            dkhalili93@gmail.com
          </a>.
        </p>
      </div>
    </div>
  );
}
