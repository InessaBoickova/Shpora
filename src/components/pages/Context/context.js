const codeExampleFirst = `
        const MyContext = React.createContext(defaultValue);
    `
const codeExampleSecond = `
        <MyContext.Provider value={value}> </MyContext.Provider>
    `
const codeExampleThree = `
        <MyContext.Consumer>
            {value => /* отрендерить что-то, используя значение контекста */}
        </MyContext.Consumer>     
    `
const codeExampleFour = `
        const value = useContext(MyContext);
    `

const Context =()=>{
    return (
        <div className='content'>
            <h2 className='content_header'>Контекст</h2>
            <span>Контекст разработан для передачи данных для всего дерева React-компонентов, не прокидывая через пропсы.</span>
            <span>Создать контекст:</span>
            <pre>
                <code>{codeExampleFirst}</code>
            </pre>
            <span>defaultValue - дефолтное значение или объект для получения через контекст</span>
            <span>Вызывая React.createContext мы получаем объект, который содержит два компонента:</span>
            <ol>
                <li>
                    Компонент Provider. Благодаря ему все дочерние компоненты могут получать значения, которые мы ему передаем.
                    <pre>
                        <code>{codeExampleSecond}</code>
                    </pre>
                    <span>Компонент Provider принимает проп value, который будет передан во все компоненты, использующие этот контекст и являющиеся потомками этого компонента Provider. Один Provider может быть связан с несколькими компонентами, потребляющими контекст. Так же компоненты Provider могут быть вложены друг в друга, переопределяя значение контекста глубже в дереве.</span>
                </li>
                <li>Компонент Consumer - это React-компонент, который подписывается на изменения контекста.
                    <span>Consumer принимает функцию в качестве дочернего компонента. Эта функция принимает текущее значение контекста и возвращает React-компонент. Передаваемый аргумент value будет равен ближайшему (вверх по дереву) значению этого контекста, а именно пропу value компонента Provider. Если такого компонента Provider не существует, аргумент value будет равен значению defaultValue, которое было передано в createContext().</span>
                    <pre>
                        <code>{codeExampleThree}</code>
                    </pre>
                    <span>Хук useContext. Принимает один параметр - это объект контекста, получаемый при вызове React.createContext и возвращает текущее значение контекста для этого контекста.</span>
                    <span>Текущее значение контекста определяется пропом value ближайшего MyContext.Provider над вызывающим компонентом в дереве.</span>
                    <pre>
                        <code>{codeExampleFour}</code>
                    </pre>
                    <span>Компонент, вызывающий useContext, всегда будет перерендериваться при изменении значения контекста. Если повторный рендер компонента затратен, вы можете оптимизировать его с помощью мемоизации.</span>
                    <span>Контекст лучше всего создавать в отдельном файле.</span>
                </li>
            </ol>
        </div>
    )
}

export default Context;