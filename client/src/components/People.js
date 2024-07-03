import React from 'react';

const People = ({ data, onInputChange }) => {
  const people = [
    "İnşaat mühendisi",
    "Saha mühendisi",
    "Düz işçi",
    "Kalifiye işçi"
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Role/Equipment</th>
          <th>Miktar</th>
        </tr>
      </thead>
      <tbody>
        {people.map((person, index) => (
          <tr key={index}>
            <td>{person}</td>
            <td>
              <input 
                type="number" 
                placeholder="Miktar" 
                value={data[person] || ''} 
                onChange={(e) => onInputChange(person, e.target.value)} 
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default People;
