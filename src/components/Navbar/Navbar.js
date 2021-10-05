import React from 'react'
import {PhoneOutlined, UserOutlined} from '@ant-design/icons'
import flagIcon from '../../assets/flag.png'
import './Navbar.css'

function Navbar() {
    return (
        <div className="navbar">
            <div className="axiom">
                <div>
                    <h1 className="axiom-heading">Axiom</h1>
                    <h3 className="ship-heading">SHIP MANAGER</h3>
                </div>
                <div>
                    <i class="fa fa-bars" style={{marginTop:"29px", fontSize:"30px",marginLeft:"51px", color:"#fff"}}></i>
                </div>
            </div>
            <div style={{marginRight:'34px', display:'flex', justifyContent:"space-evenly", width:"305px", alignItems:"center"}}>
                <PhoneOutlined className="phoneIcn" />
                <UserOutlined className="contactIcn" />
                <div style={{padding:"6px",borderRadius:"28px",height:"26px", backgroundColor:"#6ccbf5"}}>
                <img className="amFlag" src={flagIcon}/>
                </div>
                <button className="quickBtn"><strong>QUICK QUOTE</strong></button>
            </div>
        </div>
    )
}

export default Navbar
