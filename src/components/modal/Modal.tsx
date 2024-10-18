import React from 'react';

interface ModalProps {
  date: Date;
  availableTimes: string[];
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ date, availableTimes, onClose }) => {
  const hours = Array.from({ length: 24 }, (_, i) => `${i}:00`);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-lg">
        <h2 className="text-lg font-semibold mb-4">Available Times on {date.toDateString()}</h2>
        <div className="grid grid-cols-4 gap-4">
          {hours.map((hour) => (
            <div
              key={hour}
              className={`p-2 border rounded text-center ${
                availableTimes.includes(hour)
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-300 text-gray-500 opacity-50'
              }`}
            >
              {hour}
            </div>
          ))}
        </div>
        <button
          onClick={onClose}
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
