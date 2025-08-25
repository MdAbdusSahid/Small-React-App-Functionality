import React, { useState } from "react";
import "./Calendar.css";

const students = ["charlie", "john"];
const months = ["2025-08", "2025-09"];
const attendanceData = {
  charlie: {
    "2025-08": {
      "2025-08-01": "Present",
      "2025-08-02": "Present",
      "2025-08-03": "Holiday",
      "2025-08-04": "Present",
      "2025-08-05": "Present",
      "2025-08-06": "Present",
      "2025-08-07": "Absent",
      "2025-08-08": "Present",
      "2025-08-09": "Present",
      "2025-08-10": "Holiday",
      "2025-08-11": "Present",
      "2025-08-12": "Present",
      "2025-08-13": "Present",
      "2025-08-14": "Absent",
      "2025-08-15": "Holiday",
      "2025-08-16": "Present",
      "2025-08-17": "Present",
      "2025-08-18": "Present",
      "2025-08-19": "Present",
      "2025-08-20": "Absent",
      "2025-08-21": "Present",
      "2025-08-22": "Present",
      "2025-08-23": "Present",
      "2025-08-24": "Holiday",
      "2025-08-25": "Present",
      "2025-08-26": "Present",
      "2025-08-27": "Present",
      "2025-08-28": "Present",
      "2025-08-29": "Present",
      "2025-08-30": "Absent",
      "2025-08-31": "Holiday",
    },
  },
  john: {
    "2025-08": {
      "2025-08-01": "Absent",
      "2025-08-02": "Present",
      "2025-08-03": "Holiday",
      "2025-08-04": "Absent",
      "2025-08-05": "Present",
      "2025-08-06": "Absent",
      "2025-08-07": "Present",
      "2025-08-08": "Absent",
      "2025-08-09": "Present",
      "2025-08-10": "Holiday",
      "2025-08-11": "Present",
      "2025-08-12": "Absent",
      "2025-08-13": "Present",
      "2025-08-14": "Absent",
      "2025-08-15": "Holiday",
      "2025-08-16": "Present",
      "2025-08-17": "Absent",
      "2025-08-18": "Present",
      "2025-08-19": "Absent",
      "2025-08-20": "Present",
      "2025-08-21": "Absent",
      "2025-08-22": "Present",
      "2025-08-23": "Absent",
      "2025-08-24": "Holiday",
      "2025-08-25": "Present",
      "2025-08-26": "Absent",
      "2025-08-27": "Present",
      "2025-08-28": "Absent",
      "2025-08-29": "Present",
      "2025-08-30": "Absent",
      "2025-08-31": "Holiday",
    },
  },
};

const CalendarView = () => {
  const [student, setStudent] = useState("");
  const [month, setMonth] = useState("");

  const attendance =
    student && month ? attendanceData[student]?.[month] || {} : {};

  const getDaysInMonth = (monthStr) => {
    const [year, month] = monthStr.split("-");
    const date = new Date(year, month - 1, 1);
    const days = [];
    while (date.getMonth() === parseInt(month) - 1) {
      const dayStr = date.toISOString().split("T")[0];
      days.push(dayStr);
      date.setDate(date.getDate() + 1);
    }
    return days;
  };

  const days = month ? getDaysInMonth(month) : [];

  return (
    <div className="calendar-container">
      <h2>Attendance Calendar</h2>

      <div className="selectors">
        <select value={student} onChange={(e) => setStudent(e.target.value)}>
          <option value="" disabled>Select Student</option>
          {students.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>

        <select value={month} onChange={(e) => setMonth(e.target.value)}>
          <option value="" disabled>Select Month</option>
          {months.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </div>

      <div className="calendar-grid">
        {days.map((day) => {
          const status = attendance[day] || "Absent";
          return (
            <div key={day} className={`day-box ${status.toLowerCase()}`}>
              <span>{day.split("-")[2]}</span>
              <small>{status}</small>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarView;
