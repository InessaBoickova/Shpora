import { useState } from 'react'
const Login = () => {
    const [text, setText] = useState('');
    const [password, setPassword] = useState('');
    const validText = (e) =>{
        e.length < 10 && setText(e) 
    }
    const validPassword = (e) =>{
        e.length < 10 && setPassword(e) 
    }

    const cleanForm = () =>{
        if (text && password){
            setPassword('');
            setText('');
        }else{
            alert('Заполните данные')
        }
    }

    return (
        <div className="form">
            <span>Форма входа</span>
             <form action="#">
                <div className="input">
                    <input name='login' type="text" onChange={(e) => validText(e.target.value) } value= {text}/>
                    <label htmlFor="login">Введите логин</label>
                </div>
                <div className="input">
                    <input className="password" type="password" onChange={(e) => validPassword(e.target.value)} value={password}/>
                    <label htmlFor="password">Введите пароль</label>
                </div>
                <p><label>Сохранить данные</label><input type="checkbox" className='checkbox' checked/></p>
             </form>
            <button onClick={ () => cleanForm()}>Войти</button>
        </div>
    )
}

export default Login;