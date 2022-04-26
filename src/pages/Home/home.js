import { Footer } from "../../components/Footer";
import "./home.css";

function Home() {
  return (
    <div>
      <div className="main-body">
        <div className="vision-div">
          <h2 className="vision-title" id="vision">
            Visão da Empresa
          </h2>
          <p>
            A nossa empresa, Serviços de Atendimento Determinado! (SAD), quer se
            tornar referência na disponibilização de sites úteis, de saúde, como
            esse que você está acessando agora, notícias etc. Para toda a
            população embuense de forma gratuita, utilizando um dos nossos
            serviços, Serviço de Medição de IMC para Logradouros em Embu
            (SMILE).
          </p>
        </div>
        <div className="mission-div">
          <h2 className="mission-title" id="mission">
            Missão da Empresa
          </h2>
          <p>
            A missão da empresa é proporcionar para toda a população embuense
            sites funcionais, informativos, acessíveis e úteis, de forma
            gratuita.
          </p>
        </div>
        <div className="values-div">
          <h2 className="values-title" id="values">
            Valores da Empresa
          </h2>
          <ul className="values-list">
            <li>Compromisso</li>
            <li>Qualidade</li>
            <li>Velocidade</li>
            <li>Verdade</li>
            <li>Precisão</li>
          </ul>
        </div>
        <div className="adress-div">
          <h2 className="adress-title" id="adress">
            Endereço
          </h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14618.92067558655!2d-46.8614242302246!3d-23.64983249999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cfab6fb2e0d02b%3A0x4fdb019ef1ecc78f!2sPra%C3%A7a%20das%20Artes%20-%20Embu%20das%20Artes!5e0!3m2!1spt-BR!2sbr!4v1647390591449!5m2!1spt-BR!2sbr"
            allowfullscreen=""
            loading="lazy"
            title="Endereço dos computadores dos SMILES"
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
