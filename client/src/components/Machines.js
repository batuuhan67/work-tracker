import React from 'react';

const Machines = ({ data, onInputChange }) => {
  const machines = [
    "Mikser",
    "Rock ve çakma makinesi",
    "Karmix",
    "Ekskavatör",
    "Dozer"
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
        {machines.map((machine, index) => (
          <tr key={index}>
            <td>{machine}</td>
            <td>
              <input 
                type="number" 
                placeholder="Miktar" 
                value={data[machine] || ''} 
                onChange={(e) => onInputChange(machine, e.target.value)} 
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Machines;
