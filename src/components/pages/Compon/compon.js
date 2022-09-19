import  { Component }  from 'react';
class Compon extends Component{
    render(){
    const codeExampleFirst = `
        function Welcome() {
            return <h1>Привет, мир! </h1>;
        }
    `
    const codeExampleSecond = `
        class Welcome extends React.Component {
            render() {
                return <h1>Привет, мир!</h1>;
            }
        } 
    `
        return(
            <div className="content">
                <h2 className='content_header'> Компоненты </h2>
                <span>Компоненты React — это многократно иcпользуемые фрагменты JavaScript-кода, которые выводят HTML-элементы (благодаря JSX ).</span>
                <span>Компоненты бывают функциональные и классовые.</span>
                <span>Проще всего объявить React-компонент как функцию:</span>
                <pre>
                    <code>{codeExampleFirst}</code>
                </pre>
                <span>
                    Эта функция — компонент, потому что она получает данные в одном объекте («пропсы») в качестве параметра и возвращает React-элемент. Мы будем называть такие компоненты «функциональными», так как они буквально являются функциями.
                </span>
                <span>Ещё компоненты можно определять как классы ES6:</span>
                <pre>
                    <code>{codeExampleSecond}</code>
                </pre>
                <span>Компонента должна себя вести как чистая функция.</span>
                <span>«Чистой» называется функция, которая:</span>
                <ul>
                    <li>Для одинаковых входных данных всегда возвращает один результат.</li>
                    <li>Не имеет побочных эффектов (то есть не изменяет внешние состояния).</li>
                    <li>Не зависит от внешних состояний.</li>
                 </ul>
            </div>
        )
    }
}

export default Compon;