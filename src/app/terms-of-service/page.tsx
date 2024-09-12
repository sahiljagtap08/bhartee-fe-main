import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const TermsOfServicePage = () => {
  return (
    <div className="container py-16">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      <p className="text-xl mb-8">
        Please read these terms of service carefully before using Bhartee AI&apos;s services.
      </p>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>1. Acceptance of Terms</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            By accessing or using Bhartee AI&apos;s services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our services.
          </p>
        </CardContent>
      </Card>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>2. Use of Services</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            You agree to use Bhartee AI&apos;s services only for lawful purposes and in accordance with these Terms of Service. You are prohibited from violating or attempting to violate the security of the Service.
          </p>
        </CardContent>
      </Card>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>3. Intellectual Property</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            The Service and its original content, features, and functionality are owned by Bhartee AI and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>4. Contact Us</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            If you have any questions about these Terms of Service, please contact us at:
          </p>
          <Button variant="link" asChild>
            <a href="mailto:legal@bhartee.ai">legal@bhartee.ai</a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default TermsOfServicePage;
