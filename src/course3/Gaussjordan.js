import { useState } from "react"
// import { Container, Form, Table } from "react-bootstrap";
// import {Link} from 'react-router-dom'
// import {Button} from 'antd'
import './Crammer.css'

const Gaussjordan = () => {

    const [x, setX] = useState(0);
    const [fx, setFx] = useState(0);
    const [sum, setSum] = useState(0);

    const onxChange = (e) => {
        setX(Number(e.target.value));
    }
    const onfxChange = (e) => {
        setFx(Number(e.target.value));
    }

    const Calculate = () => {
        var temp = 0
        temp = x+fx
        setSum(temp)

    }

    return (
        <div>

            <label>
                x:
                <input type="text" value={x} onChange={onxChange} />
            </label>
            <br></br>
            <label>
                f(x):
                <input type="text" value={fx} onChange={onfxChange} />
            </label>
            <br></br>
            <button onClick={Calculate}>submit</button>
            {sum}
        </div>
    )
}



export default Gaussjordan
