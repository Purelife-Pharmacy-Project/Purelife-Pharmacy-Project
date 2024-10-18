import { google } from 'googleapis';
import type { NextApiRequest, NextApiResponse } from 'next';

// Create a client to access the Google Calendar API
const calendar = google.calendar('v3');

const auth = new google.auth.GoogleAuth({
  credentials: {
    // Your service account credentials
    client_email: process.env.NEXT_GOOGLE_CLIENT_EMAIL,
    private_key: process.env.NEXT_GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  },
  scopes: ['https://www.googleapis.com/auth/calendar.readonly'],
});

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { doctorId } = req.query;

    const client = await auth.getClient();

    // Make the request to Google Calendar API to fetch available time slots
    const { data } = await calendar.events.list({
      auth: client,
      calendarId: doctorId as string,  // Doctor's Calendar ID
      timeMin: new Date().toISOString(),
      timeMax: new Date(new Date().setMonth(new Date().getMonth() + 1)).toISOString(),
      singleEvents: true,
      orderBy: 'startTime',
    });

    const availableEvents = data.items?.map((event: any) => ({
      start: event.start?.dateTime || event.start?.date,
      end: event.end?.dateTime || event.end?.date,
      summary: event.summary,
    }));

    res.status(200).json({ availableEvents });
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ error: 'Unable to fetch calendar events' });
  }
}

export default handler;
