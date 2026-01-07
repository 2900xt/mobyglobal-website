import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { formType, name, email, phone, organization, organizationType, fleetSize, deploymentArea, useCase, additionalInfo } = body;

    // Validate required fields
    if (!name || !email || !deploymentArea || !useCase) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Build email content based on form type
    const productType = formType === 'buoy' ? 'Buoy Network' : 'Moby Labs SUAM';
    const priceRange = formType === 'buoy' ? '$150 - $250 per buoy unit' : '$800 - $1,200 per SUAM system';

    const emailContent = `
New Quote Request - ${productType}

Contact Information:
━━━━━━━━━━━━━━━━━━━━
Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : ''}
${organization ? `Organization/Vessel: ${organization}` : ''}
${organizationType ? `Organization Type: ${organizationType}` : ''}

Project Details:
━━━━━━━━━━━━━━━━━━━━
Product: ${productType}
${fleetSize ? `Fleet Size/Coverage: ${fleetSize}` : ''}
Deployment Area: ${deploymentArea}
Primary Use Case: ${useCase}

${additionalInfo ? `Additional Information:\n${additionalInfo}` : ''}

Estimated Pricing: ${priceRange}

Feel free to reach out to the requester for further details. We will follow up promptly.
    `.trim();

    // Send email
    const data = await resend.emails.send({
      from: 'Moby Labs <info@mobylabs.org>', // You'll need to update this with your verified domain
      to: ['contact@mobylabs.org', email],
      replyTo: email,
      subject: `${productType} Quote Request from ${name}`,
      text: emailContent,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
