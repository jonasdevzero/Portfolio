import React, { useState, useEffect } from 'react'

import {
    Container,
    SlideItem,
    DotsContainer,
} from '../styles/components/Slider'

interface ISlider {
    children?: Array<React.ReactNode>
}

function Slider({ children }: ISlider) {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [stopTimer, setStopTimer] = useState(false)

    function createSlider(item: React.ReactNode, i: number) {
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
            <SlideItem key={i} position={position}>{item}</SlideItem>
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
        }, 5000)

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

    useEffect(() => {
        const timer = setInterval(() => {
            if (stopTimer) return

            switchSlide('next')
        }, 5000)

        return () => clearInterval(timer)
    }, [currentSlide, stopTimer])

    return (
        <Container onMouseEnter={() => onHover('enter')} onMouseLeave={() => onHover('leave')}>
            <button type='button' onClick={() => switchSlide('prev')}>&#10094;</button>

            {children ? children.map(createSlider) : null}

            <button type='button' onClick={() => switchSlide('next')}>&#10095;</button>

            <DotsContainer>
                {children?.map((_, i) => (
                    <button key={i} onClick={() => setCurrentSlide(i)}>{i}</button>
                ))}
            </DotsContainer>
        </Container>
    )
}

export default Slider
