import { useState } from "react"
import {  Button, Container, Form, Table } from "react-bootstrap";
import { evaluate } from 'mathjs'
import {Link} from 'react-router-dom'
import 'chart.js/auto'
import { Line } from "react-chartjs-2";
// import * as math from 'mathjs'

const Falseposition =()=>{
    const print = () =>{
        console.log(data)
        setValueIter(data.map((x)=>x.iteration));
        setValueXl(data.map((x)=>x.Xl));
        setValueX1(data.map((x)=>x.X1));
        setValueXr(data.map((x)=>x.Xr));
        // setState(state);
        return(
            <Container>
                <Table striped bordered hover variant="dark" >
                    <thead>
                        <tr>
                            <th width="10%">Iteration</th>
                            <th width="30%">XL</th>
                            <th width="30%">XR</th>
                            <th width="30%">X1</th>
                        </tr>
                    </thead>
                    <tbody >
                        {data.map((element, index)=>{
                            return  (
                            <tr key={index}>
                                <td className='tdd'>{element.iteration}</td>
                                <td>{element.Xl}</td>
                                <td>{element.Xr}</td>
                                <td>{element.X1}</td>
                                
                            </tr>)
                        })}
                    </tbody>
                </Table>
            </Container>          
        );
    }

    const error =(xold, xnew)=> Math.abs((xnew-xold)/xnew)*100;
   
    // function calFunction(Equation, xq) {

    //     try {
    //         let eq = math.parse(Equation)
    //         return eq.evaluate({ x: xq })
    //     } catch (error) {
            
    //     }

    // }

    const CalFalseposition = (xl, xr) => {
        var x1,fX1,fXl,fXr,ea,scope;
        var iter = 0;
        var MAX = 50;
        const e = 0.00001;
        var obj={};
        do
        {
            // let fX1 = calFunction(Equation, x1)
            // let fXl = calFunction(Equation, xl)
            // let fXr = calFunction(Equation, xr)
            scope = {
                x:xr,
            }
            fXr = evaluate(Equation, scope)

            scope = {
                x:xl,
            }
            fXl = evaluate(Equation, scope)
            // fXr = evaluate(Equation, xr)
            // fXl = evaluate(Equation, xl)
            x1 = ((xl * fXr) - (xr * fXl)) / (fXr - fXl);

            scope = {
                x:x1,
            }
            fX1 = evaluate(Equation, scope)

            iter ++;
            if (fX1*fXr > 0)
            {
                ea = error(xr, x1);
                obj = {
                    iteration:iter,
                    Xl:xl,
                    X1:x1,
                    Xr:xr
                }
                data.push(obj)
                xr = x1;
            }
            else if (fX1*fXr < 0)
            {
                ea = error(xl, x1);
                obj = {
                    iteration:iter,
                    Xl:xl,
                    X1:x1,
                    Xr:xr
                }
                data.push(obj)
                xl = x1;
            }
        }while(ea>e && iter<MAX)
        setX(x1)
    }

    const data =[];
    const [valueIter, setValueIter] = useState([]);
    const [valueXl, setValueXl] = useState([]);
    const [valueX1, setValueX1] = useState([]);
    const [valueXr, setValueXr] = useState([]);
    const state = {
        labels: valueIter,
        datasets: [
          {
            label: 'Xl',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'white',
            borderColor: 'red',
            borderWidth: 2,
            data: valueXl
          },
          {
            label: 'X1',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'white',
            borderColor: 'green',
            borderWidth: 2,
            data: valueX1
          },
          {
            label: 'Xr',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'white',
            borderColor: 'blue',
            borderWidth: 2,
            data: valueXr
          }
        ]
    }
   
    // const [Data,setState] = useState([])
    // const [Data,setData] = useState([])
    const [html, setHtml] = useState(null);
    const [Equation,setEquation] = useState("(x^6)-20")
    const [X,setX] = useState(0)
    const [XL,setXL] = useState(0)
    const [XR,setXR] = useState(0)

    const inputEquation = (event) =>{
        console.log(event.target.value)
        setEquation(event.target.value)
    }

    const inputXL = (event) =>{
        console.log(event.target.value)
        setXL(event.target.value)
    }

    const inputXR = (event) =>{
        console.log(event.target.value)
        setXR(event.target.value)
    }

    const calculateRoot = (event) =>{
        const xlnum = parseFloat(XL)
        const xrnum = parseFloat(XR)
        //console.log(xlnum);
        //console.log(xrnum);
        // setHtml(print());
        CalFalseposition(xlnum,xrnum);
        //setData((Data)=>[...Data,data])
        //console.log(data);
        //console.log(Data);
       
        setHtml(print());
       
        // setState(data);
        // console.log(valueIter)
        // console.log(valueXl)
        event.preventDefault()
    }

    return (
            <Container >
                <Form >
                <header>
                    <Link to="/" ><img className='bt_home2' src='/home.png' alt='home'/></Link>
                    {/* <Link to="/" ><Button type="primary" className='bt_home'> Home </Button></Link> */}
                    <h2 className='course-header'>False Position Equation </h2> 
                </header>
                <p style={{padding:'0.5rem'}}></p>
                    <Form.Group className='rooteq-course-div'>
                    <Form.Label style={{padding:'1rem'}}>Input f(x)</Form.Label>
                        <input type="text" id="Equation" value={Equation} onChange={inputEquation} style={{height:"30px",width:"10%", margin:"0 auto"}} className="form-control"></input>
                        <Form.Label style={{padding:'1rem'}}>Input XL</Form.Label>
                        <input type="number" id="XL" onChange={inputXL} style={{height:"30px",width:"10%", margin:"0 auto"}} className="form-control"></input>
                        <Form.Label style={{padding:'1rem'}}>Input XR</Form.Label>
                        <input type="number" id="XR" onChange={inputXR} style={{height:"30px",width:"10%", margin:"0 auto"}} className="form-control"></input>
                    </Form.Group>
                    <Button type="primary" className='bt_calculate' onClick={calculateRoot}> Calculate </Button>
                </Form>
                <br></br>
                <h2 className='rooteq-course-div'>Answer = {X.toPrecision(7)}</h2>
                <Container className='rooteq-course-div'>
                    <Line data={state}/>
                    {html}
                </Container>
               
            </Container>
           
    )
}

export default Falseposition