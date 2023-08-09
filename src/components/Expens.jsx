
import { useState } from "react"
import ExpensItem from "./ExpensItem"
import Form from "./Form"

const Expens = ()=>{
      const array = [
        {
            name:"Aimeerim",
            lastName:"Akmatova",
            date:"2006.06.21"
        }
      ]
     const [state,setState] = useState(array)


const save = (obj)=>{ 
    setState((newArray)=>[...newArray,obj])  
}

return(
    <div>
        <h1>ФИО</h1>
        <Form onSave={save} />
    {state.map((el)=>{
        return(
            <ExpensItem key={el.name} name={el.name} lastName={el.lastName} date={el.date}/>
        )
        })
    }
    </div>
)
}
  export default Expens