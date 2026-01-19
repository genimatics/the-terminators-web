import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { z } from 'zod';
import { contactFormSchema } from '@/validations/validations';

const submissions: any[] = [];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const validatedData = contactFormSchema.parse(body);

    const submission = {
      id: Date.now().toString(),
      ...validatedData,
      submittedAt: new Date(),
      status: 'pending' as const,
    };

    submissions.push(submission);

    return NextResponse.json({
      success: true,
      message: 'Quote request submitted successfully!',
      data: submission,
      submissionId: submission.id,
    }, { status: 201 });
  } catch (error: unknown) {
    console.error('Quote submission error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json({
        success: false,
        message: 'Validation failed',
        errors: error.issues.map(issue => ({
          path: issue.path,
          message: issue.message,
          code: issue.code,
        })),
      }, { status: 400 });
    }

    return NextResponse.json({
      success: false,
      message: 'Internal server error',
    }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({
    success: true,
    count: submissions.length,
    submissions,
  });
}
