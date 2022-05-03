import { Navigation } from "../Navigation";
import { TitlesSection } from "../TitlesSection";
import "./Header.css";

export function Header({ note, imc, signin, login, home }) {
  /* Os parâmetros recebem só true ou false e são para verificar se o componente TitlesSection(seção de títulos) vai ou não ter uma nota(note) 
  embaixo dos títulos e para qual página(pages) o componente Navigation(navegação) vai ser usado*/
  return (
    <header className="header">
      <TitlesSection note={note} />
      <Navigation imc={imc} signin={signin} login={login} home={home} />
    </header>
  );
}
