import React from 'react'
import { CSidebar, CSidebarHeader, CSidebarNav, CNavTitle, CNavItem, CAvatar, CNavbarBrand, CNavbarText } from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'
import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';
const Sidebar = () => {
  return (
    <CSidebar style={{backgroundColor:'#f4f5f8',height:'100vh'}}>
    <CSidebarHeader>
      <CNavbarBrand style={{fontSize:'160%'}}><CIcon icon={icon.cibKodi} style={{marginRight:"5%"} } size='xl'></CIcon>SalesWay</CNavbarBrand>
    </CSidebarHeader>
        <CSidebarNav style={{marginTop:'-7%'}}>
        <CNavItem href="#"><CIcon icon={icon.cilSettings} style={{marginRight:'10%'}}></CIcon>Settings</CNavItem>
        <CNavItem href="#"><CIcon icon={icon.cilUser} style={{marginRight:'10%'}}></CIcon>Team</CNavItem>
    </CSidebarNav>
    <CSidebarNav style={{marginTop:'-180%'}}>
      <CNavTitle style={{overflow:'hidden'}}>Menu</CNavTitle>
        <CNavItem href="#" style={{backgroundColor:'white'}}><CIcon icon={icon.cilInbox} style={{marginRight:'10%',color:'#0068f7'}}></CIcon>Dashboard</CNavItem>
        <CNavItem href="#"><CIcon icon={icon.cilChart} style={{marginRight:'10%'}}></CIcon>Campaigns</CNavItem>
        <CNavItem href="#"><CIcon icon={icon.cilSitemap} style={{marginRight:'10%'}}></CIcon>Flows</CNavItem>
        <CNavItem href="#"><CIcon icon={icon.cilHighligt} style={{marginRight:'10%'}}></CIcon>Integrations</CNavItem>
        <CNavItem href="#"><CIcon icon={icon.cilList} style={{marginRight:'10%'}}></CIcon>Customers</CNavItem>
    </CSidebarNav>
    <CSidebarHeader>
              <CAvatar color='primary' textColor='white'>VK</CAvatar>
              <CNavbarText>Vaibhavi Kadam</CNavbarText>
    </CSidebarHeader>
  </CSidebar>
  )
}

export default Sidebar