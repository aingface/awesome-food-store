import '../styles/globals.css'
import type { AppProps } from 'next/app'
import styled from 'styled-components'

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
