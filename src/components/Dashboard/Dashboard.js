import React from 'react'
import {DashboardOutlined, CodeSandboxOutlined, CalendarOutlined, HistoryOutlined, SettingOutlined} from '@ant-design/icons'
import "./Dashboard.css"

function Dashboard() {
    return (
        <div className="myDashboard">
            <div className="dashboard">
                <DashboardOutlined className="dashboardIcn" />
                <p>Dashboard</p>
            </div>
            <div className="ship">
                <CodeSandboxOutlined className="shipIcn" />
                <p><strong>Ship</strong></p>
            </div>
            <div className="booking">
                <CalendarOutlined className="bookingIcn" />
                <p>Booking</p>
            </div>
            <div className="history">
                <HistoryOutlined className="historyIcn" />
                <p>History</p>
            </div>
            <div className="setting">
                <SettingOutlined className="settingIcn" />
                <p>Settings</p>
            </div>
        </div>
    )
}

export default Dashboard
