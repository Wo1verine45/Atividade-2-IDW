import { Component, createRef } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import ImcApi from "../../Services/ImcApi";
import InputMask from "react-input-mask";
import "./imc.css";
import ModalAlert from "../../components/ModalAlert/ModalAlert";

class IMC extends Component {
  constructor(props) {
    super(props);
    this.modalRef = createRef();
    this.state = { altura: "", peso: "", erros: { altura: [], peso: [] } };
  }

  mostrarModal = (title, body) => {
    this.modalRef.current.handleShow({ show: true, title, body });
  };

  escutadorDeInput = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  resetErros = () => {
    const erros = "erros";
    this.setState({
      [erros]: { altura: [], peso: [] },
    });
  };

  calcularImc = () => {
    this.resetErros();
    const { altura, peso } = this.state;
    ImcApi.calcular({ altura, peso })
      .then((resp) => {
        this.mostrarModal("Cálculo de IMC", resp.data.message);
      })
      .catch((e) => {
        if (e.response && e.response.status === 422) {
          let errosCalcImc = {};
          Object.entries(e.response.data.errors).forEach((obj, index) => {
            index === 0 && document.querySelector(`[name=${[obj[0]]}`).focus();
            errosCalcImc = { ...errosCalcImc, [obj[0]]: [obj[1]] };
          });
          this.setState({ erros: { ...this.state.erros, ...errosCalcImc } });
        } else if (e.response && e.response.data && e.response.data.message) {
          this.mostrarModal("Cálculo de IMC", e.response.data.message);
        } else {
          this.mostrarModal(
            "Cálculo de IMC",
            "Ocorreu um erro ao tentar calcular seu IMC."
          );
          console.log(e);
        }
      });
  };

  render() {
    const { altura, peso } = this.state;

    return (
      <div>
        <Header note={false} imc={true} />
        <div className="index-body">
          <div className="IMC-def-div">
            <h2 className="IMC-def" id="IMC-def">
              O Que É IMC?
            </h2>
            <p>
              IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado
              pela Organização Mundial de Saúde para calcular o peso ideal de
              cada pessoa. O índice é calculado da seguinte maneira: divide-se o
              peso do paciente pela sua altura elevada ao quadrado. Diz-se que o
              indivíduo tem peso normal quando o resultado do IMC está entre
              18,5 e 24,9.
            </p>
          </div>
          <div>
            <h2 className="IMC-table" id="IMC-table">
              Tabela com Classificação do IMC
            </h2>
            <table>
              <tr className="color-1">
                <th>IMC</th>
                <th>CLASSIFICAÇÃO</th>
                <th>OBESIDADE (GRAU)</th>
              </tr>
              <tr className="color-2">
                <td>MENOR QUE 18,5</td>
                <td>MAGREZA</td>
                <td>0</td>
              </tr>
              <tr className="color-1">
                <td>ENTRE 18,5 E 24,9</td>
                <td>NORMAL</td>
                <td>0</td>
              </tr>
              <tr className="color-2">
                <td>ENTRE 25,0 E 29,9</td>
                <td>SOBREPESO</td>
                <td>I</td>
              </tr>
              <tr className="color-1">
                <td>ENTRE 30,0 E 39,9</td>
                <td>OBESIDADE</td>
                <td>II</td>
              </tr>
              <tr className="color-2">
                <td>MAIOR QUE 40,0</td>
                <td>OBESIDADE GRAVE</td>
                <td>III</td>
              </tr>
            </table>
          </div>
          <div className="IMC-calc-div">
            <h2 className="IMC-calc" id="IMC-calc">
              Cálculo de IMC
            </h2>
            <form className="IMC-form">
              <label htmlFor="weight-input">Digite seu peso aqui: </label>
              <InputMask
                type="text"
                value={peso}
                name="peso"
                onChange={this.escutadorDeInput}
                className={
                  this.state.erros.peso.length > 0 ? " is-invalid" : ""
                }
                id="pesoImc"
                placeholder="080.0"
                mask="999.99"
                maskChar={null}
              />
              <div className="invalid-feedback">
                {this.state.erros.peso.map((item, index) => (
                  <div key={index}>{item}</div>
                ))}
              </div>
              <br />
              <label htmlFor="height-input">Digite sua altura aqui: </label>
              <InputMask
                type="text"
                value={altura}
                name="altura"
                onChange={this.escutadorDeInput}
                className={
                  "form-control" +
                  (this.state.erros.altura.length > 0 ? " is-invalid" : "")
                }
                id="alturaImc"
                placeholder="1.70"
                mask="9.99"
                maskChar={null}
              />
              <div className="invalid-feedback">
                {this.state.erros.altura.map((item, index) => (
                  <div key={index}>{item}</div>
                ))}
              </div>
              <br />
            </form>
            <button
              className="IMC-btn"
              data-IMC-button
              onClick={this.calcularImc}
            >
              Calcular
            </button>
          </div>
          <Footer />
        </div>
        <ModalAlert ref={this.modalRef} />
      </div>
    );
  }
}

export default IMC;
