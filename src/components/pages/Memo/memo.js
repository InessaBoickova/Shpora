const codeExampleFirst = `
    const MyComponent = React.memo(function MyComponent(props) {
        /* рендер с использованием пропсов */
    });

`
const codeExampleSecond = `
    function MyComponent(props) {
        /* рендер с использованием пропсов */
    }

    function areEqual(prevProps, nextProps) {
        /*
        возвращает true, если nextProps рендерит
        тот же результат что и prevProps,
        иначе возвращает false
        */
    }

    export default React.memo(MyComponent, areEqual);

`
const codeExampleThree = `
    shouldComponentUpdate(nextProps, nextState) {
        return !shallowEqual (nextProps, this.props) ||
                !shallowEqual (nextState, this.state);
     }       

`

const Memo = ()=>{
    return <div className='content'>
        <h2 className='content_header'>React.memo</h2>
        <pre>
            <code>{codeExampleFirst}</code>
        </pre>
        <span>React.memo — это компонент высшего порядка.</span>
        <span>Компонент высшего порядка — это функция, которая принимает компонент и возвращает новый компонент.</span>
        <span>Если ваш компонент всегда рендерит одно и то же при неменяющихся пропсах, вы можете обернуть его в вызов React.memo для повышения производительности в некоторых случаях, мемоизируя тем самым результат. Это значит, что React будет использовать результат последнего рендера, избегая повторного рендеринга.</span>
        <span>React.memo затрагивает только изменения пропсов. Если функциональный компонент обёрнут в React.memo и использует useState, useReducer или useContext, он будет повторно рендериться при изменении состояния или контекста.</span>
        <span>По умолчанию он поверхностно сравнивает вложенные объекты в объекте props. Если вы хотите контролировать сравнение, вы можете передать свою функцию сравнения в качестве второго аргумента.</span>
        <pre>
            <code>{codeExampleSecond}</code>
        </pre>
        <span>Этот метод предназначен только для оптимизации производительности.</span>
        <span>Аналогом в классовых компонентах выступает метод shouldComponentUpdate()</span>
        <pre>
            <code>{codeExampleThree}</code>
        </pre>
    </div>
    
}

export default Memo;