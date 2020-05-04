import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Title, Form, Repositories } from './styles';

import logo from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="Logo Application Git Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button>Pesquisar</button>
      </Form>
      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/7988125?s=460&v=4"
            alt="Logo Author"
          />
          <div>
            <strong>Teste</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms! </p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/7988125?s=460&v=4"
            alt="Logo Author"
          />
          <div>
            <strong>Teste</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms! </p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/7988125?s=460&v=4"
            alt="Logo Author"
          />
          <div>
            <strong>Teste</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms! </p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
