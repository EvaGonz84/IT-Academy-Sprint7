import styled, { createGlobalStyle } from "styled-components";

export const Panell = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border: solid 3px;
  border-radius: 10px;
  font-size: 15px;
  max-width: 350px;
  min-width: 200px;
  margin: 10px;
  padding: 30px 5px;
`;

export const Button = styled.button`
  flex-grow: 4;
  background-color: salmon;
  color: white;
  font-size: 20px;
  border: transparent;
  border-radius: 10px;
  widht: 70%;
  margin: 2px;
  padding: 2px;
`;

export const GlobalStyle = createGlobalStyle`
  body    {
            display:flex;
            justify-content: space-around;
            align-items: center;
            
            font-size: 1rem;
            height:400px;
            background-color: #F1F1F1;
          }
  `;
