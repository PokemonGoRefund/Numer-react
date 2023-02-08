import React from 'react'
import {Link} from 'react-router-dom'
import './Courseofroot.css'
import { Button } from 'antd';

function Courseofroot() {
    return (

        <div className='course'>
            
            <header>
                <Link to="/" ><img className='bt_home2' src='/home.png' alt='home'/></Link>

                {/* <Link to="/" ><Button type="primary" className='bt_home'> Home </Button></Link> */}
                <h2 className='course-header'>Root of Equations </h2> 
            </header>

            <div className='row-course1'>               

                <div className='bg-rooteq'>

                    <div className='rooteq-course-div'>

                        <h2 style={{padding:'2.5rem'}}>    
                            Bisection
                        </h2>
                    
                        <p style={{padding:'1rem'}}></p>
                        
                        <Link to="./bisection" ><Button type="primary" className='bt_root_of_equation'> Bisection </Button></Link>

                    </div>
                
                </div>

                <div className='bg-linear'>

                    <div className='rooteq-course-div'>

                        <h2 style={{padding:'2.5rem'}}>    
                            False Position
                        </h2>
                    
                        <p style={{padding:'1rem'}}></p>

                        <Link to="./Falseposition"><Button type="primary" className='bt_root_of_equation'> False Position </Button></Link>
                       
                    </div>
                    
                </div>

                <div className='bg-polation'>

                    <div className='rooteq-course-div'>

                        <h2 style={{padding:'2.5rem'}}>    
                            One Point
                        </h2>
                    
                        <p style={{padding:'1rem'}}></p>

                        <Link to="./Onepoint"><Button type="primary" className='bt_root_of_equation'> One Point Method </Button></Link>

                    </div>
                    
                </div>

                <div className='bg-linearRegression'>

                    <div className='rooteq-course-div'>

                        <h2 style={{padding:'2.5rem'}}>    
                            Newton Raphson
                        </h2>
                    
                        <p style={{padding:'1rem'}}></p>

                        <Link to="./Newton"><Button type="primary" className='bt_root_of_equation'> Newton Raphson </Button></Link>

                    </div>
                    
                </div>

                <div className='bg-numericalDifferentiation'>

                    <div className='rooteq-course-div'>

                        <h2 style={{padding:'2.5rem'}}>    
                            Secant Method
                        </h2>
                    
                        <p style={{padding:'1rem'}}></p>

                        <Link to="./Secant"><Button type="primary" className='bt_root_of_equation'> Secant Method </Button></Link>

                    </div>
                    
                </div>
         
            </div>
                
        </div>
        
        
    )
}

export default Courseofroot