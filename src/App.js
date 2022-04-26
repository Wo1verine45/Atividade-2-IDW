import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Rotas from './routes/routes';

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

/* transformar em componentes: 
  - header (com a opção de ter ou n a nota do título)
  - nav (com a opção de tirar alguns botões)
  - forms (com a opção de escolher quais campos vão ter)
*/
