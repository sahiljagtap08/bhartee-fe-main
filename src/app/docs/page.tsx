import React from 'react';

const DocsPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Bhartee AI Documentation</h1>
      <p className="text-xl mb-8">
        Welcome to the comprehensive documentation for Bhartee AI's AI-powered recruitment solutions.
      </p>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Getting Started</h2>
        <p className="mb-4">
          Bhartee AI offers cutting-edge AI technology to streamline your recruitment process. Here's how to get started:
        </p>
        <ol className="list-decimal list-inside space-y-2">
          <li>Sign up for a Bhartee AI account</li>
          <li>Set up your company profile</li>
          <li>Configure your ATS integration</li>
          <li>Start using AI-powered features</li>
        </ol>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>AI-powered candidate matching</li>
          <li>Automated resume screening</li>
          <li>Intelligent interview scheduling</li>
          <li>Predictive hiring analytics</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">ATS Integration Guide</h2>
        <p className="mb-4">
          Bhartee AI seamlessly integrates with popular Applicant Tracking Systems. Follow these steps to set up your integration:
        </p>
        <ol className="list-decimal list-inside space-y-2">
          <li>Navigate to the Integrations section in your Bhartee AI dashboard</li>
          <li>Select your ATS from the list of supported systems</li>
          <li>Follow the prompts to authenticate and connect your ATS</li>
          <li>Configure data synchronization settings</li>
        </ol>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">API Reference</h2>
        <p className="mb-4">
          For developers looking to integrate Bhartee AI into their own applications, we offer a comprehensive API. Visit our <a href="/api-docs" className="text-blue-600 hover:underline">API documentation</a> for detailed information on endpoints, authentication, and usage examples.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">Support</h2>
        <p className="mb-4">
          If you need assistance or have any questions, please don't hesitate to contact our support team at <a href="mailto:support@bhartee.ai" className="text-blue-600 hover:underline">support@bhartee.ai</a>.
        </p>
      </section>
    </div>
  );
};

export default DocsPage;
