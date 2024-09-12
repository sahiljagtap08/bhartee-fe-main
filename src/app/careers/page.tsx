import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const CareersPage = () => {
  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto py-24 px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-center text-foreground">Careers at Bhartee AI</h1>
          <p className="text-xl text-center max-w-3xl mx-auto text-muted-foreground">
            Join our team and help shape the future of AI-powered recruitment solutions.
          </p>
        </div>

        <Separator className="my-8" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Why Work With Us?</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Innovative AI technology</li>
                <li>Collaborative work environment</li>
                <li>Competitive compensation and benefits</li>
                <li>Opportunities for professional growth</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Open Positions</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 text-muted-foreground">
                <li>
                  <h3 className="text-lg font-semibold text-foreground">AI Engineer</h3>
                  <p>Help develop and improve our AI algorithms.</p>
                </li>
                <li>
                  <h3 className="text-lg font-semibold text-foreground">Frontend Developer</h3>
                  <p>Create intuitive user interfaces for our platform.</p>
                </li>
                <li>
                  <h3 className="text-lg font-semibold text-foreground">Sales Representative</h3>
                  <p>Connect our solutions with businesses worldwide.</p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-8" />

        <Card>
          <CardHeader>
            <CardTitle>How to Apply</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-muted-foreground">
              To apply for any of our open positions, please send your resume and a cover letter to:
            </p>
            <Button variant="link" asChild>
              <a href="mailto:careers@bhartee.ai">careers@bhartee.ai</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CareersPage;
