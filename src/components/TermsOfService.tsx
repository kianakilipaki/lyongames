import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const TermsOfService: React.FC = () => {
  return (
    <>
      <Navbar />
      <br />
      <main className="max-w-4xl mx-auto px-4 py-12 text-game-yellow font-body text-sm md:text-base leading-relaxed">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-6 font-pixel">Terms of Service</h1>

        <p><strong>Published by:</strong> Lyon Games</p>
        <p><strong>Effective Date:</strong> May 15, 2025</p>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-white font-pixel mb-2">1. Acceptance of Terms</h2>
          <p>
            By downloading or using any app published by Lyon Games, you agree to these Terms of Service.
            If you do not agree, please do not use our applications.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-white font-pixel mb-2">2. Use of the App</h2>
          <p>
            Our apps are intended for personal and non-commercial use. You may not use them for any illegal
            or unauthorized purpose.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-white font-pixel mb-2">3. In-App Purchases</h2>
          <p>
            Some of our apps may offer optional in-app purchases. All transactions are handled securely
            by Apple or Google. We do not store payment information.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-white font-pixel mb-2">4. User Accounts</h2>
          <p>
            Some apps may offer optional login features via third-party providers (e.g., Google, Apple).
            We do not access your passwords. Basic information such as name and email may be collected
            for personalization or syncing progress.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-white font-pixel mb-2">5. Intellectual Property</h2>
          <p>
            All content, assets, and code are the intellectual property of Lyon Games or its licensors and
            may not be used without permission.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-white font-pixel mb-2">6. Termination</h2>
          <p>
            We reserve the right to restrict or terminate your access to any app if you violate these terms
            or engage in harmful behavior.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-white font-pixel mb-2">7. Disclaimer</h2>
          <p>
            Apps are provided "as is" without warranties of any kind. Lyon Games is not liable for any damages
            resulting from the use or inability to use our apps.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-white font-pixel mb-2">8. Changes to Terms</h2>
          <p>
            We may update these Terms of Service at any time. Continued use of our apps after changes means
            you accept the revised terms.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-white font-pixel mb-2">9. Contact</h2>
          <p>
            For questions or concerns, please{' '}
            <a
              href="https://lyongames.net/#contact"
              target="_blank"
              rel="noopener noreferrer"
              className="text-game-cyan underline hover:text-white transition"
            >
              contact us here
            </a>.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default TermsOfService;
