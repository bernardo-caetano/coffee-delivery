import styled from 'styled-components'

const BaseContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`

export const InfoContent = styled(BaseContainer)`
    align-items: flex-start;
    gap: 0.75rem;
`
export const DetailContent = styled(BaseContainer)`
    flex-direction: column;
    align-items: flex-start;

    span {
        display: flex;
        gap: 0.5rem;
        p {
            font-size: 1rem;
            line-height: 130%;
            color: ${props => props.theme['base-text']};
        }
    }
`
export const BoldParagraph = styled.p`
    font-weight: 700 !important;
`