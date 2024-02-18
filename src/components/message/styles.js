import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Section = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const Form = styled.form`
  width: 100%;
  border: 1px solid black;
  padding: 1em;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-left: 15px;

  h2 {
    color: ${colors.blue};
  }

  input {
    border: 2px solid ${colors.gray};
    border-radius: 5px;
  }

  .inputData {
    padding: 5px;
  }

  .inputMessage {
    width: 100%;
    margin: auto;
    text-align: left;
    padding: 5px;
    height: 200px;
  }

  button {
    background-color: ${colors.orange};
    border: 2px solid transparent;
    border-radius: 5px;
    color: #fff;
    font-size: 0.9rem;
    width: 40%;
  }
`;
