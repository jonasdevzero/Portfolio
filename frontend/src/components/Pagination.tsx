import React from 'react'
import Link from 'next/link'

import {
    Container,
    StyledLink,
} from '../styles/components/Pagination'

import ArrowForwardIcon from '@material-ui/icons/ArrowForwardIos'
import ArrowBackIcon from '@material-ui/icons/ArrowBackIos'

interface IPagination {
    pages: Array<any>;
    page: number;
}

function Pagination({ pages, page }: IPagination) {
    return (
        <Container>
            {page > 1 ? (
                <Link href={`/portfolio?page=${page - 1}`}>
                    <ArrowBackIcon className='back' />
                </Link>
            ) : null}

            {pages.map((_, i) => {
                // if the page is the first, show it as and two links later
                if (page === 1 && i < 3) {
                    return (
                        <Link key={i} href={`/portfolio?page=${i + 1}`}>
                            <StyledLink selected={page ? page === i + 1 : 1 === i + 1}>{i + 1}</StyledLink>
                        </Link>
                    )
                } // if the page is the last one, show it as and two links before
                else if (page === pages.length && i + 1 > pages.length - 3) {
                    return (
                        <Link key={i} href={`/portfolio?page=${i + 1}`}>
                            <StyledLink selected={page ? page === i + 1 : 1 === i + 1}>{i + 1}</StyledLink>
                        </Link>
                    )
                } else { // if page is not the first or the last      
                    if (i === 0 && page > 2) { // if the page is longer than two, show the link to page 1 in the first iteration
                        return (
                            <>
                                <Link key={i} href={`/portfolio?page=1`}>
                                    <StyledLink selected={page ? page === i + 1 : 1 === i + 1}>1</StyledLink>
                                </Link>
                                <p>...</p>
                            </>
                        )
                    }
                    // if the page is greater than 1 and less than the total number of pages, show the link of the chosen page and a link on each side
                    if (page - 1 === i + 1 || page === i + 1 || page + 1 === i + 1 && page > 1) {
                        return (
                            <Link key={i} href={`/portfolio?page=${i + 1}`}>
                                <StyledLink selected={page ? page === i + 1 : 1 === i + 1}>{i + 1}</StyledLink>
                            </Link>
                        )
                    }
                    // if the page is not the last two, show the link to the last page
                    if (page <= pages.length - 2 && i + 1 === pages.length) {
                        return (
                            <>
                                <p>...</p>
                                <Link key={i} href={`/portfolio?page=${i + 1}`}>
                                    <StyledLink selected={page ? page === i + 1 : 1 === i + 1}>{pages.length}</StyledLink>
                                </Link>
                            </>
                        )
                    }
                }
            })}

            {page < pages.length ? (
                <Link href={`/portfolio?page=${page + 1}`}>
                    <ArrowForwardIcon className='foward' />
                </Link>
            ) : null}
        </Container>
    )
}

export default Pagination
