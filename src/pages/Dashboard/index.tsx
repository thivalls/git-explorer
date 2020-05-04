import React, { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Title, Form, Repositories, Error } from './styles';

import api from '../../services/api';

import logo from '../../assets/logo.svg';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [InputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const repositoriesLocalStorage = localStorage.getItem(
      '@GithubExplorer:repositories'
    );

    if (repositoriesLocalStorage) {
      return JSON.parse(repositoriesLocalStorage);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      '@GithubExplorer:repositories',
      JSON.stringify(repositories)
    );
  }, [repositories]);

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();

    if (!newRepo) {
      setInputError('Preencha com algum repositório válido');
      return;
    }

    try {
      const response = await api.get<Repository>(`repos/${newRepo}`);
      const repository = response.data;

      setRepositories([...repositories, repository]);
      setInputError('');
      setNewRepo('');
    } catch (error) {
      setInputError('Este repositório não existe');
    }
  }

  return (
    <>
      <img src={logo} alt="Logo Application Git Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form hasError={!!InputError} onSubmit={handleSubmit}>
        <input
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositório"
        />
        <button>Pesquisar</button>
      </Form>
      {InputError && <Error>{InputError}</Error>}
      <Repositories>
        {repositories.map(repository => (
          <Link
            to={`/repository/${repository.full_name}`}
            key={repository.full_name}
          >
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20} />
          </Link>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
