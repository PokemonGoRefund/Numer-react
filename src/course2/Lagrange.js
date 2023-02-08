import { useState } from "react"
import {  Button, Container, Form, Table } from "react-bootstrap";
import {Link} from 'react-router-dom'
import './Inpolation.css'


const Lagrange =()=> {

  const NewTonMethon=(x0)=>{
    var ans = 0;
        for(var i=0;i<X.length;i++){
            var product = Y[i];
            for(var j=0;j<X.length;j++){
                if(i!==j){
                    product = product*(x0-X[j])/(X[i]-X[j])                   
                }               
            }
            ans = ans + product;
            console.log("C"+ans);
        }
    setAns(ans)
  }
    const [ans, setAns] = useState(0)
    const [InputX, setInputX] = useState()
    const [InputY, setInputY] = useState()
    const [InputX0, setInputX0] = useState(0)
    const [X, setX] = useState([]);
    const [Y, setY] = useState([]);

    const updateInputX=(event)=> {
      setInputX(event.target.value)
    }

    const updateInputY=(event)=> {
      setInputY(event.target.value)
    }

    const updateInputX0=(event)=> {
      setInputX0(event.target.value)
    }

    const handleSumit=(event)=> {
      const x0 = InputX0
      NewTonMethon(x0)

      event.preventDefault()
    }
  
    const handleClick=(event)=> {
      var items = X;
      var items2 = Y;

      items.push(parseFloat(InputX));
      items2.push(parseFloat(InputY));
      console.log(X)
      console.log(Y)
      
      setX(items)
      setY(items2)
      setInputX("")
      setInputY("")

      event.preventDefault() 
    }

  
    const renderRows=()=> { 
      return  X.map(function(element, index) { 
                  return (
                    <tr>
                      <td className='tdd'>{index}</td>
                      <td className='tdd'>{element}</td>
                    </tr>
                  )
              })    
    }
  
    const renderRows2=()=> { 
        return  Y.map(function(element, index) {
                    return (
                      <tr>
                        <td className='tdd'>{index}</td>
                        <td className='tdd'>{element}</td>
                      </tr>
                    )
                })           
    }
    
      return (
        
          <Container>
                <Form >
                <header>
                    <Link to="/" ><img className='bt_home2' src='/home.png' alt='home'/></Link>
                    {/* <Link to="/" ><Button type="primary" className='bt_home'> Home </Button></Link> */}
                    <h2 className='course-header'>Lagrange Method </h2> 
                </header>
                <p style={{padding:'0.5rem'}}></p>
                    <Form.Group className='rooteq-course-div'>
                        <Form.Label style={{padding:'1rem'}}>Input X</Form.Label>
                        <input type="number" id="InputX" value={InputX} onChange={updateInputX} style={{height:"30px",width:"10%", margin:"0 auto"}} className="form-control"></input>
                        <Form.Label style={{padding:'1rem'}}>Input Y</Form.Label>
                        <input type="number" id="InputY" value={InputY} onChange={updateInputY} style={{height:"30px",width:"10%", margin:"0 auto"}} className="form-control"></input>
                        <Button type="primary" disabled={InputX===" "||InputY===""} className='bt_inputvalue' onClick={handleClick}> input </Button> 
                    </Form.Group>
                    <div className='input-block'>
                      <Form.Label style={{padding:'0.8rem'}}>Input X0</Form.Label>
                    
                      <input type="number" id="InputX0" onChange={updateInputX0} style={{height:"30px",width:"9.5%", margin:"0 auto"}} ></input>
                    </div>
                    <Button type="primary" disabled={InputX0===""} className='bt_calculate' onClick={handleSumit}> Calculate </Button>

                    <h2 className='rooteq-course-div'>Answer = {ans.toPrecision(7)}</h2>

                </Form>
            <Container >
              <Table striped bordered hover variant="dark" >
                <div className='table-column'>
                  <div className="bg-table">
                    <div className="table-div">
                <thead>
                  <tr>
                    <th width="10%">INDEX</th>
                    <th width="10%">X</th>
                  </tr>
                </thead>
                <tbody>
                  {renderRows()}
                </tbody>
                </div>
                </div>
                <div className="bg-table">
                  <div className="table-div">
                <thead>
                  <tr>
                    <th width="10%">INDEX</th>
                    <th width="10%">y</th>
                  </tr>
                </thead>
                <tbody>
                  {renderRows2()}
                </tbody>
                </div>
                </div>
                </div>
              </Table>
          </Container>
        </Container>
      )
    }
  
export default Lagrange
