import React, { useState } from "react";
import "./Todo.css";

const Todo=()=>{
    const[input,setInput]=useState('');
    const [item,setItem]=useState([]);
    const itemEvent=(e)=>{
        setInput(e.target.value)
    }
    const additems=()=>{
        setItem((olditems)=>{
            return( [...olditems,input]    
            )
        });
        setInput('');
    }
    const removeitems=(taskIndex)=>{
        const updatedTasks = item.filter((_,index) => index !== taskIndex);
        setItem(updatedTasks);
    }

    return(
        <>
        <div className="container">
            <div className="main">
                <div className="heading">
                <h2>List Of Items</h2>
                </div>
                <div className="inner-block">
                    <input type="text" placeholder="Add items..." value={input} onChange={itemEvent}/>
                    <button className="plus-button" onClick={additems}>+</button>
                </div>
                <div className="cart-item">
                    <ol className="items">
                        {item.map((itemvalue,index)=>{
                            return(
                                <li key={index} id={index}>{itemvalue}
                                <button className="remove-button" onClick={()=>{removeitems(index)}}>-</button></li>
                            )
                        })}
                    </ol>
                </div>
            </div>
        </div>
        </>
    )
}

export default Todo;