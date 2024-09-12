import React from 'react';

const CareersPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Careers at Bhartee AI</h1>
      <p className="text-xl mb-8">
        Join our team and help shape the future of AI-powered recruitment solutions.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Why Work With Us?</h2>
          <ul className="list-disc list-inside">
            <li>Innovative AI technology</li>
            <li>Collaborative work environment</li>
            <li>Competitive compensation and benefits</li>
            <li>Opportunities for professional growth</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Open Positions</h2>
          <ul className="space-y-4">
            <li>
              <h3 className="text-xl font-medium">AI Engineer</h3>
              <p>Help develop and improve our AI algorithms.</p>
            </li>
            <li>
              <h3 className="text-xl font-medium">Frontend Developer</h3>
              <p>Create intuitive user interfaces for our platform.</p>
            </li>
            <li>
              <h3 className="text-xl font-medium">Sales Representative</h3>
              <p>Connect our solutions with businesses worldwide.</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">How to Apply</h2>
        <p className="mb-4">
          To apply for any of our open positions, please send your resume and a cover letter to:
        </p>
        <a href="mailto:careers@bhartee.ai" className="text-blue-600 hover:underline">
          careers@bhartee.ai
        </a>
      </div>
    </div>
  );
};

export default CareersPage;
