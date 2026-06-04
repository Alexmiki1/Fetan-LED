import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const SALES_EMAIL = "Alexxissmiki@gmail.com";
const FROM_EMAIL = process.env.QUOTE_FROM_EMAIL || "onboarding@resend.dev";
const BRAND_NAME = "Fetanled";

type QuotePayload = {
  serviceType: "sales" | "rentals";
  name: string;
  company: string;
  email: string;
  phone?: string;
  eventDates?: string;
  location?: string;
  venueEnvironment?: string;
  screenWidth?: string;
  screenHeight?: string;
  numberOfScreens?: string;
  contentType?: string;
  pixelPitchPreference?: string;
  closestViewerDistance?: string;
  budgetRange?: string;
  targetCompletionDate?: string;
  additionalNotes?: string;
  heardAbout?: string;
};

function safe(value: string | string[] | undefined | null, fallback = "Not provided") {
  if (!value || (Array.isArray(value) && value.length === 0)) return fallback;
  if (Array.isArray(value)) return value.join(", ");
  return value;
}

function buildAdminHtml(body: QuotePayload) {
  const {
    name,
    company,
    email,
    phone,
    serviceType,
    eventDates,
    location,
    venueEnvironment,
    screenWidth,
    screenHeight,
    numberOfScreens,
    contentType,
    pixelPitchPreference,
    closestViewerDistance,
    budgetRange,
    targetCompletionDate,
    additionalNotes,
    heardAbout,
  } = body;

  const projectTypeLabel = serviceType === "rentals" ? "Rental" : "Installation";
  const eventDatesRow =
    serviceType === "rentals" ? safe(eventDates) : "N/A";
  const screenDimensionsRow = `${safe(screenWidth)} x ${safe(screenHeight)}`;

  const labelStyle =
    "padding: 4px 0; font-size: 12px; letter-spacing: 0.16em; text-transform: uppercase; color: #C8A96E;";
  const valueStyle = "font-size: 14px; color: #ffffff;";

  const row = (label: string, value: string | undefined | null) => `
    <tr>
      <td style="${labelStyle}">${label}</td>
    </tr>
    <tr>
      <td style="${valueStyle}; padding-bottom: 12px;">${safe(value)}</td>
    </tr>
  `;

  const html = `
  <html>
    <body style="margin:0; padding:0; background-color:#060606; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color:#ffffff;">
      <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background-color:#060606; padding:32px 16px;">
        <tr>
          <td align="center">
            <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="max-width:640px; border:1px solid #1b1b1b; background:radial-gradient(circle at top, #151515 0, #060606 48%, #000000 100%); padding:32px 28px 28px; border-radius:8px;">
              <tr>
                <td style="padding-bottom:24px; border-bottom:1px solid #202020;">
                  <div style="font-size:11px; letter-spacing:0.32em; text-transform:uppercase; color:#C8A96E; margin-bottom:8px;">
                    New Quote Request
                  </div>
                  <div style="font-size:24px; font-weight:600; text-transform:uppercase; letter-spacing:0.12em;">
                    ${BRAND_NAME} · LED Display Solutions
                  </div>
                  <div style="margin-top:8px; font-size:13px; color:#b3b3b3;">
                    Submitted from fetanled.com contact form.
                  </div>
                </td>
              </tr>

              <tr>
                <td style="padding-top:24px;">
                  <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                    ${row("Full Name", name)}
                    ${row("Company / Organisation", company)}
                    ${row(
                      "Project Type (Installation or Rental)",
                      projectTypeLabel
                    )}
                    ${row("Email Address", email)}
                    ${row("Phone", phone)}
                    ${row("Event Dates (if rental)", eventDatesRow)}
                    ${row("Location", location)}
                    ${row("Venue / Environment", venueEnvironment)}
                    ${row(
                      "Screen Dimensions (Width x Height)",
                      screenDimensionsRow
                    )}
                    ${row("Number of Screens", numberOfScreens)}
                    ${row("Content Type", contentType)}
                    ${row("Pixel Pitch Preference", pixelPitchPreference)}
                    ${row(
                      "Closest Viewer Distance",
                      closestViewerDistance
                    )}
                    ${row("Budget Range", budgetRange)}
                    ${row(
                      "Target Completion Date",
                      targetCompletionDate
                    )}
                    ${row("Additional Notes", additionalNotes)}
                    ${row("How Did You Hear About Us", heardAbout)}
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>
  `;

  return html;
}

function buildCustomerHtml(body: QuotePayload) {
  const { name, company } = body;

  const html = `
  <html>
    <body style="margin:0; padding:0; background-color:#060606; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color:#ffffff;">
      <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background-color:#060606; padding:32px 16px;">
        <tr>
          <td align="center">
            <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="max-width:620px; border:1px solid #1b1b1b; background:radial-gradient(circle at top, #151515 0, #060606 48%, #000000 100%); padding:32px 28px 28px; border-radius:8px;">
              <tr>
                <td>
                  <div style="font-size:11px; letter-spacing:0.32em; text-transform:uppercase; color:#C8A96E; margin-bottom:8px;">
                    Quote Request Received
                  </div>
                  <div style="font-size:22px; font-weight:600; text-transform:uppercase; letter-spacing:0.16em; margin-bottom:16px;">
                    Thank You${name ? `, ${name}` : ""}.
                  </div>
                  <p style="font-size:14px; color:#e0e0e0; line-height:1.7; margin:0 0 12px;">
                    We’ve received your quote request for LED display solutions at <strong>${BRAND_NAME}</strong>${
                      company ? ` on behalf of <strong>${company}</strong>` : ""
                    }.
                  </p>
                  <p style="font-size:14px; color:#cccccc; line-height:1.7; margin:0 0 12px;">
                    A member of our team will review your project details and get back to you within <strong>4 hours</strong>
                    with next steps and any clarifying questions.
                  </p>
                  <p style="font-size:13px; color:#999999; line-height:1.6; margin:16px 0 0;">
                    If anything changes or you need to share plans, drawings, or content references, you can simply reply to this email.
                  </p>
                  <p style="font-size:13px; color:#777777; line-height:1.6; margin:20px 0 0;">
                    — The ${BRAND_NAME} Team
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>
  `;

  return html;
}

export async function POST(req: Request) {
  console.log("🚀 QUOTE API HIT");

  if (!process.env.RESEND_API_KEY) {
    console.error("❌ Missing RESEND_API_KEY");

    return new Response(
      JSON.stringify({
        error: "Missing RESEND_API_KEY. Set it in .env.local.",
      }),
      { status: 500 }
    );
  }

  try {
    const body = (await req.json()) as Partial<QuotePayload>;

    console.log("📩 Received Payload:", body);

    if (!body.name || !body.email || !body.company) {
      return new Response(
        JSON.stringify({
          error: "Name, Email, and Company are required.",
        }),
        { status: 400 }
      );
    }

    const payload: QuotePayload = {
      serviceType: body.serviceType === "rentals" ? "rentals" : "sales",
      name: body.name,
      company: body.company,
      email: body.email,
      phone: body.phone ?? "",
      eventDates: body.eventDates ?? "",
      location: body.location ?? "",
      venueEnvironment: body.venueEnvironment ?? "",
      screenWidth: body.screenWidth ?? "",
      screenHeight: body.screenHeight ?? "",
      numberOfScreens: body.numberOfScreens ?? "",
      contentType: body.contentType ?? "",
      pixelPitchPreference: body.pixelPitchPreference ?? "",
      closestViewerDistance: body.closestViewerDistance ?? "",
      budgetRange: body.budgetRange ?? "",
      targetCompletionDate: body.targetCompletionDate ?? "",
      additionalNotes: body.additionalNotes ?? "",
      heardAbout: body.heardAbout ?? "",
    };

    const projectTypeLabel =
      payload.serviceType === "rentals" ? "Rental" : "Installation";

    const subject = `New Quote Request — ${payload.company} — ${projectTypeLabel}`;

    const [adminResult, customerResult] = await Promise.allSettled([
      resend.emails.send({
        from: `${BRAND_NAME} Quotes <${FROM_EMAIL}>`,
        to: SALES_EMAIL,
        replyTo: payload.email,
        subject,
        html: buildAdminHtml(payload),
      }),

      resend.emails.send({
        from: `${BRAND_NAME} Quotes <${FROM_EMAIL}>`,
        to: payload.email,
        subject: `We’ve received your quote request — ${BRAND_NAME}`,
        html: buildCustomerHtml(payload),
      }),
    ]);

    console.log("📨 ADMIN RESULT:", adminResult);
    console.log("📨 CUSTOMER RESULT:", customerResult);

    if (adminResult.status === "rejected") {
      console.error(
        "❌ Failed to send admin quote email:",
        adminResult.reason
      );

      return new Response(
        JSON.stringify({
          error: "Unable to send quote email. Please try again shortly.",
        }),
        { status: 500 }
      );
    }

    if (customerResult.status === "rejected") {
      console.error(
        "⚠️ Failed to send customer confirmation email:",
        customerResult.reason
      );
    }

    console.log("✅ Email process completed");

    return new Response(
      JSON.stringify({
        ok: true,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Error handling quote request:", error);

    return new Response(
      JSON.stringify({
        error:
          "Unexpected error while submitting quote. Please try again.",
      }),
      { status: 500 }
    );
  }
}


