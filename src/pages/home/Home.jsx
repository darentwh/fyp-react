import React from 'react'
import './Home.css'

export default function Home(){
    return(
        <div className="home">
            <div className="midWrap">
                <div className="writings">
                    Final Year Project,
                </div>
                <div className="writings2">
                    <b>Proj No</b>: C105 <br/>
                    <b>Main Supervisor</b>: Assoc Prof Rajesh Piplani <br/>
                    <b>Title</b>: Development of an application for production scheduling and requirement planning	<br/>
                    <b>Objective</b>: Develop an computer-based tool that allows <b>forecasting, master production scheduling, and material requirement planning</b> for data seamlessly and in an integrated manner. The tool should be able to develop plans for different set of customer orders/forecast input. <br/>
                    <b>Scope</b>: Scope would be limited to planning for a mid-size company, using same data, but allowing data to be ported from one application to another, including any changes to data. Data will be developed based on reference material.
                </div>
            </div>
        </div>
    )
}