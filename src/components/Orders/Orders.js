import React from 'react'
import {CodeSandboxOutlined, FilterOutlined, RedoOutlined} from '@ant-design/icons'
import tagIcn from '../../assets/tag.PNG'
import './Orders.css'
import {QuestionOutlined} from '@ant-design/icons'

function Orders() {
    return (
        <div className="myOrders">
            <div style={{width:"20vw", boxShadow:"0 6px 6px #ccc", marginLeft:"8px", padding:"7px"}}>
                <div style={{display:"flex", justifyContent:"space-between", height:"40px", alignItems:"center", padding:"10px"}}>
                    <div className="abtOrders">
                        <CodeSandboxOutlined className="myOrderIcn"/>
                        <p style={{fontSize:"17px"}}>80 Orders</p>
                    </div>
                    <div style={{marginRight: "17px", width: "49px",justifyContent: "space-between",display: "flex", color:"#00b2ff"}}>
                        <FilterOutlined  className="filterIcn"/>
                        <RedoOutlined className="refreshIcn" />
                    </div>
                </div>
                <div>
                    <input className="searchOrder" type="text" placeholder="Search Orders..."/>
                </div>
                <div style={{height:"63px"}}>
                    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                        <p style={{marginLeft:"6px", color:"rgb(116 108 108)", fontSize:"14px"}}>Roy hufsetler</p>
                        <p style={{marginRight:"9px", fontSize:"14px", color:"#ccc"}}>12/29/2021 44PM</p>
                    </div>
                    <div style={{display:"flex", marginTop:"-24px", justifyContent:"space-between", alignItems:"center"}}>
                        <p style={{marginLeft:"5px"}}><strong>1538284</strong> <i style={{color:"#ccc"}} class="fa fa-map-marker" aria-hidden="true"></i><p style={{display:"inline", color:"#00b2ff"}}>us</p></p>
                        <p style={{marginRight:"6px", color:"#fff", backgroundColor:"#00b2ff", fontSize:"14px",width: "121px", borderRadius: "6px"}}>Maghma Holding</p>
                    </div>
                </div>
                <hr style={{color:"#ccc", width:"104%", marginLeft:"-7px"}}></hr>
                <div>
                    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                        <p style={{marginLeft:"6px", color:"rgb(116 108 108)", fontSize:"14px"}}>Roy hufsetler</p>
                        <p style={{marginRight:"9px", fontSize:"14px", color:"#ccc"}}>12/29/2021 44PM</p>
                    </div>
                    <div style={{display:"flex", marginTop:"-24px", justifyContent:"space-between", alignItems:"center"}}>
                        <p style={{marginLeft:"5px"}}><strong>1538284</strong> <i style={{color:"#ccc"}} class="fa fa-map-marker" aria-hidden="true"></i><p style={{display:"inline", color:"#00b2ff"}}>us</p></p>
                        <p style={{marginRight:"6px", color:"#fff", backgroundColor:"#00b2ff", fontSize:"14px",width: "121px", borderRadius: "6px"}}>Maghma Holding</p>
                    </div>
                </div>
                <hr style={{color:"#ccc", width:"104%", marginLeft:"-7px"}}></hr>
                <div style={{backgroundColor:"#baddef"}}>
                    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                        <p style={{marginLeft:"6px", color:"rgb(116 108 108)", fontSize:"14px"}}>Roy hufsetler</p>
                        <p style={{marginRight:"9px", fontSize:"14px", color:"#ccc"}}>12/29/2021 44PM</p>
                    </div>
                    <div style={{display:"flex", marginTop:"-24px", justifyContent:"space-between", alignItems:"center"}}>
                        <p style={{marginLeft:"5px"}}><strong>1538284</strong> <i style={{color:"#ccc"}} class="fa fa-map-marker" aria-hidden="true"></i><p style={{display:"inline", color:"#00b2ff"}}>us</p></p>
                        <p style={{marginRight:"6px", color:"#fff", backgroundColor:"#00b2ff", fontSize:"14px",width: "121px", borderRadius: "6px"}}>Maghma Holding</p>
                    </div>
                </div>
                <hr style={{color:"#ccc", width:"104%", marginLeft:"-7px"}}></hr>
                <div>
                    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                        <p style={{marginLeft:"6px", color:"rgb(116 108 108)", fontSize:"14px"}}>Roy hufsetler</p>
                        <p style={{marginRight:"9px", fontSize:"14px", color:"#ccc"}}>12/29/2021 44PM</p>
                    </div>
                    <div style={{display:"flex", marginTop:"-24px", justifyContent:"space-between", alignItems:"center"}}>
                        <p style={{marginLeft:"5px"}}><strong>1538284</strong> <i style={{color:"#ccc"}} class="fa fa-map-marker" aria-hidden="true"></i><p style={{display:"inline", color:"#00b2ff"}}>us</p></p>
                        <p style={{marginRight:"6px", color:"#fff", backgroundColor:"#00b2ff", fontSize:"14px",width: "121px", borderRadius: "6px"}}>Maghma Holding</p>
                    </div>
                </div>
                <hr style={{color:"#ccc", width:"104%", marginLeft:"-7px"}}></hr>
                <div>
                    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                        <p style={{marginLeft:"6px", color:"rgb(116 108 108)", fontSize:"14px"}}>Roy hufsetler</p>
                        <p style={{marginRight:"9px", fontSize:"14px", color:"#ccc"}}>12/29/2021 44PM</p>
                    </div>
                    <div style={{display:"flex", marginTop:"-24px", justifyContent:"space-between", alignItems:"center"}}>
                        <p style={{marginLeft:"5px"}}><strong>1538284</strong> <i style={{color:"#ccc"}} class="fa fa-map-marker" aria-hidden="true"></i><p style={{display:"inline", color:"#00b2ff"}}>us</p></p>
                        <p style={{marginRight:"6px", color:"#fff", backgroundColor:"#00b2ff", fontSize:"14px",width: "121px", borderRadius: "6px"}}>Maghma Holding</p>
                    </div>
                </div>
                <hr style={{color:"#ccc", width:"104%", marginLeft:"-7px"}}></hr>
                <div>
                    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                        <p style={{marginLeft:"6px", color:"rgb(116 108 108)", fontSize:"14px"}}>Roy hufsetler</p>
                        <p style={{marginRight:"9px", fontSize:"14px", color:"#ccc"}}>12/29/2021 44PM</p>
                    </div>
                    <div style={{display:"flex", marginTop:"-24px", justifyContent:"space-between", alignItems:"center"}}>
                        <p style={{marginLeft:"5px"}}><strong>1538284</strong> <i style={{color:"#ccc"}} class="fa fa-map-marker" aria-hidden="true"></i><p style={{display:"inline", color:"#00b2ff"}}>us</p></p>
                        <p style={{marginRight:"6px", color:"#fff", backgroundColor:"#00b2ff", fontSize:"14px",width: "121px", borderRadius: "6px"}}>Maghma Holding</p>
                    </div>
                </div>
                <hr style={{color:"#ccc", width:"104%", marginLeft:"-7px"}}></hr>
                <div>
                    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                        <p style={{marginLeft:"6px", color:"rgb(116 108 108)", fontSize:"14px"}}>Roy hufsetler</p>
                        <p style={{marginRight:"9px", fontSize:"14px", color:"#ccc"}}>12/29/2021 44PM</p>
                    </div>
                    <div style={{display:"flex", marginTop:"-24px", justifyContent:"space-between", alignItems:"center"}}>
                        <p style={{marginLeft:"5px"}}><strong>1538284</strong> <i style={{color:"#ccc"}} class="fa fa-map-marker" aria-hidden="true"></i><p style={{display:"inline", color:"#00b2ff"}}>us</p></p>
                        <p style={{marginRight:"6px", color:"#fff", backgroundColor:"#00b2ff", fontSize:"14px",width: "121px", borderRadius: "6px"}}>Maghma Holding</p>
                    </div>
                </div>
                <hr style={{color:"#ccc", width:"104%", marginLeft:"-7px"}}></hr>
                <div>
                    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                        <p style={{marginLeft:"6px", color:"rgb(116 108 108)", fontSize:"14px"}}>Roy hufsetler</p>
                        <p style={{marginRight:"9px", fontSize:"14px", color:"#ccc"}}>12/29/2021 44PM</p>
                    </div>
                    <div style={{display:"flex", marginTop:"-24px", justifyContent:"space-between", alignItems:"center"}}>
                        <p style={{marginLeft:"5px"}}><strong>1538284</strong> <i style={{color:"#ccc"}} class="fa fa-map-marker" aria-hidden="true"></i><p style={{display:"inline", color:"#00b2ff"}}>us</p></p>
                        <p style={{marginRight:"6px", color:"#fff", backgroundColor:"#00b2ff", fontSize:"14px",width: "121px", borderRadius: "6px"}}>Maghma Holding</p>
                    </div>
                </div>
                <hr style={{color:"#ccc", width:"104%", marginLeft:"-7px"}}></hr>
                <div>
                    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                        <p style={{marginLeft:"6px", color:"rgb(116 108 108)", fontSize:"14px"}}>Roy hufsetler</p>
                        <p style={{marginRight:"9px", fontSize:"14px", color:"#ccc"}}>12/29/2021 44PM</p>
                    </div>
                    <div style={{display:"flex", marginTop:"-24px", justifyContent:"space-between", alignItems:"center"}}>
                        <p style={{marginLeft:"5px"}}><strong>1538284</strong> <i style={{color:"#ccc"}} class="fa fa-map-marker" aria-hidden="true"></i><p style={{display:"inline", color:"#00b2ff"}}>us</p></p>
                        <p style={{marginRight:"6px", color:"#fff", backgroundColor:"#00b2ff", fontSize:"14px",width: "121px", borderRadius: "6px"}}>Maghma Holding</p>
                    </div>
                </div>
                <hr style={{color:"#ccc", width:"104%", marginLeft:"-7px"}}></hr>
                <div>
                    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                        <p style={{marginLeft:"6px", color:"rgb(116 108 108)", fontSize:"14px"}}>Roy hufsetler</p>
                        <p style={{marginRight:"9px", fontSize:"14px", color:"#ccc"}}>12/29/2021 44PM</p>
                    </div>
                    <div style={{display:"flex", marginTop:"-24px", justifyContent:"space-between", alignItems:"center"}}>
                        <p style={{marginLeft:"5px"}}><strong>1538284</strong> <i style={{color:"#ccc"}} class="fa fa-map-marker" aria-hidden="true"></i><p style={{display:"inline", color:"#00b2ff"}}>us</p></p>
                        <p style={{marginRight:"6px", color:"#fff", backgroundColor:"#00b2ff", fontSize:"14px",width: "121px", borderRadius: "6px"}}>Maghma Holding</p>
                    </div>
                </div>
            </div>


            <div style={{boxShadow:"0 6px 6px #ccc", width:"31vw", height:"118vh", marginLeft:"32px"}}>
                <div>
                <div style={{display:"flex", justifyContent:"space-evenly"}}>
                    <div style={{fontSize:"16px"}}>
                        <p>LOCATEINV 5549475 <RedoOutlined style={{color:"#00b2ff"}}/> </p>
                    </div>
                    <div>
                        <p>SHIP DATE</p>
                        <p style={{marginTop:"-14px", color:"#b9b2b2", fontSize:"14px"}}>7/02/2021</p>
                    </div>
                    <div>
                        <p>REFERENCE</p>
                        <p style={{marginTop:"-14px", color:"#b9b2b2", fontSize:"14px"}}>176123</p>
                    </div>
                </div>
                <hr style={{marginTop:"-2px"}}></hr>

                <div>
                    <div style={{justifyContent:"center", alignItems:"center", display:"flex"}}>
                        <div style={{marginLeft:"-10px", width:"45%"}}>
                        <div style={{display:"flex"}}>
                            <h3>SENDER</h3>
                            <i style={{color:"#00b2ff", marginTop:"22px", marginLeft:"12px"}} class="fa fa-pencil" aria-hidden="true"></i>
                            <div style={{border:"2px solid #ccc", width:"17px", height:"15px", borderRadius:"14px", marginTop:"22px", marginLeft:"61px"}}></div>
                            <div style={{borderTop:"2px solid #ccc", borderRight:"2px solid #ccc", borderBottom:"2px solid #ccc" ,width:"17px", height:"15px", borderRadius:"11px", marginLeft:"-7px", marginTop:"22px"}}></div>
                        </div>
                        <div>
                            <p style={{marginTop:"-8px", display:"flex", justifyContent:"start"}}>Deepak Sharma</p>
                            <p style={{display:"flex", justifyContent:"start", marginTop:"-16px"}}>2nd Foundation</p>
                            <p style={{display:"flex", justifyContent:"start", marginTop:"-16px"}}>3012 E Aelaxendar Rd 1002</p>
                            <p style={{display:"flex", justifyContent:"start", marginTop:"-16px"}}>North Las Vegas, NV 89-30</p>
                            <p style={{display:"flex", justifyContent:"start", marginTop:"-16px"}}>UNITED STATES</p>
                            <p style={{display:"flex", justifyContent:"start", marginTop:"-16px"}}>7024155263</p>
                        </div>
                        </div>
                        <div style={{marginLeft:"27px"}}>
                        <div style={{display:"flex"}}>
                            <h3 style={{marginLeft:"2px"}}>RECEIVER</h3>
                            <i style={{color:"#00b2ff", marginTop:"22px", marginLeft:"12px"}} class="fa fa-pencil" aria-hidden="true"></i>
                            <div style={{border:"2px solid #ccc", width:"17px", height:"15px", borderRadius:"14px", marginTop:"22px", marginLeft:"61px"}}></div>
                            <div style={{borderTop:"2px solid #ccc", borderRight:"2px solid #ccc", borderBottom:"2px solid #ccc" ,width:"17px", height:"15px", borderRadius:"11px", marginLeft:"-7px", marginTop:"22px"}}></div>
                        </div>
                        <div>
                            <p style={{display:"flex", justifyContent:"start", marginTop:"-8px"}}>@Ferya -for KAI</p>
                            <p style={{color:"#ccc", display:"flex", justifyContent:"start", marginTop:"-16px"}}>company</p>
                            <p style={{display:"flex", justifyContent:"start", marginTop:"-16px"}}>89-921 Maiapoula Place</p>
                            <p style={{display:"flex", justifyContent:"start", marginTop:"-16px"}}>Walane, HI 96792</p>
                            <p style={{display:"flex", justifyContent:"start", marginTop:"-16px"}}>UNITED STATES</p>
                            <p style={{color:"#ccc", display:"flex", justifyContent:"start", marginTop:"-16px"}}>phone</p>
                        </div>
                    </div>
                    </div>
                </div>

                <div style={{display:"flex"}}>
                    <div style={{display:"flex"}}>
                        <div style={{border:"2px solid #ccc", width:"17px", height:"17px", borderRadius:"3px", marginLeft:"6px", marginRight:"11px"}}></div>
                        <p style={{width: "191px", marginTop: "-3px"}}>Return adresses is different from sender address</p>
                    </div>
                    <div style={{display:"flex"}}>
                        <div style={{border:"2px solid #ccc", width:"17px", height:"17px", borderRadius:"3px",marginLeft:"20px", marginRight:"11px"}}></div>
                        <p style={{marginTop: "-3px"}}>Residential</p>
                    </div>
                </div>

                <div style={{border:"2px solid rgb(204, 204, 204)", borderRadius: "29px",display: "flex",columnGap: "60px",padding: "4px",height: "37px",display: "flex",justifyContent: "center",alignItems: "center",marginLeft: "auto",marginRight: "auto", width:"28vw", color:"#545cd8"}}>
                    <div>
                        <p>Select Service</p>
                    </div>
                    <div>
                        <p>Package</p>
                    </div>
                    <div style={{width: "111px", height: "36px", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "19px", backgroundColor:"#545cd8"}}>
                        <p style={{color:"#fff"}}>Details</p>
                    </div>
                </div>

                <div style={{display:"flex", columnGap:"17px", paddingLeft:"6px", marginTop:"12px"}}>
                    <div style={{display:"flex", flexDirection:"column"}}>
                        <label style={{fontSize:"14px", color:"rgb(135 131 131)", display:"flex", justifyContent:"start"}} for="units">Units</label>
                            <select style={{width: "113px", padding: "7px", borderRadius: "3px"}} id="units">
                                <option  value="inlboz">in/lb/oz</option>
                            </select>
                    </div>
                    <div style={{display:"flex", flexDirection:"column"}}>
                        <label style={{fontSize:"14px", color:"rgb(135 131 131)", display:"flex", justifyContent:"start"}} for="scale">Scale</label>
                            <select style={{width: "128px", padding: "7px", borderRadius: "3px"}} id="scale">
                                <option value="Station1">Station 1</option>
                            </select>
                    </div>
                    <div style={{display:"flex", flexDirection:"column"}}>
                        <label style={{fontSize:"14px", color:"rgb(135 131 131)", display:"flex", justifyContent:"start"}} for="scaleReading">Scale Reading</label>
                            <select style={{width: "174px", padding: "7px", borderRadius: "3px"}} id="scaleReading">
                                <option value="---">---</option>
                            </select>
                    </div>
                </div>



                <div style={{display:"flex", columnGap:"17px", paddingLeft:"6px", marginTop:"12px"}}>
                    <div style={{display:"flex", flexDirection:"column"}}>
                        <label style={{fontSize:"14px", color:"rgb(135 131 131)", display:"flex", justifyContent:"start", width:"149px"}} for="custompackagetype">Custom Package Type</label>
                            <select style={{width: "157px", padding: "7px", borderRadius: "3px"}} id="custompackagetype">
                                <option  value="pmlargebox">PM Large Box</option>
                            </select>
                    </div>
                    <div style={{display:"flex", flexDirection:"column"}}>
                        <label style={{fontSize:"14px", color:"rgb(135 131 131)", display:"flex", justifyContent:"start"}} for="length">Length</label>
                            <select style={{width: "84px", padding: "7px", borderRadius: "3px"}} id="length">
                                <option value="12in">12 in</option>
                            </select>
                    </div>
                    <div style={{display:"flex", flexDirection:"column"}}>
                        <label style={{fontSize:"14px", color:"rgb(135 131 131)", display:"flex", justifyContent:"start"}} for="width">Width</label>
                            <select style={{width: "84px", padding: "7px", borderRadius: "3px"}} id="width">
                                <option value="9.25in">9.25 in</option>
                            </select>
                    </div>
                    <div style={{display:"flex", flexDirection:"column"}}>
                        <label style={{fontSize:"14px", color:"rgb(135 131 131)", display:"flex", justifyContent:"start"}} for="height">Height</label>
                            <select style={{width: "84px", padding: "7px", borderRadius: "3px"}} id="height">
                                <option value="9.25in">7.5 in</option>
                            </select>
                    </div>
                </div>


                <div style={{display:"flex", columnGap:"17px", paddingLeft:"6px", marginTop:"12px"}}>
                    <div style={{display:"flex", flexDirection:"column"}}>
                        <label style={{fontSize:"14px", color:"rgb(135 131 131)", display:"flex", justifyContent:"start"}} for="weight">Weight</label>
                            <select style={{width: "87px", padding: "7px", borderRadius: "3px"}} id="weight">
                                <option  value="1481lb">1.481 lb</option>
                            </select>
                    </div>
                    <div style={{display:"flex", flexDirection:"column"}}>
                        <label style={{fontSize:"14px", color:"rgb(135 131 131)", display:"flex", justifyContent:"start"}} for="ounce">Ounces</label>
                            <select style={{width: "87px", padding: "7px", borderRadius: "3px"}} id="ounce">
                                <option value="oz">oz</option>
                            </select>
                    </div>
                    <div style={{display:"flex", flexDirection:"column"}}>
                        <label style={{fontSize:"14px", color:"rgb(135 131 131)", display:"flex", justifyContent:"start"}} for="insureamt">Insure AMT</label>
                            <select style={{width: "140px", padding: "7px", borderRadius: "3px"}} id="insureamt">
                                <option value="20">$ 20.00</option>
                            </select>
                    </div>
                    <button style={{width: "41px", height: "31px", marginTop: "19px", fontSize: "20px", color: "#fff", backgroundColor:"#49b7fe", border:"none", borderRadius:"4px"}}>+</button>
                </div>


                <div style={{display:"flex", columnGap:"4%", marginTop:"16px"}}>
                    <div style={{display:"flex", flexDirection:"column", marginLeft:"6px"}}>
                        <p>Total Quantity</p>
                        <p style={{marginTop:"-10px", color:"rgb(116 108 108)", display:"flex", justifyContent:"start"}}>5</p>
                    </div>
                    <div style={{display:"flex", flexDirection:"column"}}>
                        <p>Total Weight</p>
                        <p style={{marginTop:"-10px", color:"rgb(116 108 108)", display:"flex", justifyContent:"start"}}>1.481 lb</p>
                    </div>
                    <div style={{display:"flex", flexDirection:"column"}}>
                        <p>Ounce</p>
                        <p style={{marginTop:"-10px", color:"rgb(116 108 108)", display:"flex", justifyContent:"start"}}>0 OZ</p>
                    </div>
                </div>


                <div style={{display:"flex", columnGap:"17px", paddingLeft:"6px", marginTop:"12px"}}>
                    <div style={{display:"flex", flexDirection:"column"}}>
                    <label style={{fontSize:"14px", color:"rgb(135 131 131)", display:"flex", justifyContent:"start"}} for="content">Content Description(184/250)</label>
                            <select style={{width: "203px", padding: "7px", borderRadius: "3px"}} id="content">
                                <option value="brust">$ Brust Blizard Liquad Stra</option>
                            </select>
                    </div>
                    <div style={{display:"flex", flexDirection:"column"}}>
                    <label style={{fontSize:"14px", color:"rgb(135 131 131)", display:"flex", justifyContent:"start"}} for="signature">Signature</label>
                            <select style={{width: "189px", padding: "7px", borderRadius: "3px"}} id="signature">
                                <option value="20">No Signature Required</option>
                            </select>
                    </div>
                </div>

                <div style={{display:"flex", flexDirection:"column", marginTop:"10px", marginLeft:"6px"}}>
                    <label style={{fontSize:"14px", color:"rgb(135 131 131)", display:"flex", justifyContent:"start"}} for="dangerous">Dangerous Goods</label>
                            <select style={{width: "189px", padding: "7px", borderRadius: "3px"}} id="signature">
                                <option value="---">---</option>
                            </select>
                    </div>

                    <div style={{display:"flex", marginTop:"8px"}}>
                    <div style={{display:"flex"}}>
                        <div style={{border:"2px solid #ccc", width:"17px", height:"17px", borderRadius:"3px", marginLeft:"6px", marginRight:"-20px"}}></div>
                        <p style={{width: "191px", marginTop: "-3px"}}>Dangerous Goods</p>
                    </div>
                    <div style={{display:"flex"}}>
                        <div style={{border:"2px solid #ccc", width:"17px", height:"17px", borderRadius:"3px",marginLeft:"20px", marginRight:"11px"}}></div>
                        <p style={{marginTop: "-3px"}}>Contains Live Bees</p>
                    </div>
                </div>

                <div style={{display:"flex", backgroundColor:"rgb(231 226 226)", alignItems:"center", height:"30px", borderRadius:"6px", width:"30vw", marginLeft:"6px"}}>
                        <div style={{border:"2px solid #ccc", width:"17px", height:"17px", borderRadius:"3px", marginLeft:"6px", marginRight:"11px"}}></div>
                        <p style={{width: "191px", marginTop: "11px" , marginLeft:"-17px"}}>Send notification email</p>
                    </div>
            </div>

            <div style={{marginTop:"43px", boxShadow:"0 6px 6px #ccc",height: "34px",display: "flex",alignItems: "center",padding: "7px", backgroundColor:"#fff"}}>
                <div>
                    <button style={{width:"157px", height:"35px", backgroundColor:"rgb(94 85 85)", color:"#fff", borderRadius:"6px", border:"none"}}>Save Shipment Form</button>
                </div>
            </div>
           
            </div>



            <div style={{boxShadow:" 0 6px 6px #ccc", width:"20vw", marginLeft:"32px", height:'103vh', padding:"6px"}}>
                <div style={{display:"flex"}}>
                    <div style={{display:"flex", flexDirection:"column"}}>
                        <p style={{display:"flex", justifyContent:"start"}}>USPS</p>
                        <p style={{display:"flex", justifyContent:"start", marginTop:"-16px"}}>Priority (1-3 days)</p>
                    </div>
                    <div>
                        <img src={tagIcn} style={{marginLeft:"62px", marginTop:"8px"}}/>
                    </div>
                </div>
                <div style={{display:"flex", flexDirection:"column"}}>
                    <p style={{color:"rgb(165 160 160)", display:"flex", justifyContent:"start"}}>Faddede Flat</p>
                    <p style={{color:"rgb(165 160 160)", display:"flex", justifyContent:"start", marginTop:"-16px"}}>Rate Envelope</p>
                    <p style={{color:"rgb(165 160 160)", display:"flex", justifyContent:"start"}}>Adult Signature Required</p>
                </div>
                <div style={{display:"flex", color:"rgb(165 160 160)"}}>
                    <div style={{display:"flex", flexDirection:"column"}}>
                        <p style={{display:"flex", justifyContent:"start", marginTop:"0px"}}>Base Rate</p>
                    </div>
                    <div>
                        <p style={{marginLeft:"177px", marginTop:"3px"}}>$8.00</p>
                    </div>
                </div>
                <div style={{display:"flex", color:"rgb(165 160 160)"}}>
                    <div style={{display:"flex", flexDirection:"column"}}>
                        <p style={{display:"flex", justifyContent:"start", marginTop:"0px"}}>Adult Signature</p>
                    </div>
                    <div>
                        <p style={{marginLeft:"137px", marginTop:"3px"}}>$8.00</p>
                    </div>
                </div>

                <hr style={{marginLeft:"-7px", width:"104%"}}></hr>
                    
                <div style={{display:"flex"}}>
                    <div style={{display:"flex", flexDirection:"column"}}>
                        <p style={{display:"flex", justifyContent:"start", marginTop:"1px", fontSize:"22px"}}>Total</p>
                        <p style={{display:"flex", justifyContent:"start", marginTop:"-16px", color:"#56aff9"}}>Quoted Weight/Type(s)</p>
                        <p style={{display:"flex", justifyContent:"start", marginTop:"-16px", color:"#56aff9"}}>1.481 lb.actual</p>
                        <p style={{display:"flex", justifyContent:"start"}}>Estimated Arrival Date</p>
                        <p style={{display:"flex", justifyContent:"start", marginTop:"-16px", width:"204px"}}>Tuesday, 8/10/2021 5:00pm</p>
                    </div>
                    <div>
                        <p style={{marginLeft:"30px", marginTop:"4px", fontSize:"22px"}}><strong>$20.00</strong></p>
                    </div>
                </div>

                <div style={{display:"flex", flexDirection:"column", backgroundColor:'rgb(231 226 226)', borderRadius:"6px", padding:"6px"}}>
                        <div style={{display:'flex', flexDirection:"row"}}>
                            <QuestionOutlined style={{display:"flex", justifyContent:"start",marginTop: "20px",backgroundColor: "black", borderRadius: "9px", color:"#FFF", width:"18px", height:"18px"}} />
                            <p style={{display:"flex", justifyContent:"start"}}>Did you Mean?</p>
                        </div>
                        <div>
                            <p style={{display:"flex", justifyContent:"start"}}>89-921 MAIAPOULA PL</p>
                            <p style={{display:"flex", justifyContent:"start", marginTop:"-16px"}}>WAIANE, HI</p>
                            <p style={{display:"flex", justifyContent:"start", marginTop:"-16px"}}>96792-3912</p>
                            <p style={{display:"flex", justifyContent:"center", alignItems:"center", width:"67%", borderRadius:"8px", marginLeft:"auto", marginRight:"auto", backgroundColor:"rgb(94 85 85)", color:"#fff"}}>USE USPS VERIFIED ADDRESS</p>
                        </div>
                    </div>
                    <p style={{display:"flex", justifyContent:"center", alignItems:"center", width:"55%", borderRadius:"8px", marginLeft:"auto", marginRight:"auto", backgroundColor:"rgb(114 175 93)", color:"#fff", padding:"19px", height:"12px"}}>SHIP USPS PRIORITY (1-3 Days)</p>

                    <div style={{boxShadow:"0 6px 6px #ccc", marginTop:"47px", display:"flex", padding:"6px"}}>
                        <div>
                            <div style={{display:"flex", justifyContent:"space-between"}}>
                                <p>7 Items</p>
                                <p style={{padding:"5px", borderRadius:"5px", backgroundColor:"rgb(94 85 85)", color:"#fff"}}>PACKAGING SLIP</p>
                            </div>

                            <hr></hr>

                            <div style={{display:'flex'}}>
                                <div style={{display:"flex", flexDirection:"column"}}>
                                    <p style={{display:"flex", justifyContent:"start", border: "2px solid #Ccc",width: "18px", padding: "8px", alignItems: "center", borderRadius: "6px", color:"rgb(145, 175, 36)"}}>5</p>
                                    <p style={{display:"flex", justifyContent:"start", marginTop:"-16px"}}>of 3</p>
                                </div>
                                <div style={{display:"flex", flexDirection:"column"}}>
                                    <p style={{display:"flex", justifyContent:"start", width:"68%", marginLeft:"83px"}}>Bset Bizzard E Liquid Straw-Brust 60ml 3MG</p>
                                    <p style={{display:"flex", justifyContent:"start", marginTop:"-16px", marginLeft:"36%", color:"#489ff5"}}>$8.00</p>
                                </div>
                            </div>

                            <hr></hr>


                            <div style={{display:'flex'}}>
                                <div style={{display:"flex", flexDirection:"column"}}>
                                    <p style={{display:"flex", justifyContent:"start", border: "2px solid #Ccc",width: "18px", padding: "8px", alignItems: "center", borderRadius: "6px", color:"rgb(145, 175, 36)"}}>5</p>
                                    <p style={{display:"flex", justifyContent:"start", marginTop:"-16px"}}>of 3</p>
                                </div>
                                <div style={{display:"flex", flexDirection:"column"}}>
                                    <p style={{display:"flex", justifyContent:"start", width:"68%", marginLeft:"83px"}}>Bset Bizzard E Liquid Straw-Brust 60ml 3MG</p>
                                    <p style={{display:"flex", justifyContent:"start", marginTop:"-16px", marginLeft:"36%", color:"#489ff5"}}>$8.00</p>
                                </div>
                            </div>


                            <hr></hr>

                            <div style={{display:'flex'}}>
                                <div style={{display:"flex", flexDirection:"column"}}>
                                    <p style={{display:"flex", justifyContent:"start", border: "2px solid #Ccc",width: "18px", padding: "8px", alignItems: "center", borderRadius: "6px", color:"rgb(145, 175, 36)"}}>5</p>
                                    <p style={{display:"flex", justifyContent:"start", marginTop:"-16px"}}>of 3</p>
                                </div>
                                <div style={{display:"flex", flexDirection:"column"}}>
                                    <p style={{display:"flex", justifyContent:"start", width:"68%", marginLeft:"83px"}}>Bset Bizzard E Liquid Straw-Brust 60ml 3MG</p>
                                    <p style={{display:"flex", justifyContent:"start", marginTop:"-16px", marginLeft:"36%", color:"#489ff5"}}>$8.00</p>
                                </div>
                            </div>

                            <hr></hr>

                            <div style={{display:'flex'}}>
                                <div style={{display:"flex", flexDirection:"column"}}>
                                    <p style={{display:"flex", justifyContent:"start", border: "2px solid #Ccc",width: "18px", padding: "8px", alignItems: "center", borderRadius: "6px", color:"rgb(145, 175, 36)"}}>5</p>
                                    <p style={{display:"flex", justifyContent:"start", marginTop:"-16px"}}>of 3</p>
                                </div>
                                <div style={{display:"flex", flexDirection:"column"}}>
                                    <p style={{display:"flex", justifyContent:"start", width:"68%", marginLeft:"83px"}}>Bset Bizzard E Liquid Straw-Brust 60ml 3MG</p>
                                    <p style={{display:"flex", justifyContent:"start", marginTop:"-16px", marginLeft:"36%", color:"#489ff5"}}>$8.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                
            </div>

        </div>
    )
}

export default Orders
