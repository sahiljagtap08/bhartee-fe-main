import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PrivacyPolicyPage = () => {
  return (
    <div className="container py-16">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <p className="text-xl mb-8">
        This Privacy Policy describes how Bhartee AI collects, uses, and protects your personal information.
      </p>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>1. Information We Collect</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support. This may include your name, email address, and other personal information.
          </p>
        </CardContent>
      </Card>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>2. How We Use Your Information</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to comply with legal obligations.
          </p>
        </CardContent>
      </Card>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>3. Data Security</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage.
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>4. Contact Us</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <Button variant="link" asChild>
            <a href="mailto:privacy@bhartee.ai">privacy@bhartee.ai</a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default PrivacyPolicyPage;
