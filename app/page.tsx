// app/page.tsx

'use client';

import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { generateHolidays } from './_lib/holidays';

export default function Home() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const holidays = generateHolidays(selectedDate.getFullYear());

  const key = `${(selectedDate.getMonth() + 1).toString().padStart(2, '0')}-${selectedDate.getDate().toString().padStart(2, '0')}`;
  const holiday = holidays[key];

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-6">🪐 時空の祝日カレンダー</h1>

      <div className="bg-white text-black rounded-xl shadow-lg p-6 max-w-md w-full text-center mb-6">
        <h2 className="text-xl font-semibold">{holiday.name}</h2>
        <p className="mt-2">{holiday.description}</p>
        <p className="mt-4 text-sm text-gray-600">
          選択日: {selectedDate.toLocaleDateString()}
        </p>
      </div>

      <DatePicker
        selected={selectedDate}
        onChange={(date: Date) => setSelectedDate(date)}
        className="text-black px-4 py-2 rounded-lg shadow bg-white"
        dateFormat="yyyy/MM/dd"
      />
    </main>
  );
}
