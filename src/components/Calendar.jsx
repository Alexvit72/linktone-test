import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


const Calendar = () => {

  const [startDate, setStartDate] = useState(new Date());
  const [shownMonthPicker, setShownMonthPicker] = useState(false);
  const [shownYearPicker, setShownYearPicker] = useState(false);

  useEffect(() => {
    if (!shownMonthPicker) {
      let month = document.querySelector('.react-datepicker__current-month');
      if (month) {
        month.addEventListener('click', openMonth);
        return () => {
          month.removeEventListener('click', openMonth);
        };
      }
    }
  }, [shownMonthPicker]);

  useEffect(() => {
    if (shownMonthPicker && !shownYearPicker) {
      let year = document.querySelector('.react-datepicker-year-header');
      if (year) {
        year.addEventListener('click', openYear);
        return () => {
          year.removeEventListener('click', openYear);
        };
      }
    }
  }, [shownMonthPicker, shownYearPicker]);

  const openMonth = () => setShownMonthPicker(true);
  
  const openYear = () => setShownYearPicker(true);

  const handleChange = (date) => {
    if (shownYearPicker) {
      setShownYearPicker(false);
    } else if (shownMonthPicker) {
      setShownMonthPicker(false);
    }
    setStartDate(date);
  };

  return (
    <aside className="calendar">
      <h3 className="calendar-title">Календарь событий</h3>
      <DatePicker
        selected={startDate}
        onChange={handleChange}
        inline
        showMonthYearPicker={shownMonthPicker}
        showFourColumnMonthYearPicker
        showYearPicker={shownYearPicker}
      />
    </aside>
  );
}


export default Calendar;
