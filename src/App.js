import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Rotas from "./routes/routes";

function App() {
  return (
    <div className="App">
      <Router>
        <Rotas />
      </Router>
    </div>
  );
}

export default App;

//TODO: arrumar o CSS do modal

/* transformar em componentes: 
  - forms (com a opção de escolher quais campos vão ter)
  - coloquei o nav mas n do jeito que eu queria (com 
    a opção de escolher qual botão eu quero, eu só fiz
    4 modelos pra usar nas 4 páginas que vão ter)
  - ver a questão da navegação através do dropdown menu parar de funcionar em react
  - talvez refazer os botões da navegação pq os estilos ficaram zoados com a adição do Link
  - tentar arrumar o CSS do checkbox
*/
