// PrivacyPolicy.tsx
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <main className="max-w-4xl mx-auto px-4 py-12 text-game-yellow font-body text-sm md:text-base leading-relaxed">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-6 font-pixel">Privacy Policy</h1>

        <p><strong>Published by:</strong> Lyon Games</p>
        <p><strong>Effective Date:</strong> May 15, 2025</p>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-white font-pixel mb-2">Data Collection & Use</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Identifiers:</strong> Name and email (only if the user signs in)</li>
            <li><strong>Gameplay Data:</strong> Anonymous progress and interaction data may be collected</li>
            <li><strong>Device Info:</strong> Device type, OS version, and crash data</li>
            <li><strong>Analytics:</strong> Screen views, session length, and general usage patterns</li>
            <li><strong>Purchase History:</strong> Managed entirely by the App Store or Google Play; we do not store payment info</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-white font-pixel mb-2">Third-Party Services</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Firebase Authentication</li>
            <li>Firebase Analytics</li>
            <li>Google Sign-In</li>
            <li>Apple Sign-In</li>
            <li>AdMob (for ads and monetization)</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-white font-pixel mb-2">Data Sharing</h2>
          <p>We do not sell user data. Data is only shared with the above providers for functionality and analytics.</p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-white font-pixel mb-2">User Controls</h2>
          <p>All apps are usable without signing in. Parental guidance is recommended, but our apps are appropriate for all ages. Users can request data removal using the contact form below.</p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-white font-pixel mb-2">Policy Updates</h2>
          <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with a revised date.</p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-white font-pixel mb-2">Contact</h2>
          <p>
            If you have questions about this Privacy Policy or would like to request data deletion, please{' '}
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

export default PrivacyPolicy;
