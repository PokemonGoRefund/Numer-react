import React from 'react'
import {Link} from 'react-router-dom'
import './Courseofroot.css'
import { Button } from 'antd';

function Courseofregression() {
    return (

        <div className='course'>
            
            <header>
                <Link to="/" ><img className='bt_home2' src='/home.png' alt='home'/></Link>
                {/* <Link to="/" ><Button type="primary" className='bt_home'> Home </Button></Link> */}
                <h2 className='course-header'>Regression </h2> 
            </header>

            <div className='row-course1'>               

                <div className='bg-rooteq'>

                    <div className='rooteq-course-div'>

                        <h2 style={{padding:'2.5rem'}}>    
                            Linear Regression
                        </h2>
                    
                        <p style={{padding:'1rem'}}></p>
                        
                        <Link to="./Regression" ><Button type="primary" className='bt_root_of_equation'> Linear Regression </Button></Link>

                    </div>
                
                </div>

                <div className='bg-linear'>

                    <div className='rooteq-course-div'>

                        <h2 style={{padding:'2.5rem'}}>    
                            Polynomial Regression
                        </h2>
                    
                        <p style={{padding:'1rem'}}></p>

                        <Link to="./Falseposition"><Button type="primary" className='bt_root_of_equation'> Polynomial Regression </Button></Link>
                       
                    </div>
                    
                </div>

                <div className='bg-polation'>

                    <div className='rooteq-course-div'>

                        <h2 style={{padding:'2.5rem'}}>    
                            Multiple Regression
                        </h2>
                    
                        <p style={{padding:'1rem'}}></p>

                        <Link to="./Onepoint"><Button type="primary" className='bt_root_of_equation'> Multiple Regression </Button></Link>

                    </div>
                    
                </div>
         
            </div>
                
        </div>
        
        
    )
}

export default Courseofregression