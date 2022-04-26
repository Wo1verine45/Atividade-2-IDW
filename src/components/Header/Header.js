import { Navigation } from "../Navigation";
import { TitlesSection } from "../TitlesSection";
import "./Header.css";

export function Header({ note, imc, signin, login, home }) {
  return (
    <header className="header">
      <TitlesSection note={note} />
      <Navigation imc={imc} signin={signin} login={login} home={home} />
    </header>
  );
}
