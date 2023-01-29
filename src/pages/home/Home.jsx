import React from 'react'
import { useEffect } from 'react';
import Button from '@mui/material/Button';
import './Home.css'

export default function Home(){
    useEffect(()=>{
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry.intersectionRatio, entry.isIntersecting)
                if (entry.isIntersecting){
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        });
        const hiddenElements = document.querySelectorAll('.hidden');
        
        hiddenElements.forEach((el) => observer.observe(el));
    });
    return(
        <div className="home">
            <div className="midWrap">
                <div>
                    <section className="hidden">
                        <div className="container">
                            <p>
                                <h1>
                                <b>Final Year Project <span style={{color:'#AD6ADF'}}>C105</span></b></h1><br/>
                                <b>Main Supervisor</b>: Assoc Prof Rajesh Piplani<br/><br/>
                                <b>Title</b>: Development of an application for production scheduling and requirement planning<br/>
                            </p>
                        </div>                       
                    </section>
                    <section>
                        <b>Functions</b><br/>
                        <div className="functions">
                            <div className="logo hidden">
                                <Button sx={{
                                    p: 2, 
                                    border: '#f1f1f1',
                                    borderRadius: '16px',
                                    m:2,
                                    color:'purple',
                                    fontFamily:'Arial',
                                    textTransform: 'none',
                                    fontSize: 14,
                                    boxShadow: 2
                                }}>
                                    Demand Forecasting
                                </Button>
                            </div>
                            <div className="logo hidden">              
                                <Button sx={{
                                    p: 2, 
                                    border: '#f1f1f1',
                                    borderRadius: '16px',
                                    m:2,
                                    color:'purple',
                                    fontFamily:'Arial',
                                    textTransform: 'none',
                                    boxShadow: 2
                                }}>
                                    Master Production Scheduling
                                </Button>
                            </div>
                            <div className="logo hidden">
                                <Button sx={{
                                    p: 2, 
                                    border: '#f1f1f1',
                                    borderRadius: '16px',
                                    m:2,
                                    color:'purple',
                                    fontFamily:'Arial',
                                    textTransform: 'none',
                                    boxShadow: 2
                                    }}>
                                    Material Requirement Planning
                                </Button>
                            </div>
                        </div>
                    </section>
                    <section className="hidden">    
                        <b>Title</b>: Development of an application for production scheduling and requirement planning	<br/>
                    </section>
                    <section className="hidden">
                        <b>Objective</b>: Develop an computer-based tool that allows <b>forecasting, master production scheduling, and material requirement planning</b> for data seamlessly and in an integrated manner. The tool should be able to develop plans for different set of customer orders/forecast input. <br/>
                    </section>
                    <section className="hidden">
                        <b>Scope</b>: Scope would be limited to planning for a mid-size company, using same data, but allowing data to be ported from one application to another, including any changes to data. Data will be developed based on reference material.
                    </section>
                </div>
            </div>
        </div>
    )
}