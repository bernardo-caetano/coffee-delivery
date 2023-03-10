import { IntroContainer, IntroContent, Items, Title } from './styles'
import Coffee from '../../../../assets/images/home-image-coffee.svg'
import { IconCircle } from '../../../../components/IconCircle'

export function Intro() {
  return (
    <IntroContainer>
      <IntroContent>
        <Title>
          <h1>
            Encontre o café perfeito
            <br />
            para qualquer hora do dia
          </h1>
          <h2>
            Com o Coffee Delivery você recebe seu café onde estiver, a<br />
            qualquer hora
          </h2>
        </Title>
        <Items color="yellow-dark">
          <li>
            <IconCircle element="cart" />
            <p>Compra simples e segura</p>
          </li>
          <li>
            <IconCircle element="box" />
            <p>Compra simples e segura</p>
          </li>
          <li>
            <IconCircle element="timer" />
            <p>Compra simples e segura</p>
          </li>
          <li>
            <IconCircle element="coffee" />

            <p>Compra simples e segura</p>
          </li>
        </Items>
      </IntroContent>
      <img src={Coffee} alt="copo de café com a logo do coffee delivery" />
    </IntroContainer>
  )
}

// falta alterar os icones, adicionar background, mas quero adicionar dinamicamente
