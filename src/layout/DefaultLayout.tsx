import { Outlet } from 'react-router-dom'
import { LayoutContainer, BackgroundHeader } from './styles'
import { Header } from '../components/Header'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <BackgroundHeader />
      <Outlet />
    </LayoutContainer>
  )
}
