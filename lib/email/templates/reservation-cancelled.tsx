export interface ReservationStatusChangeProps {
  name: string;
  status: string;
  date: string;
  time: string;
  guests: number;
  reservationId: string;
  reason?: string;
}

export function ReservationStatusChange({
  name,
  status,
  date,
  time,
  guests,
  reservationId,
  reason,
}: ReservationStatusChangeProps) {
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

  const statusInfo = statusMessages[status] || statusMessages.pending;

  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
      <h2 style="color: #333; margin-bottom: 20px;">${statusInfo.title}</h2>
      
      <p style="font-size: 16px; color: #555; margin-bottom: 20px;">Hi ${name},</p>
      
      <p style="font-size: 16px; color: #555; margin-bottom: 20px;">${statusInfo.message}</p>
      
      <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <h3 style="color: #333; margin-top: 0;">Reservation Details</h3>
        <p style="margin: 10px 0;"><strong>Date:</strong> ${new Date(date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
        <p style="margin: 10px 0;"><strong>Time:</strong> ${time}</p>
        <p style="margin: 10px 0;"><strong>Guests:</strong> ${guests} ${guests === 1 ? 'person' : 'people'}</p>
        <p style="margin: 10px 0;"><strong>Status:</strong> <span style="text-transform: capitalize; font-weight: bold;">${status}</span></p>
        <p style="margin: 10px 0;"><strong>Confirmation ID:</strong> ${reservationId}</p>
        ${reason ? `<p style="margin: 10px 0; color: #d32f2f;"><strong>Reason:</strong> ${reason}</p>` : ''}
      </div>
      
      <p style="font-size: 16px; color: #555; margin-bottom: 20px;">If you have any questions, please contact us immediately.</p>
      
      <p style="font-size: 12px; color: #999; margin-top: 30px; border-top: 1px solid #e0e0e0; padding-top: 20px;">
        NepRestro Restaurant<br/>
        Contact: info@neprestro.com<br/>
        This is an automated email. Please do not reply to this email.
      </p>
    </div>
  `;
}
