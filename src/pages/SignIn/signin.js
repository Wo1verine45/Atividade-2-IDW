import { Component, createRef } from "react";
//import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import CadastroApi from "../../Services/CadastroApi";
import EnderecoApi from "../../Services/EnderecoApi";
import InputMask from "react-input-mask";
import ModalAlert from "../../components/ModalAlert/ModalAlert";
import "./signin.css";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.modalRef = createRef();
    this.state = {
      listaEstados: [],
      formCadastro: {
        aceito: true,
        nomeCompleto: "",
        dataNascimento: "",
        sexo: "",
        cpf: "",
        //ADICIONAR NOVO AQUI
        logradouro: "",
        numeroLogradouro: "",
        uf: "",
        cidade: "",
        cep: "",
        email: "",
      },
      erros: {
        nomeCompleto: [],
        dataNascimento: [],
        sexo: [],
        cpf: [],
        logradouro: [],
        numeroLogradouro: [],
        cep: [],
        cidade: [],
        uf: [],
        email: [],
        //ADICIONAR NOVO AQUI
      },
    };
  }

  mostrarModal = (title, body) => {
    this.modalRef.current.handleShow({ show: true, title, body });
  };

  escutadorDeInputFormCadastro = (event) => {
    const { name, value } = event.target;
    this.setState({
      formCadastro: {
        ...this.state.formCadastro,
        ...{ [name]: value.replaceAll(".", "").replace("-", "") },
      },
    });
  };

  escutadorDeInputFormCadastroData = (event) => {
    const { name, value } = event.target;
    this.setState({
      formCadastro: {
        ...this.state.formCadastro,
        ...{ [name]: value },
      },
    });
  };

  aceitarTermo = () => {
    this.setState({
      formCadastro: {
        ...this.state.formCadastro,
        ...{ aceito: !this.state.formCadastro.aceito },
      },
    });
  };

  componentDidMount() {
    EnderecoApi.getEstados().then((resp) =>
      this.setState({ listaEstados: resp.data })
    );
  }

  /*verificaCep(cep) {
    EnderecoApi.getEndereco(cep).then((resp) =>
      this.setState({
        logradouro: resp.logradouro,
        estado: resp.uf,
        cidade: resp.localidade,
        nomeCompleto: this.state.formCadastro.nomeCompleto,
        aceito: this.state.formCadastro.aceito,
        cep: this.state.formCadastro.cep,
      })
    );
  }
  */

  resetErros = () => {
    const erros = "erros";
    this.setState({
      //ADICIONAR NOVO AQUI
      [erros]: {
        nomeCompleto: [],
        dataNascimento: [],
        sexo: [],
        cpf: [],
        logradouro: [],
        numeroLogradouro: [],
        cep: [],
        cidade: [],
        uf: [],
        email: [],
      },
    });
  };

  enviarFormularioCadastro = () => {
    this.resetErros();
    CadastroApi.cadastrar(this.state.formCadastro)
      .then((r) => {
        this.mostrarModal("Cálculo de IMC", r.data.message);
      })
      .catch((e) => {
        //console.log("erro de enviar cadastro:", e.response);
        if (e.response && e.response.status === 422) {
          let errosFormCadastro = {};
          Object.entries(e.response.data.errors).forEach((obj, index) => {
            //console.log("objeto:", obj);
            index === 0 && document.querySelector(`[name=${[obj[0]]}`).focus();
            errosFormCadastro = { ...errosFormCadastro, [obj[0]]: [obj[1]] };
          });
          this.setState({
            erros: { ...this.state.erros, ...errosFormCadastro },
          });
        } else if (e.response && e.response.data && e.response.data.message) {
          this.mostrarModal("Erro:", e.response.data.message);
        } else {
          this.mostrarModal(
            "Erro:",
            "Ocorreu um erro ao tentar calcular seu IMC."
          );
          console.log(e);
        }
      });
    this.setState({
      formCadastro: {
        aceito: false,
        nomeCompleto: "",
        dataNascimento: "",
        sexo: "",
        cpf: "",
        //ADICIONAR NOVO AQUI
        logradouro: "",
        numeroLogradouro: "",
        uf: "",
        cidade: "",
        cep: "",
        email: "",
      },
    });
  };

  render() {
    const formCadastro = this.state.formCadastro;

    //ADICIONAR NOVO AQUI
    //console.log("valor do nome completo:", formCadastro.nomeCompleto);
    //console.log("valor da data de nascimento:", formCadastro.dataNascimento);
    //console.log("valor do sexo:", formCadastro.sexo);
    //console.log("valor do cpf:", formCadastro.cpf);
    //console.log("valor do logradouro:", formCadastro.logradouro);
    //console.log(
    //  "valor do número do logradouro:",
    //  formCadastro.numeroLogradouro
    //);
    //console.log("valor do cep:", formCadastro.cep);
    //console.log("valor da cidade:", formCadastro.cidade);
    //console.log("valor da uf:", formCadastro.uf);
    //console.log("valor do email:", formCadastro.email);

    return (
      <div>
        <Header note={false} signin={true} />
        <div className="sign-in-body">
          <div className="main-container">
            <div className="sign-in-container">
              <h2 className="sign-in-title">Cadastro</h2>
              <form className="sign-in-form">
                <label htmlFor="full-name">Nome Completo:</label>
                <input
                  type="text"
                  value={formCadastro.nomeCompleto}
                  name="nomeCompleto"
                  onChange={this.escutadorDeInputFormCadastro}
                  className={
                    this.state.erros.nomeCompleto.length > 0
                      ? " is-invalid"
                      : ""
                  }
                  id="full-name"
                  placeholder="Pedro Ronaldo Moreira Travessin"
                />
                <div className="invalid-feedback-cadastro">
                  {this.state.erros.nomeCompleto.map((item, index) => (
                    <div key={index}>{item}</div>
                  ))}
                </div>
                <br />
                <label htmlFor="birthday">Data de Nascimento: </label>
                <input
                  type="date"
                  value={formCadastro.dataNascimento}
                  name="dataNascimento"
                  onChange={this.escutadorDeInputFormCadastroData}
                  className={
                    this.state.erros.dataNascimento.length > 0
                      ? " is-invalid"
                      : ""
                  }
                  id="birthday"
                />
                <div className="invalid-feedback-cadastro">
                  {this.state.erros.dataNascimento.map((item, index) => (
                    <div key={index}>{item}</div>
                  ))}
                </div>
                <br />
                <label htmlFor="gender">Sexo:</label>
                <div
                  className={
                    "div-select" +
                    (this.state.erros.sexo.length > 0 ? " is-invalid" : "")
                  }
                >
                  <select
                    className="select1"
                    value={formCadastro.sexo}
                    name="sexo"
                    onChange={this.escutadorDeInputFormCadastro}
                    id="gender"
                  >
                    <option>Escolha um sexo...</option>
                    <option
                      value="M"
                      onChange={this.escutadorDeInputFormCadastro}
                    >
                      Masculino
                    </option>
                    <option
                      value="F"
                      onChange={this.escutadorDeInputFormCadastro}
                    >
                      Feminino
                    </option>
                  </select>
                </div>
                <div className="invalid-feedback-cadastro">
                  {this.state.erros.sexo.map((item, index) => (
                    <div key={index}>{item}</div>
                  ))}
                </div>
                <br />
                <label htmlFor="CPF">CPF:</label>
                <InputMask
                  type="text"
                  value={formCadastro.cpf}
                  name="cpf"
                  onChange={this.escutadorDeInputFormCadastro}
                  className={
                    this.state.erros.cpf.length > 0 ? " is-invalid" : ""
                  }
                  id="CPF"
                  placeholder="111.111.111-11"
                  mask="999.999.999-99"
                  maskChar={null}
                />
                <div className="invalid-feedback-cadastro">
                  {this.state.erros.cpf.map((item, index) => (
                    <div key={index}>{item}</div>
                  ))}
                </div>
                <br />
                <label htmlFor="logradouro">Logradouro: </label>
                <input
                  type="text"
                  value={formCadastro.logradouro}
                  name="logradouro"
                  onChange={this.escutadorDeInputFormCadastro}
                  className={
                    this.state.erros.logradouro.length > 0 ? " is-invalid" : ""
                  }
                  id="logradouro"
                  placeholder="Rua do Teste"
                />
                <div className="invalid-feedback-cadastro">
                  {this.state.erros.logradouro.map((item, index) => (
                    <div key={index}>{item}</div>
                  ))}
                </div>
                <br />
                <label htmlFor="logradouro-number">Número do logradouro:</label>
                <input
                  type="text"
                  value={formCadastro.numeroLogradouro}
                  name="numeroLogradouro"
                  onChange={this.escutadorDeInputFormCadastro}
                  className={
                    this.state.erros.numeroLogradouro.length > 0
                      ? " is-invalid"
                      : ""
                  }
                  id="logradouro-number"
                  placeholder="111"
                />
                <div className="invalid-feedback-cadastro">
                  {this.state.erros.numeroLogradouro.map((item, index) => (
                    <div key={index}>{item}</div>
                  ))}
                </div>
                <br />
                <label htmlFor="bairro">Bairro: </label>
                <select name="bairro-dropdown" id="bairro" className="select">
                  <option>Escolha um bairro...</option>
                  <option>Água Morna</option>
                  <option>Capuava</option>
                  <option>Centro</option>
                  <option>Cercado Grande</option>
                  <option>Chácara Ana Lúcia</option>
                  <option>Chácara Bartira</option>
                  <option>Chácara Bosque Embu</option>
                  <option>Chácara Caxingui</option>
                  <option>Chácara Embu Colonial</option>
                  <option>Chácara Esplanada Embu</option>
                  <option>Chácara Jardim Colibri</option>
                  <option>Chácara Marajuara</option>
                  <option>Chácara Maria Alice</option>
                  <option>Chácara Pinheirinho</option>
                  <option>Chácara Pirajussara</option>
                  <option>Chácara Santa Maria</option>
                  <option>Chácara São Cristóvão</option>
                  <option>Chácara São Marcos</option>
                  <option>Chácara Uirapuru</option>
                  <option>Chs Ana Lúcia</option>
                  <option>Chs Aurora</option>
                  <option>Chs Bartira</option>
                  <option>Chs Caxingui</option>
                  <option>Chs Lídia</option>
                  <option>Chs São Cristóvão</option>
                  <option>Condomínio Meu Recanto</option>
                  <option>Conjunto Habitacional Embu N</option>
                  <option>Conjunto Residencial Vila Carvalho</option>
                  <option>Cooperativa</option>
                  <option>Desembargador Aroaldo Azevedo</option>
                  <option>Desmembramento Prado Rangel</option>
                  <option>Embu-mirim</option>
                  <option>Engenho Velho</option>
                  <option>Esplanada</option>
                  <option>Estância de Embuarama</option>
                  <option>Gramado</option>
                  <option>Granja Nossa Senhora Aparecida</option>
                  <option>Invernada</option>
                  <option>Jardim Ângela</option>
                  <option>Jardim Arabutan</option>
                  <option>Jardim Batista</option>
                  <option>Jardim Bela Vista</option>
                  <option>Jardim Campo Limpo</option>
                  <option>Jardim Casa Branca</option>
                  <option>Jardim Castilho</option>
                  <option>Jardim Colégio</option>
                  <option>Jardim Colibri</option>
                  <option>Jardim Colinas</option>
                  <option>Jardim Cultura Física</option>
                  <option>Jardim da Luz</option>
                  <option>Jardim de Lourdes</option>
                  <option>Jardim do Colégio</option>
                  <option>Jardim Dom José</option>
                  <option>Jardim dos Ipês</option>
                  <option>Jardim dos Moraes</option>
                  <option>Jardim dos Oliveiras</option>
                  <option>Jardim Elisa</option>
                  <option>Jardim Embuema</option>
                  <option>Jardim Emílio Carlos</option>
                  <option>Jardim Estela</option>
                  <option>Jardim Fabiana</option>
                  <option>Jardim Ferreira</option>
                  <option>Jardim Flórida</option>
                  <option>Jardim Flórida Novo</option>
                  <option>Jardim Indaiá</option>
                  <option>Jardim Independência</option>
                  <option>Jardim Independência II</option>
                  <option>Jardim Irapiranga</option>
                  <option>Jardim Irene</option>
                  <option>Jardim Itatiaia</option>
                  <option>Jardim Júlia</option>
                  <option>Jardim Jurema</option>
                  <option>Jardim Laila</option>
                  <option>Jardim Liberdade</option>
                  <option>Jardim Lourdes</option>
                  <option>Jardim Luz</option>
                  <option>Jardim Magali</option>
                  <option>Jardim Magaly</option>
                  <option>Jardim Maranhão</option>
                  <option>Jardim Marina</option>
                  <option>Jardim Mascarenhas</option>
                  <option>Jardim Mimas</option>
                  <option>Jardim Moraes</option>
                  <option>Jardim Nayara</option>
                  <option>Jardim Nossa Senhora de Fátima</option>
                  <option>Jardim Nossa Senhora Fátima</option>
                  <option>Jardim Nova República</option>
                  <option>Jardim Novo Campo Limpo</option>
                  <option>Jardim Novo Embu</option>
                  <option>Jardim Olímpia</option>
                  <option>Jardim Olímpia Itatuba</option>
                  <option>Jardim Oliveiras</option>
                  <option>Jardim Pindorama</option>
                  <option>Jardim Pinheirinho</option>
                  <option>Jardim Pinheiros</option>
                  <option>Jardim Presidente Kennedy</option>
                  <option>Jardim Recanto da Fonte</option>
                  <option>Jardim Sadie</option>
                  <option>Jardim Santa Bárbara</option>
                  <option>Jardim Santa Clara</option>
                  <option>Jardim Santa Emília</option>
                  <option>Jardim Santa Luzia</option>
                  <option>Jardim Santa Maria</option>
                  <option>Jardim Santa Rita</option>
                  <option>Jardim Santa Rosa</option>
                  <option>Jardim Santa Tereza</option>
                  <option>Jardim Santa Tereza Novo</option>
                  <option>Jardim Santo Antônio</option>
                  <option>Jardim Santo Eduardo</option>
                  <option>Jardim São Francisco</option>
                  <option>Jardim São Luiz</option>
                  <option>Jardim São Marcos</option>
                  <option>Jardim São Vicente</option>
                  <option>Jardim Sérgio</option>
                  <option>Jardim Silvana</option>
                  <option>Jardim Sílvia</option>
                  <option>Jardim Taima</option>
                  <option>Jardim Tomé</option>
                  <option>Jardim Valo Verde</option>
                  <option>Jardim Vazame</option>
                  <option>Jardim Vila Alegre</option>
                  <option>Jardim Vista Alegre</option>
                  <option>Jardim Vitória</option>
                  <option>Maria Auxiliadora</option>
                  <option>Moinho Velho</option>
                  <option>Parque Caetés</option>
                  <option>Parque das Chácaras</option>
                  <option>Parque dos Caetés</option>
                  <option>Parque Esplanada</option>
                </select>
                <br />
                <label htmlFor="CEP">CEP: </label>
                <InputMask
                  type="text"
                  value={formCadastro.cep}
                  name="cep"
                  onChange={this.escutadorDeInputFormCadastro}
                  className={
                    this.state.erros.cep.length > 0 ? " is-invalid" : ""
                  }
                  //onBlur={this.verificaCep(this.state.formCadastro.cep)}
                  //className={
                  //  "form-control" +
                  //  (this.state.erros.peso.length > 0 ? " is-invalid" : "")
                  //}
                  id="CEP"
                  placeholder="01001-000"
                  mask="99999-999"
                  maskChar={null}
                />
                <div className="invalid-feedback-cadastro">
                  {this.state.erros.cep.map((item, index) => (
                    <div key={index}>{item}</div>
                  ))}
                </div>
                <br />
                <label htmlFor="city">Cidade: </label>
                <input
                  type="text"
                  value={formCadastro.cidade}
                  name="cidade"
                  onChange={this.escutadorDeInputFormCadastro}
                  className={
                    this.state.erros.cidade.length > 0 ? " is-invalid" : ""
                  }
                  id="city"
                  placeholder="Embu das Artes"
                />
                <div className="invalid-feedback-cadastro">
                  {this.state.erros.cidade.map((item, index) => (
                    <div key={index}>{item}</div>
                  ))}
                </div>
                <br />
                <label htmlFor="UF">UF: </label>
                <div
                  className={
                    "div-select" +
                    (this.state.erros.uf.length > 0 ? " is-invalid" : "")
                  }
                >
                  <select
                    className="select1"
                    value={formCadastro.uf}
                    name="uf"
                    onChange={this.escutadorDeInputFormCadastro}
                    id="UF"
                  >
                    <option value="">Escolha um estado...</option>
                    {this.state.listaEstados.map((item) => (
                      <option
                        onChange={this.escutadorDeInputFormCadastro}
                        key={item.uf}
                        value={item.uf}
                      >
                        {item.nome}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="invalid-feedback-cadastro">
                  {this.state.erros.uf.map((item, index) => (
                    <div key={index}>{item}</div>
                  ))}
                </div>
                <br />
                <label htmlFor="email">E-mail:</label>
                <input
                  type="email"
                  value={formCadastro.email}
                  name="email"
                  onChange={this.escutadorDeInputFormCadastroData}
                  className={
                    this.state.erros.email.length > 0 ? " is-invalid" : ""
                  }
                  id="email"
                  placeholder="fulano@email.com"
                />
                <div className="invalid-feedback-cadastro">
                  {this.state.erros.email.map((item, index) => (
                    <div key={index}>{item}</div>
                  ))}
                </div>
                <br />
                <label htmlFor="password">Senha: </label>
                <input type="password" name="password" id="password" />
                <br />
                <div>
                  <input
                    type="checkbox"
                    id="cadastroDeAcordo"
                    onChange={this.aceitarTermo}
                  />
                  <label htmlFor="cadastroDeAcordo">
                    Estou de acordo com os termos
                  </label>
                </div>
                <br />
                <div className="login-phrase">Já possui cadastro?</div>
                <a className="click-here-login" href="login.html">
                  Clique aqui!
                </a>
              </form>
              <br />
              <button
                type="submit"
                className="sign-in-btn"
                disabled={this.state.formCadastro.aceito}
                onClick={this.enviarFormularioCadastro}
              >
                Enviar
              </button>
              <ModalAlert ref={this.modalRef} />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default SignIn;
