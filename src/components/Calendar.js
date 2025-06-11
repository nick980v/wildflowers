"use client";

import { useState, useEffect } from "react";
import styles from "./Calendar.module.css";

const Calendar = ({ sheetData }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [hoveredDay, setHoveredDay] = useState(null);
  const [processedSessions, setProcessedSessions] = useState({}); // State to store sessions grouped by date

  useEffect(() => {
    // Process sheetData when it changes
    const groupedSessions = {};
    sheetData.forEach((row) => {
      // Convert 'DD/MM/YYYY' from sheetData to 'YYYY-MM-DD' for consistent internal use
      const [day, month, year] = row.date.split("/");
      const formattedDate = `${year}-${month}-${day}`;

      if (!groupedSessions[formattedDate]) {
        groupedSessions[formattedDate] = [];
      }
      groupedSessions[formattedDate].push({
        time: row.time,
        type: row.name,
        notes: row.notes,
      });
    });
    setProcessedSessions(groupedSessions);
  }, [sheetData]);

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const isFriday = (day) => {
    const date = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    );
    return date.getDay() === 5; // 5 represents Friday
  };

  const sessionsForDay = (day) => {
    const fullDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    );
    const year = fullDate.getFullYear();
    const month = (fullDate.getMonth() + 1).toString().padStart(2, "0");
    const dayOfMonth = fullDate.getDate().toString().padStart(2, "0");
    const formattedDate = `${year}-${month}-${dayOfMonth}`;

    // Retrieve sessions from the processed sheet data
    return processedSessions[formattedDate] || [];
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDayOfMonth = getFirstDayOfMonth(currentDate);
    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className={styles.emptyDay}></div>);
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const isFridayDay = isFriday(day);
      const daySessions = sessionsForDay(day);
      const hasSessions = daySessions.length > 0;

      days.push(
        <div
          key={day}
          className={`${styles.day} ${hasSessions ? styles.hasSessions : ""}`}
          onMouseEnter={() => setHoveredDay(day)}
          onMouseLeave={() => setHoveredDay(null)}
        >
          <span className={styles.dayNumber}>{day}</span>
          {hasSessions && ( // Always show sessions in the day cell if available
            <div className={styles.sessions}>
              {daySessions.map((session, index) => (
                <div key={index} className={styles.sessionCompact}>
                  <span className={styles.sessionTimeCompact}>
                    {session.time}
                  </span>
                </div>
              ))}
            </div>
          )}
          {hoveredDay === day && hasSessions && (
            <div className={styles.sessionModal}>
              <span className={styles.modalDate}>
                {monthNames[currentDate.getMonth()]} {day},{" "}
                {currentDate.getFullYear()}
              </span>
              {daySessions.map((session, index) => (
                <div key={index} className={styles.session}>
                  <span className={styles.sessionTime}>{session.time}</span>
                  <span className={styles.sessionType}>{session.type}</span>
                  {session.notes && (
                    <span className={styles.sessionNotes}>{session.notes}</span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      );
    }

    return days;
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
    );
  };

  return (
    <div className={styles.calendarContainer}>
      <div className={styles.calendarHeader}>
        <button onClick={handlePrevMonth} className={styles.navigationButton}>
          ←
        </button>
        <h2 className={styles.monthYear}>
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h2>
        <button onClick={handleNextMonth} className={styles.navigationButton}>
          →
        </button>
      </div>
      <div className={styles.weekDays}>
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>
      <div className={styles.calendarGrid}>{renderCalendar()}</div>
    </div>
  );
};

export default Calendar;
