import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendReservationEmail(
  email: string,
  data: {
    name: string;
    date: string;
    time: string;
    guests: number;
    tableName?: string;
    reservationId: string;
  }
) {
  try {
    const result = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'noreply@neprestro.com',
      to: email,
      subject: 'Reservation Confirmation - NepRestro',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h2 style="color: #333; margin-bottom: 20px;">Reservation Confirmed! 🎉</h2>
          
          <p style="font-size: 16px; color: #555; margin-bottom: 20px;">Hi ${data.name},</p>
          
          <p style="font-size: 16px; color: #555; margin-bottom: 20px;">Thank you for booking with us! Your reservation has been confirmed.</p>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #333; margin-top: 0;">Reservation Details</h3>
            <p style="margin: 10px 0;"><strong>Date:</strong> ${new Date(data.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <p style="margin: 10px 0;"><strong>Time:</strong> ${data.time}</p>
            <p style="margin: 10px 0;"><strong>Guests:</strong> ${data.guests} ${data.guests === 1 ? 'person' : 'people'}</p>
            ${data.tableName ? `<p style="margin: 10px 0;"><strong>Table:</strong> ${data.tableName}</p>` : ''}
            <p style="margin: 10px 0;"><strong>Confirmation ID:</strong> ${data.reservationId}</p>
          </div>
          
          <p style="font-size: 16px; color: #555; margin-bottom: 10px;">Please arrive 10 minutes early. If you need to modify or cancel your reservation, please contact us as soon as possible.</p>
          
          <p style="font-size: 16px; color: #555; margin-bottom: 20px;">We look forward to seeing you!</p>
          
          <p style="font-size: 12px; color: #999; margin-top: 30px; border-top: 1px solid #e0e0e0; padding-top: 20px;">
            NepRestro Restaurant<br/>
            Contact: info@neprestro.com<br/>
            This is an automated email. Please do not reply to this email.
          </p>
        </div>
      `,
    });

    return result;
  } catch (error) {
    console.error('Failed to send reservation confirmation email:', error);
    throw error;
  }
}

export async function sendReservationStatusChangeEmail(
  email: string,
  data: {
    name: string;
    status: string;
    date: string;
    time: string;
    guests: number;
    reservationId: string;
    reason?: string;
  }
) {
  const statusMessages: Record<string, { title: string; message: string; icon: string }> = {
    confirmed: {
      title: 'Reservation Confirmed ✅',
      message: 'Your reservation has been confirmed and a table has been assigned.',
      icon: '✅',
    },
    pending: {
      title: 'Reservation Pending ⏳',
      message: 'Your reservation is pending. We will confirm it as soon as a table becomes available.',
      icon: '⏳',
    },
    cancelled: {
      title: 'Reservation Cancelled ❌',
      message: 'Your reservation has been cancelled.',
      icon: '❌',
    },
    seated: {
      title: 'Reservation Seated 🎉',
      message: 'Your table is ready. Please enjoy your dining experience!',
      icon: '🎉',
    },
    completed: {
      title: 'Thank You for Dining! 👋',
      message: 'Thank you for dining with us. We hope you enjoyed your meal!',
      icon: '👋',
    },
  };

  const statusInfo = statusMessages[data.status] || statusMessages.pending;

  try {
    const result = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'noreply@neprestro.com',
      to: email,
      subject: `${statusInfo.title} - NepRestro`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h2 style="color: #333; margin-bottom: 20px;">${statusInfo.title}</h2>
          
          <p style="font-size: 16px; color: #555; margin-bottom: 20px;">Hi ${data.name},</p>
          
          <p style="font-size: 16px; color: #555; margin-bottom: 20px;">${statusInfo.message}</p>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #333; margin-top: 0;">Reservation Details</h3>
            <p style="margin: 10px 0;"><strong>Date:</strong> ${new Date(data.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <p style="margin: 10px 0;"><strong>Time:</strong> ${data.time}</p>
            <p style="margin: 10px 0;"><strong>Guests:</strong> ${data.guests} ${data.guests === 1 ? 'person' : 'people'}</p>
            <p style="margin: 10px 0;"><strong>Status:</strong> <span style="text-transform: capitalize; font-weight: bold;">${data.status}</span></p>
            <p style="margin: 10px 0;"><strong>Confirmation ID:</strong> ${data.reservationId}</p>
            ${data.reason ? `<p style="margin: 10px 0; color: #d32f2f;"><strong>Reason:</strong> ${data.reason}</p>` : ''}
          </div>
          
          <p style="font-size: 16px; color: #555; margin-bottom: 20px;">If you have any questions, please contact us immediately.</p>
          
          <p style="font-size: 12px; color: #999; margin-top: 30px; border-top: 1px solid #e0e0e0; padding-top: 20px;">
            NepRestro Restaurant<br/>
            Contact: info@neprestro.com<br/>
            This is an automated email. Please do not reply to this email.
          </p>
        </div>
      `,
    });

    return result;
  } catch (error) {
    console.error('Failed to send reservation status change email:', error);
    throw error;
  }
}
