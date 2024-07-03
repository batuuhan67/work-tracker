import React from 'react';

const Materials = ({ data, onInputChange }) => {
  // Assuming you have materials, if not you can omit this part
  const materials = [
    // Add material names here
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
        {materials.map((material, index) => (
          <tr key={index}>
            <td>{material}</td>
            <td>
              <input 
                type="number" 
                placeholder="Miktar" 
                value={data[material] || ''} 
                onChange={(e) => onInputChange(material, e.target.value)} 
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Materials;
