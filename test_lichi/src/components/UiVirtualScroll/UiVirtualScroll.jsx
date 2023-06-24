import React, { FunctionComponent, useEffect, useRef, useState } from 'react'


const UiVirtualScroll = ({
                              offset = 0,
                              buffer,
                              limit,
                              rowHeight,
                              height,
                              onPrevCallback,
                              onNextCallback,
                              children,
                          }) => {
    // ссылка на наложение, чтобы вызвать изменение положения прокрутки
    const overlayRef = useRef()

    // два курсора нижней и верхней границы индексов кешированных элементов
    // начальный индекс верхней границы равен 0
    const [upperBoundary, setUpperBoundary] = useState(offset)
    // начальный нижний граничный индекс 300-1 = 299
    const [lowerBoundary, setLowerBoundary] = useState(buffer - 1)
    const [isLoading, setIsLoading] = useState(false)
    // текущая позиция прокрутки, начиная с 0
    const [currentScrollTopPosition, setCurrentScrollTopPosition] = useState(0)

    const handleScroll = (target) => {
        // игнорировать прокрутку, если данные загружаются
        if (isLoading) {
            return
        }

        // получить текущую позицию прокрутки
        const scrollTop = Math.round(target.scrollTop)
        // извлечение высоты клиента и высоты прокрутки для расчета максимальной позиции верхней прокрутки
        // где самая высокая позиция прокрутки — scrollHeight = clientHeight + scrollTop
        const clientHeight = Math.round(target.clientHeight)
        const scrollHeight = Math.round(target.scrollHeight)

        // определяя, прокручиваем ли мы в настоящее время вверх или вниз
        const isUp = scrollTop < currentScrollTopPosition

        if (isUp && scrollTop === 0) {
            setIsLoading(true)

            onPrevCallback(upperBoundary - limit).then(() => {
                // обновляем границы для перемещения индексов - лимит
                setUpperBoundary(upperBoundary - limit)
                setLowerBoundary(lowerBoundary - limit)

                // переместить положение прокрутки на 1 предельную высоту
                if (overlayRef !== null) {
                    const scrollPos = limit * rowHeight
                    overlayRef.current.scrollTo(0, scrollPos)
                }
                setIsLoading(false)
            })
        } else if (!isUp && scrollTop + clientHeight >= scrollHeight) {
            setIsLoading(true)

            onNextCallback(lowerBoundary).then(() => {
                // обновить границы для перемещения индексов + лимит
                setUpperBoundary(upperBoundary + limit)
                setLowerBoundary(lowerBoundary + limit)

                if (overlayRef !== null) {
                    const scrollPos = limit * rowHeight
                    // переместить положение прокрутки на 2 предела высоты
                    overlayRef.current.scrollTo(0, scrollPos * 2)
                }
                setIsLoading(false)
            })
        }
        // обновить текущую позицию курсора
        setCurrentScrollTopPosition(scrollTop)
    }

    return (
        <div
            ref={overlayRef}
           // style={{ height, overflow: 'scroll' }}
            onScroll={(e) => handleScroll(e.target)}
        >
            {children}
        </div>
    )
}

export default UiVirtualScroll