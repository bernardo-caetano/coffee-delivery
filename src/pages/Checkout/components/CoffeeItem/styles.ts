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

    hr {
        width: 100%;
        margin: 1.5rem 0;
        border: 1px solid ${props => props.theme['base-button']};

    }
`

export const CoffeeItemContent = styled(BaseContainer)`
   width: 100%;
   gap: 1.25rem;
   padding: 0.5rem 0.25rem;
`

export const Title = styled(BaseContainer)`
    justify-content: space-between;
    width: 100%;
    margin-bottom: 0.5rem;

    p {
        color: ${props => props.theme['base-subtitle']};
        flex: none;
        order: 0;
        flex-grow: 0;
    }

    p:first-child {
        font-size: 1rem;
        line-height: 130%;
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
    gap: 0.5rem;

    button {
        display: flex;
        padding: 0.5rem;
        gap: 0.5rem;
        background: ${props => props.theme['base-button']};
        border-radius: 6px;
        border: none;

       
        font-size: 0.75rem;
        line-height: 160%;
        text-transform: uppercase;
        color: ${props => props.theme['base-text']};
    }
`

export const DetailsContainer = styled(BaseContainer)`
    flex-direction: column;
    width: 100%;
`