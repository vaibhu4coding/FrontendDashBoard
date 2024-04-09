import React, { useEffect, useState } from 'react';
import { CChart } from '@coreui/react-chartjs';

const LineChart = () => {
  const [labels, setLabels] = useState(null);
  const [uniqueCnt, setUniqueCnt] = useState(null);
  const [cumulativeTweets, setCumulativeTweets] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const username = localStorage.getItem('username');
        const password = localStorage.getItem('password');
        const headers = new Headers();
        headers.set('Authorization', 'Basic ' + btoa(username + ':' + password));

        const response = await fetch(
          'http://ec2-3-227-101-169.compute-1.amazonaws.com:8020/api/v1/sample_assignment_api_4/',
          { headers });
        const data1 = await response.json();
        setData(data1);
        setLabels(data1.map(e => e.date2));
        setUniqueCnt(data1.map(e => e.unique_count));
        setCumulativeTweets(data1.map(e => e.cumulative_tweets));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (!data || !labels || !uniqueCnt || !cumulativeTweets) {
    return null; 
  }

  return (
    <CChart
      type="line"
      data={{
        labels: labels,
        datasets: [
          {
            label: "Unique Count",
            backgroundColor: "rgba(220, 220, 220, 0.2)",
            borderColor: "rgba(220, 220, 220, 1)",
            pointBackgroundColor: "rgba(220, 220, 220, 1)",
            pointBorderColor: "#fff",
            data: uniqueCnt
          },
          {
            label: "Cumulative Tweets",
            backgroundColor: "rgba(151, 187, 205, 0.2)",
            borderColor: "rgba(151, 187, 205, 1)",
            pointBackgroundColor: "rgba(151, 187, 205, 1)",
            pointBorderColor: "#fff",
            data: cumulativeTweets
          },
        ],
      }}
      options={{
        scales: {
          x: {
            ticks: {
              display: false // Hide x-axis labels
            }
          }
        },
      
      }}
    />
  );
};

export default LineChart;
