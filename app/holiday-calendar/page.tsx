'use client';
import { useState, useEffect } from 'react';

type Holiday = {
  date: string;    // yyyy-mm-dd形式
  name: string;
};

// ランダム祝日名の候補
const holidayNames = [
  '時空感謝の日',
  '光の祭典',
  '夢追い記念日',
  '銀河散歩の日',
  '時間逆流祭',
  '無限跳躍の日',
  '星座連盟記念日',
  '永遠の夜明け',
  '未来探訪の日',
  '時間の扉の日',
  // 好きな名前を増やしてね
];

// 1年分の日付配列を作る関数（2025年）
function generateDates(year: number) {
  const dates = [];
  const start = new Date(year, 0, 1); // 1月1日
  for (let i = 0; i < 365; i++) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    const yyyy = d.getFullYear();
    const mm = (d.getMonth() + 1).toString().padStart(2, '0');
    const dd = d.getDate().toString().padStart(2, '0');
    dates.push(`${yyyy}-${mm}-${dd}`);
  }
  return dates;
}

// ランダムに祝日名を付ける
function generateRandomHolidays(year: number): Holiday[] {
  const dates = generateDates(year);
  return dates.map(date => {
    const name = holidayNames[Math.floor(Math.random() * holidayNames.length)];
    return { date, name };
  });
}

export default function Calendar() {
  const [holidays, setHolidays] = useState<Holiday[]>([]);

  useEffect(() => {
    setHolidays(generateRandomHolidays(2025));
  }, []);

  return (
    <div>
      <h1>時空の祝日カレンダー（架空の暦）2025年</h1>
      <ul>
        {holidays.map(h => (
          <li key={h.date}>
            <strong>{h.date}</strong>: {h.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
