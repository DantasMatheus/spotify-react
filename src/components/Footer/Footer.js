import React from "react";
import "./Footer.css";


const Footer = () => {
    return(
        <footer className="disclaimer-premium">
            <div className="text">
            <p className="disclaimer-premium__title">Testar o premium de graça por 3 meses</p>
            <p className="disclaimer-premium__subtitle">Inscreva-se para curtir música sem anúncios, off-line e muito mais.</p>
    </div>
    <div className="button">
        <button Type="disclaimer-premium__button">Inscreva-se grátis</button>	
    </div>
    </footer>
    )
};

export default Footer;
