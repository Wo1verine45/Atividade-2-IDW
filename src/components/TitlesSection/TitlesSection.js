import "./TitlesSection.css";

export function TitlesSection({ note }) {
  /* Parâmetro explicado no componente Header */
  if (note === true) {
    return (
      <div className="titles">
        <div className="title-container">
          <h1 className="title">SMILE :&#41;</h1>
          <h2 className="subtitle">
            Serviço de Medição de IMC para Logradouros em Embu
          </h2>
          <h3 className="note">
            Oferecido pelo SAD, Serviços de Atendimento Determinado!
          </h3>
        </div>
      </div>
    );
  } else if (note === false) {
    return (
      <div className="titles">
        <div className="title-container">
          <h1 className="title">SMILE :&#41;</h1>
          <h2 className="subtitle">
            Serviço de Medição de IMC para Logradouros em Embu
          </h2>
        </div>
      </div>
    );
  }
}
