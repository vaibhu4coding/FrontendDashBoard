import React, { useState, useEffect } from 'react';
import { CCard, CCardBody, CCardTitle, CCardText, CRow, CCol, CBadge } from '@coreui/react';

const Cards = () => {
  const [data, setData] = useState(null);
  const username = localStorage.getItem('username')
  const password = localStorage.getItem('password')
  useEffect(() => {
    // Fetch data from the API when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://ec2-3-227-101-169.compute-1.amazonaws.com:8020/api/v1/sample_assignment_api_1/', {
        headers: {
          'Authorization': 'Basic ' + btoa(`${username}:${password}`)
        }
      });

      if (response.ok) {
        const jsonData = await response.json();
        setData(jsonData);
      } else {
        console.error('Failed to fetch data:', response.statusText);
      }
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  return (
    <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 3 }}>
      <CCol xs>
        <CCard style={{ borderRadius: '20px' }}>
          <CCardBody>
            <CCardText>Purchases</CCardText>
            <CCardTitle>{data && data.purchases !== undefined ? `${data.purchases}%` : 'Loading...'}</CCardTitle>
            <CBadge style={{ backgroundColor: '#e0fdeb', borderStyle: 'solid', borderColor: '#71ba90', color: '#71ba90', borderWidth: '0.1px'}} shape='round-pill'>+32%</CBadge>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs>
        <CCard style={{ borderRadius: '20px' }}>
          <CCardBody>
            <CCardText>Revenue</CCardText>
            <CCardTitle>{data && data.revenue !== undefined ? `${data.revenue}%` : 'Loading...'}</CCardTitle>
            <CBadge style={{ backgroundColor: '#e0fdeb', borderStyle: 'solid', borderColor: '#71ba90', color: '#71ba90', borderWidth: '0.1px'}} shape='round-pill'>+72%</CBadge>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs>
        <CCard style={{ borderRadius: '20px' }}>
          <CCardBody>
            <CCardText>Refunds</CCardText>
            <CCardTitle>{data && data.refunds !== undefined ? `${data.refunds}%` : 'Loading...'}</CCardTitle>
            <CBadge style={{ backgroundColor: '#ffe2e2', borderStyle: 'solid', borderColor: '#c07e78', color: '#c07e78', borderWidth: '0.1px'}} shape='round-pill'>-12%</CBadge>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
}

export default Cards;
