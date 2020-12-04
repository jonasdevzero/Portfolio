import React, { useState, useEffect } from 'react'

import {
    Container,
    DraggableBox,
    Item,
    Dots,
} from '../styles/components/Slider'
import ArrowForwardIcon from '@material-ui/icons/ArrowForwardIos'
import ArrowBackIcon from '@material-ui/icons/ArrowBackIos'

interface ISlider {
    children?: Array<React.ReactNode>
    time?: number
}

function Slider({ children, time }: ISlider) {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [stopTimer, setStopTimer] = useState(false)

    const [slideStart, setSlideStart] = useState(0)

    function createItems(item: React.ReactNode, i: number) {
        let position: string

        if (i > currentSlide) {
            if (currentSlide === 0) {
                position = `${(currentSlide + i) * 100}%`
            } else {
                position = `${(currentSlide - i) * -100}%`
            }

        } else if (i < currentSlide) {
            position = `-${(currentSlide - i) * 100}%`
        } else {
            position = '0'
        }

        return (
            <Item
                key={i}
                position={position}
                className={position}
            >
                {item}
            </Item>
        )
    }

    function switchSlide(to: 'next' | 'prev') {
        switch (to) {
            case 'next':
                if (children && !children[currentSlide + 1])
                    return setCurrentSlide(0)

                setCurrentSlide(currentSlide + 1)
                break
            case 'prev':
                if (children && !children[currentSlide - 1])
                    return setCurrentSlide(children.length - 1)

                setCurrentSlide(currentSlide - 1)
                break
        }
    }

    function onHover(state: 'enter' | 'leave') {
        const hoverTimer = () => setTimeout(() => {
            if (stopTimer) return

            switchSlide('next')
        }, time ? time : 5000)

        switch (state) {
            case 'enter':
                setStopTimer(true)
                break
            case 'leave':
                setStopTimer(false)
                hoverTimer()
                break
        }
    }
    function onDrag(e: React.DragEvent<HTMLDivElement>) {
        if (e.clientX < slideStart) {
            switchSlide('next')
        } else if (e.clientX > slideStart) {
            switchSlide('prev')
        }
    }
    function onTouch(e: React.TouchEvent<HTMLDivElement>) {
        if (e.changedTouches[0].clientX < slideStart) {
            switchSlide('next')
        } else if (e.changedTouches[0].clientX > slideStart) {
            switchSlide('prev')
        }
    }

    useEffect(() => {
        const timer = setInterval(() => {
            if (stopTimer) return

            switchSlide('next')
        }, time ? time : 5000)

        return () => clearInterval(timer)
    }, [currentSlide, stopTimer])

    return (
        <Container
            onMouseEnter={() => onHover('enter')}
            onMouseLeave={() => onHover('leave')}
        >
            <button type='button' onClick={() => switchSlide('prev')}>
                <ArrowBackIcon />
            </button>

            <DraggableBox
                onDragStartCapture={e => setSlideStart(e.clientX)}
                onDragEndCapture={onDrag}

                onTouchStartCapture={e => setSlideStart(e.changedTouches[0].clientX)}
                onTouchEndCapture={onTouch}
                draggable
            />

            {children ? children.map(createItems) : null}

            <button type='button' onClick={() => switchSlide('next')}>
                <ArrowForwardIcon />
            </button>

            <Dots>
                {children?.map((_, i) => (
                    <span key={i} className={i === currentSlide ? 'selected' : ''} onClick={() => setCurrentSlide(i)}></span>
                ))}
            </Dots>
        </Container>
    )
}

export default Slider
