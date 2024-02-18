import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const SectionProfile = styled.section`
  width: 100%;
  border: 1px solid black;
  padding: 1em;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-left: 15px;

  .profiles {
    display: flex;
    gap: 15px;
    align-items: center;
  }

  p {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const Blur = styled.div`
  position: relative;
  margin-right: 20px;

  img {
    width: 120px;
    margin-left: 20px;
    margin-bottom: 20px;
    z-index: 1;
  }

  &::before {
    content: '';
    position: absolute;
    top: -25px;
    right: 20px;
    background: url(${(props) => props.url}) no-repeat left center;
    background-size: contain;
    width: 120px;
    height: 200px;
    filter: blur(2px);
    z-index: -1;
  }

  &::after {
    content: '';
    position: absolute;
    top: -25px;
    right: -20px;
    background: url(${(props) => props.url}) no-repeat left center;
    background-size: contain;
    width: 120px;
    height: 200px;
    filter: blur(2px);
    z-index: -1;
  }

  .perfil02::before {
    top: -16;
  }

  @media(min-width: 992px){
    img {
      width: 80px;
      height: 105px;
    }

    &::before {
      top: 0px;
      width: 80px;
      height: 105px;
    }

    &::after {
      top: 0px;
      width: 80px;
      height: 105px;
    }
  }
`;
