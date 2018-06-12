import React from 'react';
import './MainBanner.scss';
import { Container, Row, Col, Button } from 'reactstrap';
import Background from '../../img/Illustration.png';

const MainBanner = ({ bannerName }) => {
    return (
        <div style={{backgroundImage: `url(${Background})`}} className="main-banner">
            <Container>
                <Row>
                    <Col md={{size: 6, offset: 6}}>
                        <div className="PromoText">
                            <h3>
                                A gdybyś tak ktoś pomgógł Ci w nauce tu i teraz ?
                            </h3>
                            <p><strong>Umiesz.pl</strong> to platforma która pomoe Ci znaleźć w szybki sposób skutecznego korepetyrora</p>
                            <p> Udostępniamy Ci narzędzia, abyś mógł w ciągu zaledwie kilku minut połączyć się z korepetytorem </p>
                            <Button>znajdź korepetycje</Button>{' '}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default MainBanner;