import axios from "axios";

const CadastroApi = {
  cadastrar: (data) => {
    return axios.post(
      `https://app.professordaniloalves.com.br/api/v1/cadastro`,
      data
    );
  },
  consultar: (cpf) => {
    return axios.get(
      `https://app.professordaniloalves.com.br/api/v1/cadastro/${cpf}`
    );
  },
  deletar: (cpf) => {
    return axios.delete(
      `https://app.professordaniloalves.com.br/api/v1/cadastro/${cpf}`
    );
  },
  atualizar: (data) => {
    return axios.put(
      `https://app.professordaniloalves.com.br/api/v1/cadastro`,
      data
    );
  },
};

export default CadastroApi;
