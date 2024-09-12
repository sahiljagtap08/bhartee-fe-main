import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const PrivacyPolicyPage = () => {
  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto py-24 px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-center text-foreground">Privacy Policy</h1>
          <p className="text-xl text-center max-w-3xl mx-auto text-muted-foreground">
            This Privacy Policy describes how Bhartee AI collects, uses, and protects your personal information.
          </p>
        </div>

        <Separator className="my-8" />

        <Card>
          <CardHeader>
            <CardTitle>1. Information We Collect</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support. This may include your name, email address, and other personal information.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>2. How We Use Your Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to comply with legal obligations.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>3. Data Security</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage.
            </p>
          </CardContent>
        </Card>

        <Separator className="my-8" />

        <Card>
          <CardHeader>
            <CardTitle>4. Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-muted-foreground">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <Button variant="link" asChild>
              <a href="mailto:privacy@bhartee.ai">privacy@bhartee.ai</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
