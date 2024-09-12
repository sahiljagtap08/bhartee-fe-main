import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const DocsPage = () => {
  return (
    <div className="container py-16">
      <h1 className="text-4xl font-bold mb-8">Bhartee AI Documentation</h1>
      <p className="text-xl mb-8">
        Welcome to the comprehensive documentation for Bhartee AI&apos;s AI-powered recruitment solutions.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Getting Started</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Bhartee AI offers cutting-edge AI technology to streamline your recruitment process. Here&apos;s how to get started:
            </p>
            <ol className="list-decimal list-inside space-y-2">
              <li>Sign up for a Bhartee AI account</li>
              <li>Set up your company profile</li>
              <li>Configure your ATS integration</li>
              <li>Start using AI-powered features</li>
            </ol>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Key Features</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>AI-powered candidate matching</li>
              <li>Automated resume screening</li>
              <li>Intelligent interview scheduling</li>
              <li>Predictive hiring analytics</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>ATS Integration Guide</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Bhartee AI seamlessly integrates with popular Applicant Tracking Systems. Follow these steps to set up your integration:
            </p>
            <ol className="list-decimal list-inside space-y-2">
              <li>Navigate to the Integrations section in your Bhartee AI dashboard</li>
              <li>Select your ATS from the list of supported systems</li>
              <li>Follow the prompts to authenticate and connect your ATS</li>
              <li>Configure data synchronization settings</li>
            </ol>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>API Reference</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              For developers looking to integrate Bhartee AI into their own applications, we offer a comprehensive API.
            </p>
            <Button variant="link" asChild>
              <a href="/api-docs">View API Documentation</a>
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Support</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            If you need assistance or have any questions, please don&apos;t hesitate to contact our support team.
          </p>
          <Button variant="link" asChild>
            <a href="mailto:support@bhartee.ai">support@bhartee.ai</a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default DocsPage;
