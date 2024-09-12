import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const AboutPage = () => {
  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto py-24 px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-center text-foreground">About Bhartee AI</h1>
          <p className="text-xl text-center max-w-3xl mx-auto text-muted-foreground">
            Bhartee AI is a student-run startup revolutionizing the recruitment industry with AI-powered solutions.
          </p>
        </div>

        <Separator className="my-8" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Our Founders</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Bhartee AI was founded by passionate students from George Mason University and Virginia Commonwealth University. Our diverse team brings together expertise in AI, software engineering, and business to create innovative recruitment solutions.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Student-Run Innovation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                As a student-run startup, we bring fresh perspectives and cutting-edge ideas to the recruitment industry. Our team is dedicated to leveraging the power of AI to transform how companies find and hire talent.
              </p>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-8" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center items-center">
          <Image
            src="/images/Header_logo_George-Mason-University-2024_0.png"
            alt="George Mason University Logo"
            width={200}
            height={100}
            className="object-contain max-w-full transition-opacity hover:opacity-80"
          />
          <Image
            src="/images/vcu-seal--gold.svg"
            alt="Virginia Commonwealth University Logo"
            width={200}
            height={100}
            className="object-contain max-w-full transition-opacity hover:opacity-80"
          />
        </div>

        <Separator className="my-8" />

        <Card>
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              At Bhartee AI, our mission is to revolutionize the recruitment process by harnessing the power of artificial intelligence. We aim to create more efficient, fair, and effective hiring practices that benefit both employers and job seekers.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AboutPage;
