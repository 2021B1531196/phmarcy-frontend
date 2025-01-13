import React, { useState } from 'react';
import { Calendar, Clock } from 'lucide-react';

const availableTests = [
  { id: '1', name: 'Complete Blood Count (CBC)', price: 50, duration: '30 mins' },
  { id: '2', name: 'Lipid Profile', price: 75, duration: '45 mins' },
  { id: '3', name: 'Diabetes Screening', price: 100, duration: '1 hour' },
  { id: '4', name: 'Thyroid Function Test', price: 120, duration: '45 mins' },
];

const timeSlots = [
  '09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM', '04:00 PM'
];

export default function TestBooking() {
  const [selectedTest, setSelectedTest] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking submission
    console.log({ selectedTest, selectedDate, selectedTime });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Book Your Test</h1>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Test Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Test
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {availableTests.map((test) => (
              <div
                key={test.id}
                className={`border rounded-lg p-4 cursor-pointer ${
                  selectedTest === test.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-blue-300'
                }`}
                onClick={() => setSelectedTest(test.id)}
              >
                <h3 className="font-medium">{test.name}</h3>
                <div className="mt-2 text-sm text-gray-500">
                  <p>Price: ${test.price}</p>
                  <p>Duration: {test.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Date Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Date
          </label>
          <div className="relative">
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              min={new Date().toISOString().split('T')[0]}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md"
            />
            <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        {/* Time Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Time Slot
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {timeSlots.map((time) => (
              <div
                key={time}
                className={`flex items-center justify-center px-4 py-2 border rounded-md cursor-pointer ${
                  selectedTime === time
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-blue-300'
                }`}
                onClick={() => setSelectedTime(time)}
              >
                <Clock className="h-4 w-4 mr-2 text-gray-400" />
                <span>{time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={!selectedTest || !selectedDate || !selectedTime}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Confirm Booking
          </button>
        </div>
      </form>
    </div>
  );
}