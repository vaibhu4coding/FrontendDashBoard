import React, { useState } from 'react';
import { CForm, CFormInput, CFormLabel, CInputGroup, CInputGroupText, CButton, CRow, CCard, CCardSubtitle, CCardBody } from '@coreui/react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
    
  const handleLogin = async (e) => {
    e.preventDefault();
    
    // Send a POST request to the login API endpoint
    try {
      const response = await fetch('http://ec2-3-227-101-169.compute-1.amazonaws.com:8020/api/v1/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password,phone_number:'1234567890',email:'hello@gm.c',input_code:'0' })
      });

      if (response.ok) {
        localStorage.setItem('loginSuccess', 'logged in')
        localStorage.setItem('username', username)
        localStorage.setItem('password',password)
        window.location.href = '/dashboard';
      } else {
        console.error('Login failed:', response.statusText);
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <CCard style={{ marginTop: '30vh', marginLeft: '30vw', marginRight: '30vw' }}>
      <CCardSubtitle style={{ textAlign: 'center', marginTop: '2vh', fontSize: '3vh' }}>Login</CCardSubtitle>
      <CCardBody>
        <CForm className="row g-3" onSubmit={handleLogin}>
          <CRow md={4}>
            <CFormLabel htmlFor="validationDefaultUsername">Username</CFormLabel>
            <CInputGroup style={{ marginTop: '2vh' }}>
              <CInputGroupText id="inputGroupPrepend02">@</CInputGroupText>
              <CFormInput
                type="text"
                id="validationDefaultUsername"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                aria-describedby="inputGroupPrepend02"
                required
              />
            </CInputGroup>
          </CRow>
          <CRow>
            <CFormLabel htmlFor="validationDefaultPassword">Password</CFormLabel>
            <CInputGroup style={{ marginTop: '2vh' }}>
              <CInputGroupText id="inputGroupPrepend02">Pwd</CInputGroupText>
              <CFormInput
                type="password"
                id="validationDefaultPassword"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                aria-describedby="inputGroupPrepend02"
                required
              />
            </CInputGroup>
          </CRow>
          <CRow md={4}>
            <CInputGroup style={{ marginTop: '2vh' }}>
              <CButton color="primary" type="submit">
                Login
              </CButton>
            </CInputGroup>
          </CRow>
        </CForm>
      </CCardBody>
    </CCard>
  );
}

export default Login;
