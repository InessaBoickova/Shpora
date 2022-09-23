import './form.sass'
import { useState } from 'react'

const Form = ()=> {
    return(
        <div className="content">
            <h2 className='content_header'>Работа с формами</h2>
            <span>В React HTML-элементы формы ведут себя немного иначе по сравнению с DOM-элементами, так как у элементов формы изначально есть внутреннее состояние.</span>
            <span>По умолчанию браузер переходит на другую страницу при отправке HTML-форм. Если вас это устраивает, то не надо ничего менять, в React формы работают как обычно. Однако чаще всего форму удобнее обрабатывать с помощью JavaScript-функции, у которой есть доступ к введённым данным. Стандартный способ реализации такого поведения называется «управляемые компоненты».</span>
            <span> <u>Управляемые компоненты</u> </span>
            <span>В HTML элементы формы, такие как input, textarea и select, обычно сами управляют своим состоянием и обновляют его когда пользователь вводит данные. В React мутабельное состояние обычно содержится в свойстве компонентов state и обновляется только через вызов setState</span>
            <span>Мы можем скомбинировать оба подхода и сделать состояние React-компонента «единственным источником правды». Тогда React-компонент будет рендерить форму и контролировать её поведение в ответ на пользовательский ввод. Значение элемента формы input в этом случае будет контролировать React, а сам элемент будет называться «управляемый компонент».</span>
            <span> <u> Альтернативы управляемым компонентам</u> </span>
            <span>Использование управляемых компонентов иногда может быть утомительным. Приходится писать обработчик события для каждого варианта изменения ваших данных и проводить всё состояние формы через компонент React. Это может особенно раздражать, если вы переносите существующую кодовую базу в React, или когда работаете над интеграцией React-приложения с другой библиотекой. В такой ситуации могут пригодиться неуправляемые компоненты — альтернативная техника реализации ввода данных в форму.</span>
            <Login/>
        </div>
    )        
    
}

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

export default Form;