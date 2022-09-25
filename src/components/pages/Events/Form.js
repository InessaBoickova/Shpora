import { useState } from "react";

const Form = () =>{
    const [text,setText] = useState(' ');
    const showText = () =>{
        alert(text);
        setText(' ');
    }
    return <div className="form">
        <input onChange= {(e) => setText(e.target.value)}  type="text"  value={text}/>
        <button  onClick={() =>showText()}>Добавить</button>
    </div>
}

export default Form;