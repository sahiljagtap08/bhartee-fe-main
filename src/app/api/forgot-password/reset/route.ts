import bcrypt from "bcrypt";
import { prisma } from "@/libs/prismaDB";
import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { sendEmail } from "@/libs/email";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { email } = body;

  if (!email) {
    return new NextResponse("Missing Fields", { status: 400 });
  }

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    throw new Error("Email does not exists");
  }

  const resetToken = crypto.randomBytes(20).toString("hex");

  const passwordResetTokenExp = new Date();
  passwordResetTokenExp.setHours(passwordResetTokenExp.getHours() + 1);

  await prisma.user.update({
    where: {
      email,
    },
    data: {
      passwordResetToken: resetToken,
      passwordResetTokenExp,
    },
  });

  const resetURL = `${process.env.SITE_URL}/auth/reset-password/${resetToken}`;

  try {
    await sendEmail({
      to: email,
      subject: "Reset your password",
      html: ` 
      <div>
        <h1>You requested a password reset</h1>
        <p>Click the link below to reset your password</p>
        <a href="${resetURL}" target="_blank">Reset Password</a>
      </div>
      `,
    });

    return NextResponse.json("An email has been sent to your email", {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json("An error has occurred. Please try again!", {
      status: 500,
    });
  }
}
