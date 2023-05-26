import styled from 'styled-components'

export const Input = styled.input`
  width: 100%;
  height: 80px;
  padding: 24px 30px;

  font-size: 22px;

  background-color: transparent;
  border: 1px solid rgb(255 255 255 / 50%);
  border-radius: 10px 0 0 10px;

  @media (width <= 1024px) {
    height: 40px;
    border-radius: 0;
  }
`
