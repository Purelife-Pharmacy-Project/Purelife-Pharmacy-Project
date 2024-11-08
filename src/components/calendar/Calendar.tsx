import React, { useState } from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Modal from '../modal/Modal';
const localizer = momentLocalizer(moment);

interface CalendarProps {
  doctor: any
}

interface Event {
  start: Date;
  end: Date;
  summary: string;
}

const CalendarComponent: React.FC<CalendarProps> = ({doctor}) => {
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showModal, setShowModal] = useState(false);
  const doctorAppointments = ['20', '0', '15', '12', '22', '0', '20', '30', '2', '12', '22', '14', '20', '30', '15', '12', '22', '34', '0', '30', '15', '12', '22', '34', '20', '30', '15', '12', '22', '34',]
  const availableDays = [1, 3, 5, 10, 15, 20, 25];
  const availableTimes = ['0:00', '1:00', '2:00']

  const isDateDisabled = (date: Date) => {
    const dayOfMonth = date.getDate(); // Get day of the month
    return !availableDays.includes(dayOfMonth); // Disable if not in availableDays
  };

  const handleSelectDay = (slotInfo: any) => {
  const selectedDay = slotInfo.start.getDate(); // Get the selected day
  if (!availableDays.includes(selectedDay)) {
    return; // If the selected date is disabled, do nothing
  }

  setSelectedDate(slotInfo.start); // Proceed if the date is available
  setShowModal(true);
  };
  const currentMonth = new Date().getMonth(); // Get the current month (0-indexed, Jan = 0, Dec = 11)

// Function to check if the day belongs to the current month
const isCurrentMonth = (date: Date) => {
  return date.getMonth() === currentMonth; // Compare month of date with current month
};
  const CustomDateHeader = ({ label, date }: any) => {
    const dayOfWeek = new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(date); // Get day of the week
    const month = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(date); // Get day of the week
    const dayOfMonth = new Intl.DateTimeFormat('en-US', { day: 'numeric' }).format(date);
    const appointmentIndex = parseInt(dayOfMonth) % doctorAppointments.length;
    const appointmentCount = doctorAppointments[appointmentIndex];
    return (
      <div className={`flex flex-col text-[0.9rem] text-left`}>
        <span className='ml-[10px] mt-[10px] text-sm font-medium'>{dayOfWeek}</span> {/* Day of the week (e.g., Mon) */}
        <span className='ml-[10px] text-lg font-bold'>{month}{' '}{label}</span>
        <span className='ml-[10px] text-sm font-light'>{appointmentCount}</span>
        <span className='ml-[10px] text-sm font-light'>Appts</span>
      </div>
    );};
    const customDayPropGetter = (date: Date) => {
      const disabled = isDateDisabled(date); // Check if the date is disabled
    
      return {
        style: {
          backgroundColor: disabled ? '#E7E7E7' : 'white', // Gray for disabled, white for available
          color: disabled ? '#b0b0b0' : '#1E272F', // Light gray text for disabled, black for available
          cursor: disabled ? 'not-allowed' : 'pointer', // Disabled cursor for unavailable dates
          border: '0.5px solid #E7E7E7',
          margin: '0px 10px 10px 0px',
          padding: '50px 15px 50px 15px',
        },
        disabled, // Optionally pass disabled as a class or prop if you want to control behavior elsewhere
      };
  };
moment.updateLocale("en", {
  week: {
    dow: 1, // Monday is the first day of the week (0 is Sunday)
  },
});
  return (
    <>
    <BigCalendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 550 }}
      defaultView="month"
      toolbar={false}
      selectable
      className='cursor-pointer'
      onSelectSlot={handleSelectDay}
      dayPropGetter={customDayPropGetter}
      culture="en"
      formats={{ weekdayFormat: 'dddd' }}
      components={{
        month: {
          dateHeader: CustomDateHeader,
          header: () => null,
        },
      }}
    />

      {showModal && selectedDate && (
        <Modal
          date={selectedDate} 
          availableTimes={availableTimes}
          doctor={doctor}
          onClose={() => setShowModal(false)} 
        />
      )}
      <style>
        {
          `
          .rbc-day-bg {
            padding: 10px;
            border-radius: 5px;
          }

          .cursor-pointer {
            cursor: pointer;
          }

          .custom-calendar {
            display: flex;
            flex-wrap: wrap; /* Allow wrapping */
            justify-content: space-between; /* Space out days */
          }
          .rbc-month-view {
            border: none !important;
            display: flex;
            flex-wrap: wrap;
          }

          .rbc-month-view .rbc-day-slot {
            width: 25%; /* Four days per row */
          }

          /* Remove borders between the rows (weeks) */
          .rbc-month-row {
            border: none !important;
          }
          /* Remove any top margin, padding, or border that might be causing a line */
          .rbc-header, .rbc-month-view {
            border: none !important;
            margin: 0 !important;
            padding: 0 !important;
          }

          /* Ensure the entire calendar has no top border or padding */
          .rbc-month-view {
            border-top: none !important;
          }

          /* Also remove any leftover border from the first row (week row) */
          .rbc-month-row {
            border-top: none !important;
          }

          /* Remove any extra spacing on the calendar container itself */
          .rbc-calendar {
            margin-top: 0 !important;
            padding-top: 0 !important;
          }
          `
        }
      </style>
    </>
  );
};

export default CalendarComponent