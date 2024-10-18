import React, { useState, useEffect } from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import axios from 'axios';
import Modal from '../modal/Modal';

const localizer = momentLocalizer(moment);

interface Event {
  start: Date;
  end: Date;
  summary: string;
}

const CalendarComponent: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [availableTimes, setAvailableTimes] = useState<string[]>([]);

  useEffect(() => {
    // Fetch available dates from Google Calendar API
    const fetchEvents = async () => {
      try {
        const response = await axios.get('/api/calendar?doctorId=primary');
        setEvents(response.data.availableEvents.map((event: any) => ({
          start: new Date(event.start),
          end: new Date(event.end),
          summary: event.summary,
        })));
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  const handleSelectDay = (slotInfo: any) => {
    setSelectedDate(slotInfo.start);
    setShowModal(true);

    // Fetch available times for the selected date
    const fetchAvailableTimes = async (date: Date) => {
      try {
        const response = await axios.get(`/api/calendar/times?doctorId=primary&date=${date.toISOString()}`);
        setAvailableTimes(response.data.times);
      } catch (error) {
        console.error('Error fetching available times:', error);
      }
    };

    fetchAvailableTimes(slotInfo.start);
  };

  return (
    <>
      <BigCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        selectable
        onSelectSlot={handleSelectDay}
        defaultView="month"
      />

      {showModal && selectedDate && (
        <Modal
          date={selectedDate} 
          availableTimes={availableTimes} 
          onClose={() => setShowModal(false)} 
        />
      )}
    </>
  );
};

export default CalendarComponent;
