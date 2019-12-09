import React from 'react'
import { Modal, Container, Row, Col, Button } from 'react-bootstrap'
import OverlayTriggerCustom from '../../components/UI/OverlayTriggerCustom'

const ResultModal = (props) => {
    
    return (
        <>
            <Modal {...props} aria-labelledby="contained-modal-title-vcenter" backdrop={false}>
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Result
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col style={{wordWrap: "break-word"}}>
                                {props.message}
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <OverlayTriggerCustom onHide={props.onHide}>
                        <Button variant="outline-dark">Close</Button>
                    </OverlayTriggerCustom>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ResultModal
