import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styled from 'styled-components';

const Container = styled.div`
    background-color: #BBEFFD;
`;

const ReactBootstrapDemo = () => {
    return (
        <>
            <Container className='container'>
                <Row>
                    <Col>1 of 1</Col>
                </Row>
            </Container>

            <Container className='container-fluid my-5'>
                <Row>
                    <Col>1 of 1</Col>
                </Row>
            </Container>
        </>
    );
}

export default ReactBootstrapDemo;