import { useState } from "react"
import { Container, Form, Table } from "react-bootstrap";
import {Button} from 'antd'
import * as math from 'mathjs'

const GaussElimination=()=>{
    const [val, setVal] = useState([[]])
    const [show_total, setShow_total] = useState([])
    const [size_array, setSize_array] = useState("")
    const [show_martix_web, setShow_martix_web] = useState([])
    const [check,setCheck] = useState([])
    // const [ans, setAns] = useState(0)

    const invertCalcFunction=(size_array,val,show_web)=>{
        var a = [[]]
        var b  = []
        var k=0,i=0,j=0
        for(i=0;i<size_array;i++)
        {
          a[i]= [];
          for(k=0;k<size_array;k++)
          {
              a[i][k] = val[i][k]
          }
    
        }
        // for(i=0;i<size_array;i++)
        // {
        //   for(k=0;k<size_array;k++)
        //   {
        //     console.log(a[i][k])
        //   }
    
        // }
        var invarr = math.inv(a)
        console.log(invarr)

        // for(i=0;i<size_array;i++)
        // {
        //   a[i]= [];
        //   for(k=0;k<size_array+1;k++)
        //   {
        //       a[i][k] = val[i][k]
        //   }
    
        // }
        for(i=0;i<size_array;i++)
        {
          b[i]= [];
          for(k=size_array;k<size_array+1;k++)
          {
            b[i][k] = val[i][k]
          }
    
        }

        // for(i=0;i<size_array;i++)
        // {
        //   for(k=size_array;k<size_array+1;k++)
        //   {
        //     console.log(b[i][k])
        //   }
    
        // }
        // console.log(b)
        var temp=0
        var x = []
        for(i=0;i<size_array;i++){
            for(j=0;j<size_array;j++){
                temp += invarr[i][j]*b[j][size_array]
        // console.log(b)
        // console.log(temp)

            }
            x[i] = temp
        }
       
        // console.log(x)
        // var result = invarr*b
        // console.log(result)
        setShow_total(x)
        show_web = [[]]
        for(i=0;i<size_array;i++)
        {
            show_web[i]= [];
          for(k=0;k<size_array;k++)
          {
              show_web[i][k] = invarr[i][k]
          }
    
        }
        setShow_martix_web(show_web)
        console.log(b)
        console.log(invarr)
        var temp2=0
        var x2 = []
        console.log(x)
        for(i=0;i<size_array;i++){
            for(j=0;j<size_array;j++){
                temp2 += a[i][j]*x[j]
        // console.log(b)
        // console.log(temp2)

            }
            x2[i] = temp2
            temp2 = 0
        }
       
        console.log(x2)
        // var result = invarr*b
        // console.log(result)
        setCheck(x2)


    }

    // const CarmersCalcFunction=(size_array,val,show_web)=>{
    //   console.log(val)
    //   var a = [[]]
    //   var k=0,i=0,j=0
    //   for(i=0;i<size_array;i++)
    //   {
    //     a[i]= [];
    //     for(k=0;k<size_array+1;k++)
    //     {
    //         a[i][k] = val[i][k]
    //     }
  
    //   }
    // //   for(i=0;i<size_array;i++){
    // //     console.log(a[i])
   
    // // }
    // for(i=0;i<size_array;i++)
    // {
    //   for(k=0;k<size_array;k++)
    //   {
    //     console.log(a[i][k])
    //   }

    // }
    //  var x = []
    //   for(k=0;k<size_array;k++){
    //       for(i=k+1;i<size_array;i++){
    //           var temp = a[i][k]/a[k][k]
    //           for(j=k+1;j<=size_array;j++){
    //               a[i][j] = a[i][j] - temp*a[k][j]
    //           }
    //       }
    //   }
    //   for(i=size_array-1;i>=0;i--){ //ไม่เอาb
    //       x[i] = a[i][size_array]
    //       for(j=i+1;j<size_array;j++){
    //           x[i] = x[i]-a[i][j]*x[j]
    //       }
    //       x[i] = x[i]/a[i][i]
    //   }
      
    //   for(i=0;i<size_array;i++){
    //       console.log(x[i])
     
    //   }
    //   setShow_total(x)
    //   show_web =[[]]
    //   for(i=0;i<size_array;i++)
    //   {
    //     show_web[i]= [];
    //     for(k=0;k<size_array+1;k++)
    //     {
    //       if(k<size_array-1)
    //       {
    //       show_web[i][k] = val[i][k] *x[k]
    //       }
    //       else if(k<size_array)
    //       {
    //         show_web[i][k] = val[i][k] *x[k]
    //       }
    //       else if(k===size_array){
    //         show_web[i][k] = val[i][k]
    //       }
    //     }
    //   }
    //   console.log(show_web)
    //   setShow_martix_web(show_web)
    // }

    const handleChange=(rowIndex, columnIndex,event)=>{
        val[rowIndex][columnIndex] =  Number(event.target.value);
          
    }
    const handleAdd=(event)=>{
        var array = [[]]
        for(var i=0;i<Number(event.target.value);i++)
        {
            array[i]= [];
            for(var k=0;k<Number(event.target.value)+1;k++)
            {
                array[i][k]= 0;
            }
        }
        console.log(array);
        setVal(array)
        setSize_array(Number(event.target.value))
    }

      return (
          <Container>
                <Form >
                <p style={{padding:'0.5rem'}}></p>
                    <Form.Group className='rooteq-course-div'>
                        <Form.Label style={{padding:'1rem'}}>Input X</Form.Label>
                        <input type="number" onChange={handleAdd} style={{height:"30px",width:"10%", margin:"0 auto"}} className="form-control"></input>
                        {/* <Button type="primary"  className='bt_calculate' onClick={()=>CarmersCalcFunction(size_array,val,show_martix_web)}> Calculateold </Button> */}
                        <Button type="primary"  className='bt_calculate' onClick={()=>invertCalcFunction(size_array,val,show_martix_web)}> Calculate new</Button>
                    </Form.Group> 
                    {/* <h2 className='rooteq-course-div'>Answer = {ans.toPrecision(7)}</h2> */}
                    <h2 className='rooteq-course-div'>{show_total.map((total,i)=>(
                    // <h1 id={i}>X{i+1}&nbsp; &nbsp;{total}</h1>
                    <label id={i}>&emsp;X{i+1} = {total}&emsp;</label>
                   ))
                   }</h2><p>&emsp;A invert is {show_martix_web.map((element,i)=>(<label id={i}>&emsp;row{i+1} = {element}&emsp;</label>))}</p>
                   <p>{check.map((total,i)=>(
                    // <h1 id={i}>X{i+1}&nbsp; &nbsp;{total}</h1>
                    <label id={i}>&emsp;B{i+1} = {total}&emsp;</label>
                   ))
                   }</p>
                        {/* <h2 className='rooteq-course-div'>{check.map((total,i)=>(
                    // <h1 id={i}>X{i+1}&nbsp; &nbsp;{total}</h1>
                    <label id={i}>&emsp;B{i+1} = {total}&emsp;</label>
                   ))
                   }</h2> */}
                </Form>
            <Container >
              <Table  >
                        <tbody>
                            {val.map((row, rowIndex) => (
                            <tr>
                                {row.map((column, columnIndex) => (
                                <td className='tdd'>
                                    {/* <Tooltip  title={'Input X3'} placement="topLeft" overlayClassName="numeric-input"> */}
                                        <input id={column} onChange={e => handleChange(rowIndex, columnIndex, e)}/>
                                    {/* </Tooltip> */}
                                </td>
                                ))}
                            </tr>
                            ))}
                        </tbody>
              </Table>
          </Container>
        </Container>
      )
}

export default GaussElimination