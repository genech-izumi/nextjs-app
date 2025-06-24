// app/_lib/holidays.ts

export interface Holiday {
  name: string;
  description: string;
}

export interface Holidays {
  [key: string]: Holiday;
}

const holidayNameParts1 = ['宇宙', '時空', '未来', '銀河', '星空', '銀河系', '銀河戦士', '銀河祭'];
const holidayNameParts2 = ['の日', '祭り', '記念日', '祝祭', 'フェスティバル', 'セレブレーション', 'の日々', 'イベント'];

const descriptions = [
  '宇宙の平和を願う日です。',
  '星の輝きを楽しむお祭りです。',
  '未来への希望を祝います。',
  '銀河の戦士に感謝する日。',
  '時空を超えた絆を確かめる日。',
  '銀河系の伝統行事です。',
  '星空の下で語り合う日。',
  '銀河祭を盛大に祝います。',
];

function createRandomHolidayName() {
  const part1 = holidayNameParts1[Math.floor(Math.random() * holidayNameParts1.length)];
  const part2 = holidayNameParts2[Math.floor(Math.random() * holidayNameParts2.length)];
  return part1 + part2;
}

function createRandomDescription() {
  return descriptions[Math.floor(Math.random() * descriptions.length)];
}

export function generateHolidays(year: number): Holidays {
  const holidays: Holidays = {};

  for (let month = 1; month <= 12; month++) {
    for (let day = 1; day <= 31; day++) {
      const date = new Date(year, month - 1, day);
      if (date.getMonth() + 1 !== month) continue;

      const key = `${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

      holidays[key] = {
        name: createRandomHolidayName(),
        description: createRandomDescription(),
      };
    }
  }

  return holidays;
}
