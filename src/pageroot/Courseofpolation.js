import React from 'react'
import {Link} from 'react-router-dom'
import './Courseofroot.css'
import { Button } from 'antd';

function Courseofpolation() {
    return (

        <div className='course'>

            <header>
                <Link to="/" ><img className='bt_home2' src='/home.png' alt='home'/></Link>
                {/* <Link to="/" ><Button type="primary" className='bt_home'> Home </Button></Link> */}
                <h2 className='course-header'>Interpolation and Exterpolation </h2> 
            </header>         

            <div className='row-course1'>               

                <div className='bg-rooteq'>

                    <div className='rooteq-course-div'>

                        <h2 style={{padding:'2.5rem'}}>    
                            Newton's Divided-Differences Method
                        </h2>
                    
                        <p style={{padding:'1rem'}}></p>
                        
                        <Link to="./inpolation" ><Button type="primary" className='bt_root_of_equation'> Newton's Differences Method </Button></Link>

                    </div>
                
                </div>

                <div className='bg-linear'>

                    <div className='rooteq-course-div'>

                        <h2 style={{padding:'2.5rem'}}>    
                            Lagrange Interpolation Method
                        </h2>
                    
                        <p style={{padding:'1rem'}}></p>

                        <Link to="./lagrange"><Button type="primary" className='bt_root_of_equation'> Lagrange Interpolation Method </Button></Link>
                       
                    </div>
                    
                </div>
         
            </div>
                
        </div>
        
        
    )
}

export default Courseofpolation