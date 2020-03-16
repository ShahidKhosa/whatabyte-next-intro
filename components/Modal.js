import React from 'react';
import Modal from 'react-bootstrap/Modal';

const BModal = props => {

    return (
        <Modal
            {...props}            
            aria-labelledby="contained-modal-title-vcenter"
            animation
        >

            {props.title &&
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {props.title}
                    </Modal.Title>
                </Modal.Header>
            }
            <Modal.Body>
                {props.children}
            </Modal.Body>

            {props.footer &&
                <Modal.Footer>
                    <button onClick={props.onHide}>Close</button>
                </Modal.Footer>
            }
        </Modal>
    );
}

export default BModal;