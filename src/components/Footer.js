import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Link } from "react-router-dom";
import "./Footer.scss"

const Footer = () => {
  return (
    <MDBFooter  className="font-small pt-4 mt-4  backFooter">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title TituloFooter tamañoTitulo">Brave Swimwear</h5>
            <div>
                <img src="/BRAVE.png" className="fotoFooter" />
            </div>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title TituloFooter tamañoTitulo">WebSite</h5>
            <ul >
              <li className="list-unstyled TituloFooter">
              <Link to={'/'}>Home</Link>
              </li>
              <li className="list-unstyled ">
                <Link to={'/category/bikinis'}>Bikinis</Link>
              </li>
              <li className="list-unstyled ">
              <Link to={'/category/enterizas'} >Enterizas</Link>
              </li>
              <li className="list-unstyled ">
              <Link to={'/category/summer'}>Summer Sale</Link>
              </li>
              <li className="list-unstyled ">
              <Link to={'/comocomprar'}>Como comprar</Link>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3 TituloFooter backCopy">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} <a> Copyright: Brave Swimwear ar </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;