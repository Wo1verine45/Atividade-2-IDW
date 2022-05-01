import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import "./signin.css";

function SignIn() {
  return (
    <div>
      <Header note={false} signin={true} />
      <div className="sign-in-body">
        <div className="main-container">
          <div className="sign-in-container">
            <h2 className="sign-in-title">Cadastro</h2>
            <form className="sign-in-form">
              <label for="full-name">Nome Completo:</label>
              <input type="text" name="full-name" />
              <br />
              <label for="birthday">Data de Nascimento: </label>
              <input type="date" name="birthday" />
              <br />
              <label for="gender">Sexo:</label>
              <select name="gender-dropdown">
                <option>Escolha um sexo...</option>
                <option value="male">Masculino</option>
                <option value="female">Feminino</option>
              </select>
              <br />
              <label for="CPF">CPF:</label>
              <input type="number" name="CPF" />
              <br />
              <label for="logradouro">Logradouro: </label>
              <input type="text" name="logradouro" />
              <br />
              <label for="logradouro-number">Número do logradouro: </label>
              <input type="number" name="logradouro-number" />
              <br />
              <label for="bairro">Bairro: </label>
              <select name="bairro-dropdown">
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
              <label for="CEP">CEP: </label>
              <input type="number" name="CEP" />
              <br />
              <label for="city">Cidade: </label>
              <input type="text" name="city" />
              <br />
              <label for="UF">UF: </label>
              <select name="UF">
                <option>Escolha um estado...</option>
                <option>AC</option>
                <option>AL</option>
                <option>AP</option>
                <option>AM</option>
                <option>BA</option>
                <option>CE</option>
                <option>DF</option>
                <option>ES</option>
                <option>GO</option>
                <option>MA</option>
                <option>MT</option>
                <option>MS</option>
                <option>MG</option>
                <option>PA</option>
                <option>PB</option>
                <option>PR</option>
                <option>PE</option>
                <option>PI</option>
                <option>RJ</option>
                <option>RN</option>
                <option>RS</option>
                <option>RO</option>
                <option>RR</option>
                <option>SC</option>
                <option>SP</option>
                <option>SE</option>
                <option>TO</option>
              </select>
              <br />
              <label for="password">Senha: </label>
              <input type="password" name="password" />
              <br />
              <a class="sign-in-btn" href="login.html">
                Enviar
              </a>
              <br />
              <div className="login-phrase">Já possui cadastro?</div>
              <a className="click-here-login" href="login.html">
                Clique aqui!
              </a>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default SignIn;
