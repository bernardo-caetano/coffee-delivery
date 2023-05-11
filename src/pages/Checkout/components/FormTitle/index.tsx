import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { IconContainer, InfoContent, FormTitleContainer } from './styles'

interface FormTitleProps {
  icon: 'map' | 'dollar'
  content: string[]
}

export function FormTitle({ icon, content }: FormTitleProps) {
  return (
    <FormTitleContainer>
      <IconContainer>
        {icon === 'map' ? (
          <MapPinLine color="#C47F17" size={22} />
        ) : (
          <CurrencyDollar color="#8047F8" size={22} />
        )}
      </IconContainer>
      <InfoContent>
        <p>{content[0]}</p>
        <p>{content[1]}</p>
      </InfoContent>
    </FormTitleContainer>
  )
}
