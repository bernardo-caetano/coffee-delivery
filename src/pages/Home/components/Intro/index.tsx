import { IntroContainer, IntroContent, Items, Title } from './styles'
import Coffee from '../../../../assets/images/home-image-coffee.svg'
import { ShoppingCart } from 'phosphor-react'

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
            <span>
              <ShoppingCart size={16} color="#FFFFFF" weight="fill" />
            </span>
            <p>Compra simples e segura</p>
          </li>
          <li>
            <span>
              <ShoppingCart size={16} color="#FFFFFF" weight="fill" />
            </span>
            <p>Compra simples e segura</p>
          </li>
          <li>
            <span>
              <ShoppingCart size={16} color="#FFFFFF" weight="fill" />
            </span>
            <p>Compra simples e segura</p>
          </li>
          <li>
            <span>
              <ShoppingCart size={16} color="#FFFFFF" weight="fill" />
            </span>
            <p>Compra simples e segura</p>
          </li>
        </Items>
      </IntroContent>
      <img src={Coffee} alt="copo de café com a logo do coffee delivery" />
    </IntroContainer>
  )
}

// falta alterar os icones, adicionar background, mas quero adicionar dinamicamente
