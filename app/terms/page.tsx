import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TermsOfService() {
  return (
    <div className="bg-background-dark text-slate-100 antialiased selection:bg-primary selection:text-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-4xl mx-auto px-6 py-24 lg:py-32 w-full">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">Terms of Service</h1>
        <div className="prose prose-invert max-w-none text-slate-300 space-y-6">
          <p><strong>Effective Date:</strong> March 31, 2026</p>
          
          <h2 className="text-2xl font-semibold text-white mt-10 mb-4">1. Acceptance of Terms</h2>
          <p>By accessing or using our website and services (&quot;Service&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you disagree with any part of the terms, then you may not access the Service.</p>
          
          <h2 className="text-2xl font-semibold text-white mt-10 mb-4">2. Use of Service</h2>
          <p>You agree to use the Service only for lawful purposes and in accordance with these Terms. You are responsible for all your activities while using the Service.</p>

          <h2 className="text-2xl font-semibold text-white mt-10 mb-4">3. Intellectual Property</h2>
          <p>The Service and its original content, features, and functionality are and will remain the exclusive property of our company and our licensors. The Service is protected by copyright, trademark, and other laws.</p>

          <h2 className="text-2xl font-semibold text-white mt-10 mb-4">4. Testing, Payment, and No Refund Policy (Lifetime Deal)</h2>
          <p>We offer a free version of our tool which produces watermarked outputs. This free tier is provided specifically so that you can thoroughly test the capabilities, quality, and full output of our Service before committing to a purchase.</p>
          <p><strong>Because we provide this full-featured free version (with watermarks) allowing you to test the outputs to your satisfaction, all purchases of our Lifetime Deal are final. There are strictly no refunds once payment is made for the Lifetime Deal.</strong></p>
          <p>We encourage you to use the free version extensively to test the product. You may upgrade and pay for the Lifetime Deal only when you feel completely confident that the product meets your needs.</p>

          <h2 className="text-2xl font-semibold text-white mt-10 mb-4">5. Accounts and Registration</h2>
          <p>When you create an account with us, you must provide us with information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.</p>

          <h2 className="text-2xl font-semibold text-white mt-10 mb-4">6. Limitation of Liability</h2>
          <p>In no event shall we, nor our directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>

          <h2 className="text-2xl font-semibold text-white mt-10 mb-4">7. Changes to Terms</h2>
          <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.</p>

          <h2 className="text-2xl font-semibold text-white mt-10 mb-4">8. Governing Law</h2>
          <p>These Terms shall be governed and construed in accordance with the laws of our Jurisdiction, without regard to its conflict of law provisions.</p>

          <h2 className="text-2xl font-semibold text-white mt-10 mb-4">9. Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us at support@viralclip.app.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
