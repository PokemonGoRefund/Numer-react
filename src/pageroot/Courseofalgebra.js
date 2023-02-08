import React from 'react'
import {Link} from 'react-router-dom'
import './Courseofroot.css'
import { Button } from 'antd';

function Courseofalgebra() {
    return (

        <div className='course'>

            <header>
                <Link to="/" ><img className='bt_home2' src='/home.png' alt='home'/></Link>
                {/* <Link to="/" ><Button type="primary" className='bt_home'> Home </Button></Link> */}
                <h2 className='course-header'>Linear Algebra </h2> 
            </header> 

            <div className='row-course1'>               

                <div className='bg-rooteq'>

                    <div className='rooteq-course-div'>

                        <h2 style={{padding:'2.5rem'}}>    
                            Crammer's Rule
                        </h2>
                    
                        <p style={{padding:'1rem'}}></p>
                        
                        <Link to="./crammer" ><Button type="primary" className='bt_root_of_equation'> Crammer's Rule </Button></Link>

                    </div>
                
                </div>

                <div className='bg-linear'>

                    <div className='rooteq-course-div'>

                        <h2 style={{padding:'2.5rem'}}>    
                            Gauss Elimination Method
                        </h2>
                    
                        <p style={{padding:'1rem'}}></p>

                        <Link to="./GaussElimination"><Button type="primary" className='bt_root_of_equation'> Gauss Elimination Method </Button></Link>
                       
                    </div>
                    
                </div>

                <div className='bg-polation'>

                    <div className='rooteq-course-div'>

                        <h2 style={{padding:'2.5rem'}}>    
                            Gauss Jordan Method
                        </h2>
                    
                        <p style={{padding:'1rem'}}></p>

                        <Link to="./Gaussjordan"><Button type="primary" className='bt_root_of_equation'> Gauss Jordan Method </Button></Link>

                    </div>
                    
                </div>

                <div className='bg-linearRegression'>

                    <div className='rooteq-course-div'>

                        <h2 style={{padding:'2.5rem'}}>    
                            Jacobi Method
                        </h2>
                    
                        <p style={{padding:'1rem'}}></p>

                        <Link to="./Newton"><Button type="primary" className='bt_root_of_equation'> Jacobi Method </Button></Link>

                    </div>
                    
                </div>

                <div className='bg-numericalDifferentiation'>

                    <div className='rooteq-course-div'>

                        <h2 style={{padding:'2.5rem'}}>    
                            Gauss Seidel Method
                        </h2>
                    
                        <p style={{padding:'1rem'}}></p>

                        <Link to="./Newton"><Button type="primary" className='bt_root_of_equation'> Gauss Seidel Method </Button></Link>

                    </div>
                    
                </div>

                <div className='bg-ordinaryDifferentiation'>

                    <div className='rooteq-course-div'>

                        <h2 style={{padding:'2.5rem'}}>    
                            Conjugate Method
                        </h2>
                    
                        <p style={{padding:'1rem'}}></p>

                        <Link to="./Newton"><Button type="primary" className='bt_root_of_equation'> Conjugate Method </Button></Link>

                    </div>
                    
                </div>
         
            </div>
                
        </div>
        
        
    )
}

export default Courseofalgebra