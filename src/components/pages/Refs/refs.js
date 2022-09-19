const codeExampleFirst = `
        class MyComponent extends React.Component {
            constructor(props) {
                super(props);
                this.myRef = React.createRef();
            }
            render() {
                return <div ref={this.myRef} />;
            }
        }

`
const codeExampleSecond = `
        import { useRef } from 'react';

        function MyComponent () {
            const refContainer = useRef(initialValue);
            return (
                <div ref={refContainer} />
            );
        }

`

const Refs = ()=>{
    return (
        <div className='content'>
            <h2 className='content_header'>Refs</h2>
            <span>Refs (далее просто «ссылки») предоставляет способ доступа к DOM-узлам или React-элементам, созданным в методе render().</span>
            <span>Есть несколько хороших примеров использования ссылок:</span>
            <ul>
                <li>Управление фокусом, выделение текста или воспроизведение медиаресурсами.</li>
                <li>Выполнение анимаций в императивном подходе.</li>
                <li>Интеграция со сторонними библиотеками, взаимодействующие с DOM.</li>
            </ul>
            <span>Ссылки создаются с использованием React.createRef() и добавляются к React-элементам с помощью атрибута ref. Ссылки обычно присваиваются свойству экземпляра, когда компонент создаётся таким образом, чтобы на них можно было ссылаться по всему компоненту.</span>
            <pre>
                <code>{codeExampleFirst}</code>
            </pre>
            <span>В функциональных компонентах используется хук useRef:</span>
            <pre>
                <code>{codeExampleSecond}</code>
            </pre>
            <span>useRef возвращает изменяемый ref-объект, свойство .current которого инициализируется переданным аргументом (initialValue). Возвращённый объект будет сохраняться в течение всего времени жизни компонента.</span>
        </div>
    )
}

export default Refs;