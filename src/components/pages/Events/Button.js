import { useState } from "react";

const Button = () =>{
    const [text,setText] = useState('Выключено');

    return <button
         onClick={()=> text === 'Выключено' ? setText('Включено'): setText('Выключено')}> {text}
        </button>
}

export default Button;