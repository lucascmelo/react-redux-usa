import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  font-size: 48px;
  color: #bb85fc;
  max-width: 450px;
  line-height: 56px;
  margin-top: 80px;
`;

export const Form = styled.form`
  max-width: 700px;
  margin-top: 40px;
  display: flex;
  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 2px solid #fff;
    color: #333;
    border-radius: 5px 0 0 5px;

    ${(props) =>
      props.hasError &&
      css`
        border-color: red;
      `}
    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 200px;
    height: 70px;
    border-radius: 0 5px 5px 0;
  }
`;

export const Users = styled.ul`
  margin-top: 60px;

  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  gap: 1rem;
  list-style: none;

  li {
    padding: 1rem;
    border-radius: 0.3rem;
    transition: transform 0.2s;
    background: #fff;

    &:hover {
      transform: translateY(0.3rem);
    }

    p {
      margin-bottom: 1rem;
      font-size: 18px;
      color: #333;
    }

    a {
      width: 100%;
      height: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 0;
      color: #333;
      font-weight: 600;
      border-radius: 0.3rem;
      background-color: #c38efe;
      text-decoration: none;
      transition: 0.2s;
      &:hover {
        background: ${shade(0.2, '#c38efe')};
      }
    }
  }
`;

export const Error = styled.span`
  margin-top: 15px;
  display: block;
  color: red;
  font-size: 16px;
`;
