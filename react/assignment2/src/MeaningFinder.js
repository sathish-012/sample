

import React, { useState } from 'react';

function MeaningFinder() {
  const [name, setName] = useState('');
  const [apiResponse, setApiResponse] = useState(null);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(`https://api.agify.io/?name=${name}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setApiResponse(data);
      console.log('API Response:', data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>ASSIGNMENT 2</h1>
      <input
        type="text"
        placeholder="Enter a name"
        value={name}
        onChange={handleNameChange}
      />
      <button onClick={fetchData}>click</button>
      {apiResponse && (
        <div>
          <p>Name: {apiResponse.name}</p>
          <p>Age: {apiResponse.age}</p>
          
        </div>
      )}
    </div>
  );
}

export default MeaningFinder;
