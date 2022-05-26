import { Fragment, React, Component } from "react";
import { Button, Modal } from "react-bootstrap";
import "./ModalAlert2.css";

class ModalAlert2 extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false, title: ""};
  }

  handleClose = () => this.setState({ show: false, title: ""});
  handleShow = (modal) => this.setState(modal);

  render() {
    const { show, title} = this.state;

    return (
      <Fragment>
        <Modal show={show} onHide={this.handleClose} className="modal2">
          <Modal.Header>
            <Modal.Title className="modal-title2">{title}</Modal.Title>
          </Modal.Header>
          <Modal.Footer>
          <Button
              variant="secondary"
              onClick={this.handleClose}
              className="modal-btn2"
            >
              Atualizar
            </Button>
            <Button
              variant="secondary"
              onClick={this.handleClose}
              className="modal-btn2"
            >
              Deletar
            </Button>
            <Button
              variant="secondary"
              onClick={this.handleClose}
              className="modal-btn2"
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
  }
}

export default ModalAlert2;
