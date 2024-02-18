import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Section = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const Div = styled.div`
  width: 100%;
  border: 1px solid black;
  padding: 1em;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-left: 15px;

  .inputs {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .inputs div {
    width: 100%;
  }

  input {
    padding: 0.4rem;
    border: 2px solid ${colors.gray};
    border-radius: 5px;
    width: 40%;
    margin-bottom: 20px;
  }

  .inputRes {
    border: 2px solid ${colors.orange};
  }

  span {
    display: inline-block;
    width: 10%;
    margin: 0 5%;
    border: 1px solid black;
  }

  button {
    background-color: ${colors.orange};
    border: 2px solid transparent;
    border-radius: 5px;
    color: #fff;
    font-size: 0.9rem;
    width: 40%;
    cursor: pointer;
  }
`;
