const codeExampleFirst = `
    import {useEffect} from 'react';

`
const codeExampleSecond = `
    useEffect ( () => { }, [])

`
const codeExampleThree = `
    useEffect ( () => { }, [name])
        
`
const codeExampleFour = `
    useEffect ( () => { } )
    
`
const codeExampleFive =`
    useEffect ( () => {
        return () => {};
    })

`

const UseEffect = () => {
    return <div className='content'>
          <h2 className='content_header'>UseEffect</h2>
          <span>Для использования методов жизненного цикла в функциональных компонентах предназначек хук useEffect.</span>
          <pre>
            <code>{codeExampleFirst}</code>
          </pre>
          <span>Хук позволяет использовать 3 метода жизненного цикла:</span>
          <ul>
            <li>componentDidMount()</li>
            <li>componentDidUpdate(prevProps, prevState)</li>
            <li>componentWillUnmount()</li>
          </ul>
          <span>UseEffect принимает в качестве первого параметра функцию, в качестве второго - [ ] (аналог componentDidMount).</span>
          <pre>
            <code>{codeExampleSecond}</code>
          </pre>
          <span>UseEffect принимает в качестве первого параметра функцию, в качестве второго - массив с зависимостью (или несколькими) (аналог componentDidUpdate).</span>
          <pre>
            <code>{codeExampleThree}</code>
          </pre>
          <span>UseEffect принимает в качестве первого параметра функцию, второго параметра - нет (аналог componentDidMount + componentDidUpdate).</span>
          <pre>
            <code>{codeExampleFour}</code>
          </pre>
          <span>UseEffect принимает в качестве первого параметра функцию, которая возвращает другую функцию (аналог componentWillUnmount).</span>
          <pre>
            <code>{codeExampleFive}</code>
          </pre>

    </div>
}

export default UseEffect;