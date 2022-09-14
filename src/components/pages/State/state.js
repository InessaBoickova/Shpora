import React, { Component }  from 'react';
import '../pages.sass'

class State extends Component{
    constructor(props){
        super(props);
        this.state = {
            count : 0
        }
    }

    setCountPlus = () => {
        this.setState(({count})=>{
            return {count : count + 1}
        })
    }

    setCountMinus = () =>{
        this.setState(({count})=>{
            return {count: count - 1}
        })
    }

    render(){
        const  codeExampleFirst =`
            class App extends React.Component {
                constructor(props) {
                    super(props)
                    this.state = { username: 'johndoe' }
                }
                render() {
                     return (
                        <div> { this.state.username } </div>
                    )
                }
            }
        `
        const codeExampleSecond =` 
            this.setState({username:'Mark'});
        `
        const codeExampleThree = `
            this.setState(() => ({ username: 'Mark' }))
        `
        const codeExampleFour = `
            import {useState} from 'react';
        `
        const codeExampleFive =`
            const [name, setName] = useState('Mark');
        `
        
        return (
            <div className="content">
                <h2 className='content_header'>Состояние</h2>
                <span>
                    State (состояние) в React – это объект простого JS, позволяющий отслеживать данные компонента. Состояние компонента может меняться. Смена состояния компонента зависит от функциональности приложения. Изменения могут основываться на ответе от пользователя, новых сообщениях с сервера, ответа сети и т.д.
                </span>
                <span>
                    Состояние компонента должно быть приватным для компонента и контролироваться им. Изменения состояния компонента необходимо делать внутри компонента – инициализация и обновление состояния компонента.
                </span>
                <pre>
                    <code>{codeExampleFirst}</code>
                </pre>
                <span>Единственный допустимый способ обновления состояния компонента – через setState().</span>
                <span>Так нельзя менять состояние: this.state.username='Mark'</span>
                <span>1 способ изменить state:</span>
                <pre>
                    <code> {codeExampleSecond}</code>
                </pre>
                <span>2 способ изменить state:</span>
                <pre>
                    <code>{codeExampleThree}</code>
                </pre>
                <span>В функциональных компонентах state создается с помощью хука useState()</span>
                <span>Чтобы воспользоваться им, необходимо импортировать useState из 'react':</span>
                <pre>
                    <code>{codeExampleFour}</code>
                </pre>
                <span>Хук useState() принимается в качестве параметра первоначальное значение для переменной, а возвращает массив, содержащий переменную и функцию, которая изменяет эту переменную.</span>
                <span>При объявлении state часто используют деструктурирующее присваивание:</span>
                <pre>
                    <code>{codeExampleFive}</code>
                </pre>
                <div className="content_btns">
                    <button onClick={this.setCountMinus}> -1 </button>
                        <span>Счётчик: {this.state.count}</span>
                    <button onClick={this.setCountPlus}> +1 </button>
                </div>
                <span>Примером работы со state является счётчик, который изменяется при нажатии на кнопку.</span>
            </div>
        )
    }
}

export default State;