import React, { useState } from "react";
import { Main, TextBox, Cans, Can, Aside, Fb, Body, Header, Navegation } from "./StyledComponents";
import BlueCan from "../imgs/pepsi-blue.png";
import WhiteCan from "../imgs/pepsi-white.png";
import BlackCan from "../imgs/pepsi-black.png";
import Facebook from "../imgs/facebook-logo.png";
import Twitter from "../imgs/twitter-logo.png";
import Instagram from "../imgs/instagram-logo.png";
import Logo from "../imgs/logo.png";

export default function MainSection() {
  const [imagem, setImagem] = useState(BlueCan);

  const [background, setBackground] = useState("#0261bf");

  return (
    <Body backgroundColor={background}>
      <Header>
        <img src={Logo} alt="Logo" />
        <Navegation>
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>What's New</li>
            <li>Newsletter</li>
            <li>Contact</li>
          </ul>
        </Navegation>
      </Header>

      <Main>
        <TextBox>
          <h1>That's what</h1>
          <h2>I like</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            sapiente aspernatur possimus odio accusantium inventore. Vel
            perferendis molestias a unde eum dolorem officia doloremque!
            Doloribus asperiores quas vitae quisquam libero.
          </p>
          <button>View all products</button>
        </TextBox>

        <Cans>
          <div>
            <img
              onClick={() => {
                setImagem(BlueCan);
                setBackground();
              }}
              src={BlueCan}
              alt="Pepsi Blue"
            />
            <img
              onClick={() => {
                setImagem(WhiteCan);
                setBackground("#E60C2D");
              }}
              src={WhiteCan}
              alt="Pepsi Diet"
            />
            <img
              onClick={() => {
                setImagem(BlackCan);
                setBackground("#1F1E1F");
              }}
              src={BlackCan}
              alt="Pepsi Zero Sugar"
            />
          </div>
        </Cans>

        <Can>
          <div>
            <img src={imagem} alt="Pepsi Blue" />
          </div>
        </Can>

        <Aside>
          <div>
            <Fb>
              <img src={Facebook} alt="Facebook logo" />
            </Fb>
            <img src={Twitter} alt="Twitter logo" />
            <img src={Instagram} alt="Instagram logo" />
          </div>
        </Aside>
      </Main>
    </Body>
  );
}
