import  { Component }  from 'react';

class LifeCycle extends Component {
    render(){
    const codeExampleFirst = `
        constructor(props) {
            super(props);
            this.state = { counter: 0 };
            this.handleClick = this.handleClick.bind(this);
        }
    `
    const codeExampleSecond = `
        render () {
            return (
                <div>
                    'Hello'
                </div>
            )
        }
    `
    const codeExampleThree  = `
        componentDidMount()
    `
    const codeExampleFour = `
        componentDidUpdate(prevProps, prevState) {
            if (this.props.userID !== prevProps.userID) {
                this.fetchData(this.props.userID);
            }
        }
    `
    const codeExampleFive = `
        componentWillUnmount() {
            alert("The component named Header is about to be unmounted.");
        }
    `
        return(
            <div className='content'>
                <h2 className='content_header'>Методы жизненного цикла</h2>
                <span>Основные методы жизненного цикла:</span>
                <ol>
                    <li>constructor ()</li>
                    <span>Обычно в React конструкторы используются только для двух целей:</span>
                    <ul>
                        <li>Инициализация локального состояния путем присвоения объекта this.state.</li>
                        <li>Привязка методов обработчика событий к экземпляру.</li>
                    </ul>
                    <pre>
                        <code>{codeExampleFirst} </code>
                    </pre>
                    <li>render ()</li>
                    <span>Рендеринг компонента. Отдает JSX.</span>
                    <pre>
                        <code>{codeExampleSecond} </code>
                    </pre>
                    <li>componentDidMount()</li>
                    <span>componentDidMount() вызывается сразу после монтирования компонента (вставки в дерево). Используется для отправки запросов на серверк удаленным ресурсам, setTimeout, обращение к DOM-элементам.</span>
                    <pre>
                        <code>{codeExampleThree}</code>
                    </pre>
                    <li>ComponentDidUpdate(prevProps, prevState)</li>
                    <span>Вызывается после обновления компонента. В качестве парапметров передаются старые значения объектов: props и state.</span>
                    <pre>
                        <code>{codeExampleFour} </code>
                    </pre>
                    <li>componentWillUnmount()</li>
                    <span>Вызывается перед удалением компонента из DOM. Используется для закрытия асинхронных запросов, таймеров.</span>
                    <pre>
                        <code>{codeExampleFive}</code>
                    </pre>
                    <span>Для использования методов жизненного цикла в функциональных компонентах предназначек хук useEffect.</span>
                </ol>
            </div>
        )
    }
}

export default LifeCycle;