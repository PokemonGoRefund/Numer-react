import { useState } from "react"
import {  Button, Container, Form, Table } from "react-bootstrap";
import { evaluate } from 'mathjs'
import {Link} from 'react-router-dom'
import 'chart.js/auto'
import { Line } from "react-chartjs-2";
import './Bisection.css'
import axios from "axios";

const Bisection =()=>{

    const print = () =>{
        // console.log(data)
        setValueIter(data.map((x)=>x.iteration));
        setValueXl(data.map((x)=>x.Xl));
        setValueXm(data.map((x)=>x.Xm));
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
                            <th width="30%">XM</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((element, index)=>{
                            return  (
                            <tr key={index}>
                                <td className='tdd'>{element.iteration}</td>
                                <td>{element.Xl}</td>
                                <td>{element.Xr}</td>
                                <td>{element.Xm}</td>                           
                            </tr>)
                        })}
                    </tbody>
                </Table>
            </Container>          
        );
    }

    const error =(xold, xnew)=> Math.abs((xnew-xold)/xnew)*100;
   
    const Calbisection = (xl, xr) => {
        var xm,fXm,fXr,ea,scope;
        var iter = 0;
        var MAX = 50;
        const e = 0.00001;
        var obj={};
        do
        {
            xm = (xl+xr)/2.0;
            scope = {
                x:xr,
            }
            fXr = evaluate(Equation, scope)

            scope = {
                x:xm,
            }
            fXm = evaluate(Equation, scope)

            iter ++;
            if (fXm*fXr > 0)
            {
                ea = error(xr, xm);
                obj = {
                    iteration:iter,
                    Xl:xl,
                    Xm:xm,
                    Xr:xr
                }
                data.push(obj)
                xr = xm;
            }
            else if (fXm*fXr < 0)
            {
                ea = error(xl, xm);
                obj = {
                    iteration:iter,
                    Xl:xl,
                    Xm:xm,
                    Xr:xr
                }
                data.push(obj)
                xl = xm;
            }
        }while(ea>e && iter<MAX)
        setX(xm)
    }

    const data =[];
    const [valueIter, setValueIter] = useState([]);
    const [valueXl, setValueXl] = useState([]);
    const [valueXm, setValueXm] = useState([]);
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
            label: 'Xm',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'white',
            borderColor: 'green',
            borderWidth: 2,
            data: valueXm
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
    const [Equation,setEquation] = useState("(x^4)-13")
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
        Calbisection(xlnum,xrnum);
        //setData((Data)=>[...Data,data])
        //console.log(data);
        //console.log(Data);
       
        setHtml(print());
       
        // setState(data);
        // console.log(valueIter)
        // console.log(valueXl)
        event.preventDefault()
    }

    const getstartdata=(event)=>{
        axios.get("http://localhost:3005/comments")
        .then(res => {
          const data = res.data
          console.log(data)
          setXR(res.data[0].xr)
          setXL(res.data[0].xl)
        //   setArrayA(res.data[0].x)
        //   setArrayB(res.data[0].x)
        //   this.setState({arrx:(res.data[0].x)})
        //   this.setState({arry:(res.data[0].y)})

        //   this.setState({x0:(res.data[0].x0)})
          console.log("x: "+res.data[0].xr+"y"+res.data[0].xl)
      })
      event.preventDefault()
    }

    return (
            <Container >
                <Form >
                <header>
                    <Link to="/" ><img className='bt_home2' src='/home.png' alt='home'/></Link>
                    {/* <Link to="/" ><Button type="primary" className='bt_home'> Home </Button></Link> */}
                    <h2 className='course-header'>Bisection Equation </h2> 
                </header>
                <p style={{padding:'0.5rem'}}></p>
                    <Form.Group className='rooteq-course-div'>
                    <Form.Label style={{padding:'1rem'}}>Input f(x)</Form.Label>
                        <input type="text" id="equation" value={Equation} onChange={inputEquation} style={{height:"30px",width:"10%", margin:"0 auto"}} className="form-control"></input>
                        <Form.Label style={{padding:'1rem'}}>Input XL</Form.Label>
                        <input type="number" id="XL" value={XL} onChange={inputXL} style={{height:"30px",width:"10%", margin:"0 auto"}} className="form-control"></input>
                        <Form.Label style={{padding:'1rem'}}>Input XR</Form.Label>
                        <input type="number" id="XR" value={XR} onChange={inputXR} style={{height:"30px",width:"10%", margin:"0 auto"}} className="form-control"></input>
                    </Form.Group>
                    <Button type="primary" className='bt_calculate' onClick={calculateRoot}> Calculate </Button>
                    <Button type="primary" className='bt_calculate' onClick={getstartdata}> API </Button>
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

export default Bisection