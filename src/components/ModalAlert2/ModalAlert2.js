import { Fragment, React, Component } from "react";
import { Button, Modal } from "react-bootstrap";
import CadastroApi from "../../Services/CadastroApi";
import "./ModalAlert2.css";

class ModalAlert2 extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false, title: "" };
  }

  handleClose = () => this.setState({ show: false, title: "" });
  handleShow = (modal) => this.setState(modal);
  handleDelete = (cpf) => {
    CadastroApi.deletar(cpf)
      .then((r) => alert("Cadastro deletado com sucesso"))
      .catch((e) => alert("erro: " + e));
  };

  render() {
    const { show, title } = this.state;

    return (
      <Fragment>
        <Modal show={show} onHide={this.handleClose} onShow={this.handleDelete} className="modal2">
          <Modal.Header>
            <Modal.Title className="modal-title2">{title}</Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={this.handleClose}
              className="modal-btn2 update-btn"
            >
              Atualizar
            </Button>
            <Button
              variant="secondary"
              onClick={this.handleDelete(this.props.cpf)}
              className="modal-btn2 delete-btn"
            >
              Deletar
            </Button>
            <Button
              variant="secondary"
              onClick={this.handleClose}
              className="modal-btn2 close-btn"
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
