import React from "react";
import{Link} from "react-router-dom";
import { Button,GlobalStyle } from "../styled";

const Home = () => {
  return <div>
    <GlobalStyle/>
    <h1>Benvinguts!</h1>
    <p>A la següent aplicació es podrà calcular el pressupost final dels diferents serveis web mostrats seleccionats per l'usuari</p>
    
    <Link to='/Budget'>
        <Button>Accedir</Button>
    </Link>
    </div>;
};

export default Home;
