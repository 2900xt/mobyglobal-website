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
    `.trim();

    const emailContentConfirm = `
Dear ${name},

Thank you for your interest in our ${productType}. We have received your quote request and will get back to you shortly.
    `.trim();

    // Send email to Moby Labs contact address
    const data = await resend.emails.send({
      from: 'Moby Labs <info@mobylabs.org>', // You'll need to update this with your verified domain
      to: ['contact@mobylabs.org'],
      replyTo: email,
      subject: `${productType} Quote Request from ${name}`,
      text: emailContent,
    });

    // Send confirmation email to user
    const data_confirm = await resend.emails.send({
      from: 'Moby Labs <info@mobylabs.org>', // You'll need to update this with your verified domain
      to: [email],
      replyTo: 'contact@mobylabs.org',
      subject: `${productType} Quote Request from ${name}`,
      text: emailContentConfirm,
    });

    return NextResponse.json({ success: true, data, data_confirm });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
