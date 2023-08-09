import "./ExpensItem.css"
const ExpensItem = (props)=>{

    return(
        <div className="Expens-Item">
            <h1>{props.name}</h1>
            <h1>{props.lastName}</h1>
            <h3>{props.date}</h3>
        </div>
    )
}
export default ExpensItem