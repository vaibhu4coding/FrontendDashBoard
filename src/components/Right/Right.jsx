import React, { useEffect, useState } from 'react';
import { CCard, CButton, CCardSubtitle, CCardTitle, CRow, CCol, CCardText } from '@coreui/react';
import LineChart from '../LineChart/LineChart';
import GaurgeChart from '../GaugeChart/GaurgeChart';
import HorizontalDivider from '../Divided_Line_Chart/Divided_Line_Chart';

const Right = () => {
  const [feedback, setFeedback] = useState(null);
  const username = localStorage.getItem('username');
  const password = localStorage.getItem('password');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://ec2-3-227-101-169.compute-1.amazonaws.com:8020/api/v1/sample_assignment_api_5/', {
          headers: {
            'Authorization': 'Basic ' + btoa(`${username}:${password}`)
          }
        });
        const data = await response.json();
        setFeedback(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='right' style={{ margin: '10px',height:'100vh' }}>
      <CCard style={{ borderRadius: '10px', borderColor: 'transparent', margin: '10px' }}>
        <div style={{marginTop:'3%'}}><GaurgeChart></GaurgeChart></div>
        {/* <hr style={{backgroundColor:'gray',color:'gray',width:'80%',alignItems:'center'}}></hr> */}
        <div style={{
          height: '0.1px', backgroundColor: '#e1e1e1', width: '80%',
          justifyContent: 'center', display: 'flex', marginLeft: '10%',
          marginBottom:'10%'
        }}></div>
        <h4 style={{marginLeft:'3%'}}>You're good!</h4>
        <p style={{ color: 'gray',marginLeft:'3%' }}>Your sales performance score is better than 80% of the users</p>
        <CButton style={{ backgroundColor: 'white', borderColor: 'gray', width: '50%', marginLeft:'3%',marginBottom:'3%'}} shape="rounded-pill">Improve your score</CButton>
      </CCard>
      <CCard style={{ borderRadius: '10px', borderColor: 'transparent', margin: '10px' }}>
        <h4>Customers by device</h4>
        <LineChart></LineChart>
      </CCard>
      {feedback && (
        <CCard style={{ borderRadius: '10px', borderColor: 'transparent', margin: '10px' }}>
          <CCardSubtitle>Community feedback</CCardSubtitle>
          <HorizontalDivider feedback={feedback} />
          <CCardTitle>Mostly positive</CCardTitle>
          <CRow>
            <CCol>
              <CCardSubtitle>Negative</CCardSubtitle>
              <CCardTitle>{feedback.negative}</CCardTitle>
            </CCol>
            <CCol>
              <CCardSubtitle>Neutral</CCardSubtitle>
              <CCardTitle>{feedback.neutral}</CCardTitle>
            </CCol>
            <CCol>
              <CCardSubtitle>Positive</CCardSubtitle>
              <CCardTitle>{feedback.positive}</CCardTitle>
            </CCol>
          </CRow>
        </CCard>
      )}
    </div>
  );
};

export default Right;
