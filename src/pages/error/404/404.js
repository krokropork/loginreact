import React, {Component} from "react"
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {Container, Row, Col, Button, Input, InputGroupAddon, InputGroup} from "reactstrap"

import '@fortawesome/fontawesome-free-solid'
import '@fortawesome/fontawesome-free-brands'
import './404.css'


class Page404 extends Component {
  render() {
    return (
      <div className="flex-row align-content-md-center ">
        <Container>
          <Row className="d-flex justify-content-center container-404">
            <Col md="6">
              <div className="clearfix">
                <h1 className="float-left display-3 mr-4">404</h1>
                <h4 className="pt-3">Oops! You're lost.</h4>
                <p className="text-muted float-left">The page you are looking for was not found.</p>
              </div>
              <InputGroup>                
                <Input size="16" type="text" placeholder="What are you looking for?"/>
                <InputGroupAddon addonType="append">
                    <Button color="info"><FontAwesomeIcon icon={['fas','search']}/></Button>
                </InputGroupAddon>            
              </InputGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Page404;