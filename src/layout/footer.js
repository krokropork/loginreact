import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'

class Footer extends Component {
    render() {
        return (
            <footer>
               <Container>
                    <Row>
                        <Col xs="3">.col-3</Col>
                        <Col xs="auto">.col-auto - variable width content</Col>
                        <Col xs="3">.col-3</Col>
                    </Row>   
               </Container>
            </footer>    
        )
    }   
}

export default Footer;