import  { Component }  from 'react';

class Fragments extends Component {
    render(){
    const codeExampleFirst = `
        import { Fragment } from 'react';
    `
    const codeExampleSecond = `
        class ChildComponent extends React.Component {
            render() {
                return (
                    <Fragment>
                        <h1>Hello Child Component</h1>
                    </Fragment>
                )
            }
        }
    `
    const codeExampleThree = `
        class ChildComponent extends React.Component {
            render() {
                return (
                    <>
                        <h1>Hello Child Component</h1>
                    </>
                )
            }
        }
    `
        return (
            <div className='content'>
                <h2 className='content_header'>Фрагмент</h2>
                <span>С помощью фрагментов можно сгруппировать список дочерних элементов без добавления дополнительных узлов в DOM.</span>
                <span>Используем React.Fragment или выполняем импорт, чтобы использовать Fragment:</span>
                <pre>
                    <code>{codeExampleFirst}</code>
                </pre>
                <span>Заменяем теги div на Fragment:</span>
                <pre>
                    <code>{codeExampleSecond}</code>
                </pre>
                <span>Существует сокращенная запись (импортировать не нужно):</span>
                <pre>
                    <code>{codeExampleThree}</code>
                </pre>
                <span>Недостаток сокращенной записи: нельзя использовать атрибут key.</span>
            </div>
        )
    }
}

export default Fragments;