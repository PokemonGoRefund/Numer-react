import { useState } from "react"
import {  Button, Container, Form, Table } from "react-bootstrap";
// import { evaluate } from 'mathjs'
import {Link} from 'react-router-dom'
import 'chart.js/auto'
import { Line } from "react-chartjs-2";
import * as math from 'mathjs'


const Onepoint =()=>{
    const print = () =>{
        console.log(data)
        setValueIter(data.map((x)=>x.iteration));
        setValueXold(data.map((x)=>x.Xold));
        setValueXnew(data.map((x)=>x.Xnew));
        return(
            <Container>
                <Table striped bordered hover variant="dark" >
                    <thead>
                        <tr>
                            <th width="10%">Iteration</th>
                            <th width="30%">XOLD</th>
                            <th width="30%">XNEW</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((element, index)=>{
                            return  (
                            <tr key={index}>
                                <td className='tdd'>{element.iteration}</td>
                                <td>{element.Xold}</td>
                                <td>{element.Xnew}</td>                           
                            </tr>)
                        })}
                    </tbody>
                </Table>
            </Container>          
        );
    }

    const error =(xold, xnew)=> Math.abs((xnew-xold)/xnew)*100;

    function calFunction(Equation, xq) {
        try {
            let eq = math.parse(Equation)
            return eq.evaluate({ x: xq })
        } catch (error) {
            
        }

    }
   
    const CalOnepoint = (start) => {
        var xold,xnew,ea;
        var iter = 0;
        var MAX = 50;
        xold = parseFloat(start);

        const e = 0.00001;
        var obj={};
        do
        {
            // scope = {
            //     x:xold,
            // }
            xnew = calFunction(Equation,xold);
            // xnew = evaluate(Equation, xold)
            iter ++;

            ea = error(xold, xnew);
            
            obj = {
                iteration:iter,
                Xold:xold,
                Xnew:xnew
            }
            data.push(obj)

            xold = xnew;
            
        }while(ea>e && iter<MAX)
        setX(xold)
    }

    const data =[];
    const [valueIter, setValueIter] = useState([]);
    const [valueXold, setValueXold] = useState([]);
    const [valueXnew, setValueXnew] = useState([]);
    // const [valueXr, setValueXr] = useState([]);
    const state = {
        labels: valueIter,
        datasets: [
          {
            label: 'Xold',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'white',
            borderColor: 'red',
            borderWidth: 2,
            data: valueXold
          },
          {
            label: 'Xnew',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'white',
            borderColor: 'green',
            borderWidth: 2,
            data: valueXnew
          }
        //   {
        //     label: 'Xr',
        //     fill: false,
        //     lineTension: 0.5,
        //     backgroundColor: 'white',
        //     borderColor: 'blue',
        //     borderWidth: 2,
        //     data: valueXr
        //   }
        ]
    }
   
    // const [Data,setState] = useState([])
    // const [Data,setData] = useState([])
    const [html, setHtml] = useState(null);
    const [Equation,setEquation] = useState("(x^4)-13")
    const [X,setX] = useState(0)
    const [Start,setStart] = useState(0)
    // const [XR,setXR] = useState(0)

    const inputEquation = (event) =>{
        console.log(event.target.value)
        setEquation(event.target.value)
    }

    const inputStart = (event) =>{
        console.log(event.target.value)
        setStart(event.target.value)
    }

    const calculateRoot = (event) =>{
        const startnum = parseFloat(Start)
        // const xrnum = parseFloat(XR)
        //console.log(xlnum);
        //console.log(xrnum);
        // setHtml(print());
        CalOnepoint(startnum);
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
                    <h2 className='course-header'>One Point Method </h2> 
                </header>
                <p style={{padding:'0.5rem'}}></p>
                    <Form.Group className='rooteq-course-div'>
                        <Form.Label style={{padding:'1rem'}}>Input f(x)</Form.Label>
                        <input type="text" id="Equation" value={Equation} onChange={inputEquation} style={{height:"30px",width:"10%", margin:"0 auto"}} className="form-control"></input>
                        <Form.Label style={{padding:'1rem'}}>Start</Form.Label>
                        <input type="number" id="Start" onChange={inputStart} style={{height:"30px",width:"10%", margin:"0 auto"}} className="form-control"></input>
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

export default Onepoint