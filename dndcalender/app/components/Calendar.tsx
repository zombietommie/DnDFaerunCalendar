"use client";

import { useState, useEffect } from "react";
import { FAERUN_CALENDAR } from "./../lib/calendarData"; // Adjust the import path as necessary

export default function Calendar() {
  // State for the current date
  const [currentDate, setCurrentDate] = useState({
    year: FAERUN_CALENDAR.year,
    month: FAERUN_CALENDAR.months[0].name,
    day: 1,
  });

  // Logic for advancing the date
  const handleNextDay = () => {
    const currentMonth = FAERUN_CALENDAR.months.find(
      (month) => month.name === currentDate.month
    );
    if (!currentMonth) {
      console.error("Current month not found");
      return;
    }
    let nextDay = currentDate.day + 1;

    if (nextDay > currentMonth.days) {
      nextDay = 1;
      const currentMonthIndex = FAERUN_CALENDAR.months.findIndex(
        (month) => month.name === currentDate.month
      );
      const nextMonthIndex =
        (currentMonthIndex + 1) % FAERUN_CALENDAR.months.length;
      setCurrentDate({
        year: FAERUN_CALENDAR.year,
        month: FAERUN_CALENDAR.months[nextMonthIndex].name,
        day: nextDay,
      });
    } else {
      setCurrentDate((prev) => ({ ...prev, day: nextDay }));
    }
  };

  // On component mount, try to load the date from localStorage
  useEffect(() => {
    const savedDate = localStorage.getItem("faerunDate");
    if (savedDate) {
      try {
        setCurrentDate(JSON.parse(savedDate));
      } catch (e) {
        console.error("Failed to parse date from localStorage...", e);
      }
    }
  }, []); // This runs only once when the component mounts

  //Use useEffect to load/save the date from localStorage
  useEffect(() => {
    localStorage.setItem("faerunDate", JSON.stringify(currentDate));
  }, [currentDate]); // This run every time currentDate changes

  return (
    <div className="flex flex-col items-center">
      <div></div>
      <p>{currentDate.year}</p>
      <p>{currentDate.month}</p>
      <p>{currentDate.day}</p>
      <button
        onClick={handleNextDay}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Next Day
      </button>
    </div>
  );
}
