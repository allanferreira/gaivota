import styled from 'styled-components'

export const List = styled.div``
export const Farm = styled.div`
    border: 1px solid #ccc;
`
export const Name = styled.div`
    cursor: pointer;
    padding: 10px;
    `
export const Detail = styled.div`
    display: ${({open}) => open ? 'block' : 'none'};
    border-top: 1px solid #ccc;
    padding: 10px;
`
export const Item = styled.div`
    line-height: 1.3;
`
export const Category = styled.div`
    font-weight: bold;
`
