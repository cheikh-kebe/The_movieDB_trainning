import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  background: var(--darkGrey);
  padding: 0 20px;
`;

export const Content = styled.div`
  position: relative;
  max-width: var(--maxWidth);
  height: 55px;
  width: 100%;
  background: var(--medGrey);
  margin: 0 auto;
  border-radius: 40px;
  color: var(--white);

  img{
    position: absolute;
    left: 15px;
    top: 15px;
    width: 30px;
  }

  input{
    font-size: 28px;
    position: absolute;
    left: 0;
    margin: 8px 0;
    padding: 0 0 0 60px;
    border: 0;
    width: 95%auto;
    background: transparent;
    height: 40px;
    color: var(--white);

    :focus{
      outline: none
    }
  }
`;