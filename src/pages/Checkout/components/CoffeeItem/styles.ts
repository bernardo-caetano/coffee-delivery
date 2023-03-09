import styled from 'styled-components'

const BaseContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const CoffeeItemContainer = styled(BaseContainer)`
    flex-direction: column;
    width: 100%;
    
    img {
        width: 4rem;
        height: 4rem;
    }
`

export const CoffeeItemContent = styled(BaseContainer)`
   width: 100%;
   gap: 1.25rem;
`

export const Title = styled(BaseContainer)`
    justify-content: space-between;
    width: 100%;

    p {
        color: ${props => props.theme['base-subtitle']};
        flex: none;
        order: 0;
        flex-grow: 0;
    }

    p:last-child {
        font-weight: 700;
        color: ${props => props.theme['base-text']};
        flex: none;
        order: 1;
        flex-grow: 0;       
    }
`

export const ActionsContainer = styled(BaseContainer)`
    width: 100%;
    justify-content: flex-start;
`

export const DetailsContainer = styled(BaseContainer)`
    flex-direction: column;
    width: 100%;
`