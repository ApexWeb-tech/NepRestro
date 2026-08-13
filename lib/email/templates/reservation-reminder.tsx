export function ReservationReminder({
  name,
  date,
  time,
  guests,
  reservationId,
}: {
  name: string;
  date: string;
  time: string;
  guests: number;
  reservationId: string;
}) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
      <h2 style="color: #333; margin-bottom: 20px;">Reservation Reminder 🔔</h2>
      
      <p style="font-size: 16px; color: #555; margin-bottom: 20px;">Hi ${name},</p>
      
      <p style="font-size: 16px; color: #555; margin-bottom: 20px;">This is a reminder about your upcoming reservation at NepRestro!</p>
      
      <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <h3 style="color: #333; margin-top: 0;">Your Reservation</h3>
        <p style="margin: 10px 0;"><strong>Date:</strong> ${new Date(date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
        <p style="margin: 10px 0;"><strong>Time:</strong> ${time}</p>
        <p style="margin: 10px 0;"><strong>Guests:</strong> ${guests} ${guests === 1 ? 'person' : 'people'}</p>
        <p style="margin: 10px 0;"><strong>Confirmation ID:</strong> ${reservationId}</p>
      </div>
      
      <p style="font-size: 16px; color: #555; margin-bottom: 10px;">Please remember to arrive 10 minutes early. If you need to cancel or modify your reservation, please let us know as soon as possible.</p>
      
      <p style="font-size: 16px; color: #555; margin-bottom: 20px;">We look forward to welcoming you!</p>
      
      <p style="font-size: 12px; color: #999; margin-top: 30px; border-top: 1px solid #e0e0e0; padding-top: 20px;">
        NepRestro Restaurant<br/>
        Contact: info@neprestro.com<br/>
        This is an automated email. Please do not reply to this email.
      </p>
    </div>
  `;
}
