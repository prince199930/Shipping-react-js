import React from 'react'
import {DownOutlined} from '@ant-design/icons'
import './Shipment.css'
import Orders from '../Orders/Orders'

function Shipment() {
    return (
        <>
        <div className="shipment">
            <div>
                <p className="shipNav">Ship</p>
            </div>
            <div style={{display:"flex", justifyContent:"space-evenly", width:"41vw", alignItems:"center"}}>
            <div>
                <button className="newShip">CREATE NEW SHIPMENT <p style={{display:"inline", fontSize:"21px", marginLeft:"8px"}}>+</p></button>
            </div>
            <div>
                <p style={{color:"#ccc"}}>Printer : <p style={{display:"inline", color:"black"}}>(Print Via Browser)</p> <DownOutlined style={{color:"black"}} /></p>
            </div>
            </div>
        </div>
        <Orders/>
        </>
    )
}

export default Shipment
