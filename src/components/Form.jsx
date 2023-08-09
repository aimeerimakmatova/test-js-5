import { useState } from "react";
import "./Form.css"
    
    const Form = (props)=>{

        const [namee,setName] = useState("")
        const [lName,setLName] = useState("")
        const [datee,setDatee] = useState("")

        const nameHandler = (e)=>{
           setName(e.target.value);
        }

        const lastNameHandler = (e)=>{
            setLName(e.target.value);
         }
         const dateHandler = (e) => {
            setDatee(e.target.value)
         }
        const clickHandler = () =>{
            const obj = {
              name:namee,
              lastName:lName,
              date:datee,
            }
            console.log(obj);
            props.onSave(obj)
        }

        return(
            <div className="form-inp">
                <input onChange={nameHandler} className="inp-name" placeholder="NAME?" type="text" />
                <input onChange={lastNameHandler} className="inp-last-name" placeholder="LAST-NAME?" type="text" />
                <input onChange={dateHandler} className="inp-date" type="date" />
                <button onClick={clickHandler}  className="click-btn">click</button>
                {/* <h3>{namee}</h3>
                <h3>{lName}</h3> */}
            </div>
        )
    }
    export default Form
