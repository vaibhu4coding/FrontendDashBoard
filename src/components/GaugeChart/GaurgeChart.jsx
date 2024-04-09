import React, { useState, useEffect } from 'react';
import GaugeChart from 'react-gauge-chart';

const GaugeChartComponent = () => {
  const [percent, setPercent] = useState(0);
  const [arcLength, setArcLength] = useState(0.5); // Initial arc length (50%)
  const username = localStorage.getItem('username')
  const password = localStorage.getItem('password')
  useEffect(() => {
    // Fetch data from the API when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Replace 'your-api-endpoint' with the actual URL of your API endpoint
      const response = await fetch('http://ec2-3-227-101-169.compute-1.amazonaws.com:8020/api/v1/sample_assignment_api_3/', {
        headers: {
          'Authorization': 'Basic ' + btoa(`${username}:${password}`)
        }
      });
      if (response.ok) {
        const jsonData = await response.json();
        const { score } = jsonData;
        const newPercent = score / 100;
        setPercent(newPercent);
        setArcLength(newPercent);
      } else {
        console.error('Failed to fetch data:', response.statusText);
      }
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  return (
    <GaugeChart
      
      id="speedometer-chart"
      arcsLength={[arcLength, 1 - arcLength]} 
      arcWidth={0.07}
      colors={['#007bff', '#cccccc']} 
      percent={percent}
      arcPadding={0.0001}
      textColor={'#000000'}
      needleColor={'transparent'}
      needleBaseColor={'transparent'}
      hideText={false}
      text={`${Math.round(percent * 100)}% of 100`}
      
    />

  );
};

export default GaugeChartComponent;
