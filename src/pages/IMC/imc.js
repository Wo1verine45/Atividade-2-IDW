import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import "./imc.css";

function IMC() {
  return (
    <div>
      <Header note={false} imc={true} />
      <div className="index-body">
        <div className="IMC-def-div">
          <h2 className="IMC-def" id="IMC-def">
            O Que É IMC?
          </h2>
          <p>
            IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela
            Organização Mundial de Saúde para calcular o peso ideal de cada
            pessoa. O índice é calculado da seguinte maneira: divide-se o peso
            do paciente pela sua altura elevada ao quadrado. Diz-se que o
            indivíduo tem peso normal quando o resultado do IMC está entre 18,5
            e 24,9.
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
            <input
              type="number"
              name="weight-input"
              value=""
              data-weight-input
              id="weight-input"
            />
            <br />
            <label htmlFor="height-input">Digite sua altura aqui: </label>
            <input
              type="number"
              name="height-input"
              value=""
              data-height-input
              id="height-input"
            />
            <br />
            <div className="error-message" data-error-message></div>
          </form>
          <button className="IMC-btn" data-IMC-button>
            Calcular
          </button>
          <div className="IMC-result" data-IMC-result></div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default IMC;
