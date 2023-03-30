import styled from "styled-components";

export const Body = styled.body`
background-color: ${props => props.backgroundColor || "#0261bf" };
transition: 0.6s;
`

export const Header = styled.header`
    height: 18vh;
    display: flex;
    justify-content: space-evenly;
    gap: 30em;
    padding-top: 1em;
    color: white;
`

export const Navegation = styled.nav`
    ul {
        height: 15vh;
        display: flex;
        align-items: center;
        gap: 1.2em;
        list-style: none;
        font-size: 1.3em;
    }

    li {
        transition: 0.3s;
    }

    li:hover {
        opacity: 0.4;
        transform: scale(1.1);
        cursor: pointer;
      }
    }
`

export const Main = styled.main`
  width: 100%;
  height: 82vh;
  background-color: "#0261bf";
  display: flex;
`;

export const TextBox = styled.section`
  width: 40vw;
  height: 82vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 3.5em;

  color: white;

  h1 {
    text-transform: uppercase;
    font-size: 3.2em;
    line-height: 0.1em;
    font-weight: 800;
    z-index: 1;
  }

  h2 {
    text-transform: uppercase;
    font-size: 6em;
    font-weight: 900;
  }

  p {
    width: 38vw;
    z-index: 1;
  }

  button {
    width: 13vw;
    padding: 0.5em;
    border-radius: 1.5em;
    border: none;
    text-transform: uppercase;
    font-size: 0.9em;
    font-weight: 500;
    margin-top: 0.8em;
    background-color: white;
    transition: 0.6s;

    &: hover {
      opacity: 0.4;
      transform: scale(1.1);
      cursor: pointer;
    }
  }
`;

export const Cans = styled.section`
  width: 20vw;

  div {
    height: 80vh;
    display: flex;
    gap: 3em;
    align-items: flex-end;
  }

  img {
    width: 18%;
    transition: 1s;

    &: hover {
      cursor: pointer;
      transform: translateY(-30%);
    }
  }
`;

export const Can = styled.section`
  width: 25vw;

  div {
    display: flex;
    justify-content: flex-end;
    padding-top: 2em;
  }

  img {
    width: 75%;
  }
`;

export const Aside = styled.aside`
  width: 15vw;

  div {
    height: 81vh;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    gap: 2em;
    padding-right: 2em;
  }

  img {
    width: 24%;
    transition: 1s;

    &: hover {
      cursor: pointer;
      transform: translateY(-30%);
      opacity: 0.4;
    }
  }
  }
`;

export const Fb = styled.section`
  width: 1.8vw;
  margin-right: 0.6em;

  img {
    width: 100%;
  }
`;
