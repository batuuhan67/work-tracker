import React, { useState, useEffect } from 'react';
import Machines from './Machines';
import Materials from './Materials';
import People from './People';

const WorkTracker = () => {
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [inputData, setInputData] = useState({});
  const [error, setError] = useState('');

  const handleYearChange = (e) => {
    setYear(e.target.value);
    resetTable();
  };

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
    resetTable();
  };

  const handleDayChange = (e) => {
    setDay(e.target.value);
    resetTable();
  };

  const resetTable = () => {
    setInputData({});
    setError('');
  };

  const getCurrentDateKey = () => {
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    if (year && month && day) {
      const currentDateKey = getCurrentDateKey();
      const savedDataForDate = JSON.parse(localStorage.getItem(currentDateKey)) || {
        "İnşaat mühendisi": '',
        "Saha mühendisi": '',
        "Düz işçi": '',
        "Kalifiye işçi": '',
        "Mikser": '',
        "Rock ve çakma makinesi": '',
        "Karmix": '',
        "Ekskavatör": '',
        "Dozer": ''
      };
      setInputData(savedDataForDate);
    }
  }, [year, month, day]);

  const handleInputChange = (role, value) => {
    setInputData(prevData => ({
      ...prevData,
      [role]: value
    }));
  };

  const handleSave = () => {
    if (!year || !month || !day) {
      setError('Please select a year, month, and day before saving.');
      return;
    }

    const currentDateKey = getCurrentDateKey();
    localStorage.setItem(currentDateKey, JSON.stringify(inputData));
    setError('');
  };

  const years = Array.from(new Array(21), (val, index) => 2020 + index);
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const days = Array.from(new Array(31), (val, index) => index + 1);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
        <select value={year} onChange={handleYearChange}>
          <option value="" disabled>Select Year</option>
          {years.map((y) => (
            <option key={y} value={y}>{y}</option>
          ))}
        </select>
        <select value={month} onChange={handleMonthChange} style={{ marginLeft: '10px' }}>
          <option value="" disabled>Select Month</option>
          {months.map((m, index) => (
            <option key={index} value={m}>{m}</option>
          ))}
        </select>
        <select value={day} onChange={handleDayChange} style={{ marginLeft: '10px' }}>
          <option value="" disabled>Select Day</option>
          {days.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <Machines data={inputData} onInputChange={handleInputChange} />
      <Materials data={inputData} onInputChange={handleInputChange} />
      <People data={inputData} onInputChange={handleInputChange} />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default WorkTracker;
