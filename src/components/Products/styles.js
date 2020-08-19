import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h4 {
      font-size: 1.5rem;
      color: #bb85fc;
    }

    button {
      height: 35px;
    }
  }

  table {
    width: 100%;
    margin-top: 1rem;
    color: #333;
    text-align: left;
    border-collapse: collapse;
    background: #fff;

    th,
    td {
      padding: 1rem;
    }

    th {
      font-size: 1.1rem;
      border-bottom: 1px solid #fff;
      line-height: 1.375rem;
    }

    tbody {
      tr {
        border-top: 2px solid rgba(0, 0, 0, 0.15);
      }
    }
  }
`;
export const Actions = styled.td`
  text-align: right;
  button + button {
    margin-left: 1rem;
  }

  button {
    font-weight: 400;
  }
`;

export const RemoveBtn = styled.button`
  background: red;
  color: #fff;
  &:hover {
    background: ${shade(0.2, 'red')};
  }
`;

export const Modal = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 10;

  form {
    width: 350px;
    padding: 1rem;
    background: #fff;

    label {
      margin-bottom: 0.5rem;
      display: block;
    }

    input[type='text'],
    input[type='number'] {
      width: 100%;
      padding: 0.5rem;
      border: 1px solid #333;
      border-radius: 0.3rem;
      margin-bottom: 1rem;
    }

    button[type='submit'] {
      width: 100%;
      padding: 0.8rem;
      color: #fff;
      background: #28a745;
      &:hover {
        background: ${shade(0.2, '#28a745')};
      }
    }
  }

  header {
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      padding: 0;
      font-size: 1.5rem;
      color: #333;
      background: transparent;
    }
  }
`;
