import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="bg-background-dark text-slate-100 antialiased selection:bg-primary selection:text-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-4xl mx-auto px-6 py-24 lg:py-32 w-full">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">Privacy Policy</h1>
        <div className="prose prose-invert max-w-none text-slate-300 space-y-6">
          <p><strong>Effective Date:</strong> March 31, 2026</p>
          
          <h2 className="text-2xl font-semibold text-white mt-10 mb-4">1. Introduction</h2>
          <p>Welcome to our application (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We respect your privacy and are committed to protecting your personal data. This Privacy Policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>
          
          <h2 className="text-2xl font-semibold text-white mt-10 mb-4">2. Data We Collect About You</h2>
          <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data</strong> includes email address and telephone numbers.</li>
            <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
            <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-10 mb-4">3. How We Use Your Personal Data</h2>
          <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
            <li>Where we need to comply with a legal obligation.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-10 mb-4">4. Data Security</h2>
          <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.</p>

          <h2 className="text-2xl font-semibold text-white mt-10 mb-4">5. Data Retention</h2>
          <p>We will only retain your personal data for as long as reasonably necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or reporting requirements.</p>

          <h2 className="text-2xl font-semibold text-white mt-10 mb-4">6. Your Legal Rights</h2>
          <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data and (where the lawful ground of processing is consent) to withdraw consent.</p>

          <h2 className="text-2xl font-semibold text-white mt-10 mb-4">7. Third-Party Links</h2>
          <p>This website may include links to third-party websites, plug-ins and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements.</p>

          <h2 className="text-2xl font-semibold text-white mt-10 mb-4">8. Changes to the Privacy Policy</h2>
          <p>We keep our privacy policy under regular review. Any changes we make to our privacy policy in the future will be posted on this page.</p>

          <h2 className="text-2xl font-semibold text-white mt-10 mb-4">9. Contact Us</h2>
          <p>If you have any questions about this privacy policy or our privacy practices, please contact us at support@viralclip.app.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
