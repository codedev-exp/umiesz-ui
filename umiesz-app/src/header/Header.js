import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import MainMenu from './MainMenu';
import './Header.scss';
import mainLogo from '../img/Logo.png';

const mapStateToProps = state => ({
    appName: 'nie'
});

class Header extends React.Component {

    render() {

        return (
            <div className="ContainerHeader">
                <Container fluid={false}>
                    <Row>
                    <Col md="3">
                        <img src={mainLogo} alt="logo" />
                    </Col>
                    <Col md="9">
                        <MainMenu />
                    </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default connect(mapStateToProps, () => ({}))(Header);