import '../styles/globals.css'
import type { AppProps } from 'next/app'
import styled from 'styled-components'
import Header from '../components/Header'
import Body from '../components/Body'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContentsWrapper className='contents-wrapper'>
      <Component {...pageProps} />
    </ContentsWrapper>
  )
}

export default MyApp

const ContentsWrapper=styled.div`
  display: flex;
  flex-direction: column;
`
