import { useState } from 'react'

import {
    Container,
    Image
} from '../styles/components/Loading'

interface ILoading {
    loading: boolean
}

function Loading({ loading }: ILoading) {
    const [fadeOut, setFadeOut] = useState(!loading)

    return (
        <Container loading={loading.toString()} fadeOut={fadeOut.toString()}>
            <Image src='/icons/loading.svg' alt='loading' fadeOut={fadeOut.toString()} />
        </Container>
    )
}

export default Loading 
