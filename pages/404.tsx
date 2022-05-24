import React from 'react'
import styled from 'styled-components'

const Custom404 = () => {
  return (
    <Error404>
      <pre>
        찾을 수 없는 페이지입니다.{'\n'}
        5초 후 홈페이지로 이동합니다...
      </pre>
    </Error404>
  );
};

export default Custom404;

const Error404=styled.div`
  display: flex;
  justify-content: center;
  font-size: 3rem;
  margin: 35vh auto;
  line-height: 4rem;
`