import  { Component }  from 'react';

class Props extends Component{
    render(){
    const codeExampleFirst= `
        function Welcome(props) {
            return <h1>Привет, {props.name}</h1>;
        }
    `
    const codeExampleSecond = `
        class Welcome extends React.Component {
            render() {
                return <h1>Привет, {this.props.name}</h1>;
            }
        }
    `
    const codeExampleThree = `
        const element = <Welcome name="Алиса" />;
    `
    const codeExampleFour = `
        function Welcome (props) {
            return <h1> Привет, {props.name}</h1>;
        }

        const element = <Welcome name="Алиса" />;
        ReactDOM.render(
            element,
            document.getElementById('root')
        );
    `
    const codeExampleFive = `
        <Welcome name="Алиса"> в ReactDOM.render().
    `
    const codeExampleSix = `
        {name: 'Алиса'}
    `
    const codeExampleSeven = `
        <h1>Привет, Алиса</h1>
    `
        return(
            <div className="content">
                <h2 className="content_header">Props</h2>
                <span>То, что мы называем аргументами в мире функций, в мире компонентов называется свойствами.</span>
                <span>Функциональные компоненты свойства принимают в качестве аргумента.</span>
                <span>Props представляют собой объект, содержащие свойства.</span>
                <span>Обратиться к ним можно - props.имя-свойства.</span>
                <span>Props - только для чтения.</span>
                <pre>
                    <code>{codeExampleFirst} </code>
                </pre>
                <span>Классовые компоненты свойства принимают по умолчанию и обратиться к ним можно с помощью this.props.имя-свойства.</span>
                <pre>
                    <code>{codeExampleSecond}</code>
                </pre>
                <span>Элементы могут описывать и наши собственные компоненты:</span>
                <pre>
                    <code>{codeExampleThree}</code>
                </pre>
                <span>Когда React встречает подобный элемент, он собирает все JSX-атрибуты и дочерние элементы в один объект и передаёт их нашему компоненту. Этот объект называется «пропсы».</span>
                <span>Например, этот компонент выведет «Привет, Алиса» на страницу:</span>
                <pre>
                    <code>{codeExampleFour}</code>
                </pre>
                <ol>
                    <li>Мы передаём React-элемент {codeExampleFive}</li>
                    <li>React вызывает наш компонент Welcome с пропсами {codeExampleSix}.</li>
                    <li>Наш компонент Welcome возвращает элемент {codeExampleSeven} в качестве результата.</li>
                    <li>React DOM делает минимальные изменения в DOM, чтобы получилось {codeExampleSeven}.</li>
                </ol>
                <span>Компонент никогда не должен что-то записывать в свои пропсы— вне зависимости от того, функциональный он или классовый.</span>
            </div>
        )
    }
}

export default Props;