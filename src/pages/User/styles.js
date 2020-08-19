import styled from 'styled-components';
import { darken, shade } from 'polished';

export const UserInfo = styled.section`
  margin-top: 80px;
  header {
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid #bb85fc;
    &,
    a {
      display: flex;
      align-items: center;
    }

    a {
      text-decoration: none;
      color: #fff;
      transition: 0.2s;
      &:hover {
        color: ${darken(0.2, '#fff')};
      }

      svg {
        margin-right: 5px;
      }
    }

    h2 {
      margin-left: 1rem;
      font-size: 2rem;
      color: #fff;
    }
  }
  section {
    margin-bottom: 2rem;
    padding: 1rem;
    display: flex;
    align-items: center;
    background: #fff;
    ul {
      margin-right: auto;
      list-style: none;
      color: #333;
    }
    li + li {
      margin-top: 1rem;
    }

    h3 {
      font-size: 3rem;
      color: #bb85fc;
      text-align: center;
      small {
        display: block;
        color: #333;
        font-size: 1rem;
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 60px;

  a {
    width: 100%;
    padding: 24px;
    display: flex;
    align-items: center;
    border-radius: 5px;
    text-decoration: none;
    transition: transform 0.2s;
    background: #fff;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
      svg {
        color: ${shade(0.2, '#04d361')};
      }
    }

    div {
      margin-left: 16px;
      flex: 1;
      strong {
        font-size: 20px;
        color: #333;
      }

      p {
        margin-top: 5px;
        font-size: 18px;
        color: #a8a8b3;
      }
    }

    svg {
      margin-left: auto;
      color: #333;
      transition: color 0.2s;
    }
  }
`;
