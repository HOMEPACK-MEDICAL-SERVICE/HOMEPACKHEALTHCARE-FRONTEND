import React from 'react'
import SideBar from '../components/SideBar'
import { Outlet } from 'react-router'

const DashboardLayout = () => {
  return (
    <div>
        <div>
            <SideBar/>
            <Outlet/>
        </div>
    </div>
  )
}

export default DashboardLayout