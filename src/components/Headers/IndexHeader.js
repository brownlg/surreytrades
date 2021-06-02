/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,  
  Row,
} from "reactstrap";

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" + require("assets/img/background-house.jpg").default + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <img
              alt="..."
              className="n-logo"
              src={require("assets/img/surreytrades-logo.png").default}
            ></img>
            <h1 className="h1-seo">Find your trade now.</h1>
            <h3>Connecting Trades with People.</h3>
            <Input
              placeholder="Type trade here (plumber, electrician)..."
              type="text"                     
            />
          </div>
         
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
