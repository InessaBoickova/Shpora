import { useState } from "react";
import './events.sass'

const Events = () =>{
    return (
        <div className="content">
            <h2 className='content_header'>Обработка событий</h2>
            <span>Обработка событий в React-элементах очень похожа на обработку событий в DOM-элементах. Но есть несколько синтаксических отличий:</span>
            <ul>
                <li>События в React именуются в стиле camelCase вместо нижнего регистра.</li>
                <li>С JSX вы передаёте функцию как обработчик события вместо строки.</li>
            </ul>
            <span>Популярные обработчики событий:</span>

            <ul>
                 <li>
                    onClick
                    <Button/>
                 </li>
                 <li>
                    onChange
                    <Form/>
                 </li>
            </ul>
            <span>Существует множество поддерживаемых событий, вот общий список:</span>
            <ul>
                <li>Буфер обмена: onCopy, onCut, onPaste</li>
                <li>Составление/ввод данных: onCompositionEnd, onCompositionStart, onCompositionUpdate</li>
                <li>Клавиатура: onKeyDown, onKeyPress, onKeyUp</li>
                <li>Фокусировка: onFocus, onBlur</li>
                <li>Форма: onChange, onInput, onSubmit</li>
                <li>Мышь: onClick, onContextMenu, onDoubleClick, onDrag, onDragEnd, onDragEnter, onDragExit, onDragLeave, onDragOver, onDragStart, onDrop, onMouseDown, onMouseEnter, onMouseLeave, onMouseMove, onMouseOut, onMouseOver, onMouseUp</li>
                <li>Выделение: onSelect</li>
                <li>Касание: onTouchCancel, onTouchEnd, onTouchMove, onTouchStart</li>
                <li>UI: onScroll</li>
                <li>Колёсико мышки: onWheel</li>
                <li>Медиа: onAbort, onCanPlay, onCanPlayThrough, onDurationChange, onEmptied, onEncrypted, onEnded, onError, onLoadedData, onLoadedMetadata, onLoadStart, onPause, onPlay, onPlaying, onProgress, onRateChange, onSeeked, onSeeking, onStalled, onSuspend, onTimeUpdate, onVolumeChange, onWaiting</li>
                <li>Изображение: onLoad, onError</li>
                <li>Анимация: onAnimationStart, onAnimationEnd, onAnimationIteration</li>
                <li>Переход: onTransitionEnd</li>
            </ul>
        </div>
    )
}

const Button = () =>{
    const [text,setText] = useState('Выключено');

    return <button
         onClick={()=> text === 'Выключено' ? setText('Включено'): setText('Выключено')}> {text}
        </button>
}

const Form = () =>{
    const [text,setText] = useState(' ');
    const showText = () =>{
        alert(text);
        setText(' ');
    }
    return <div className="form">
        <input onChange= {(e) => setText(e.target.value)}  type="text"  value={text}/>
        <button  onClick={() =>showText()}>Добавить</button>
    </div>
}

export default Events;