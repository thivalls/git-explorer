import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Link, useRouteMatch } from 'react-router-dom';

import api from '../../services/api';

import { Container, Header, RepoInfo, DataInfo, IssuesList } from './styles';

import logo from '../../assets/logo.svg';

interface RepositoryParams {
  repository: string;
}

interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    async function loadData(): Promise<void> {
      api.get(`/repos/${params.repository}`).then(response => {
        setRepository(response.data);
      });

      api.get(`/repos/${params.repository}/issues`).then(response => {
        setIssues(response.data);
      });
    }

    loadData();
  }, [params.repository]);

  return (
    <>
      <Container>
        <Header>
          <img src={logo} alt="Logo Github Explorer" />
          <Link to="/">
            <FiChevronLeft size={16} /> Voltar
          </Link>
        </Header>

        {repository && (
          <>
            <RepoInfo>
              <img
                src={repository.owner.avatar_url}
                alt={repository.owner.login}
              />
              <div>
                <strong>{repository.full_name}</strong>
                <p>{repository.description}</p>
              </div>
            </RepoInfo>
            <DataInfo>
              <ul>
                <li>
                  <strong>{repository.stargazers_count}</strong>
                  <p>Stars</p>
                </li>
                <li>
                  <strong>{repository.forks_count}</strong>
                  <p>Forks</p>
                </li>
                <li>
                  <strong>{repository.open_issues_count}</strong>
                  <p>Issues Abertas</p>
                </li>
              </ul>
            </DataInfo>
            <IssuesList>
              {issues.map(issue => (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  key={issue.id}
                  href={`${issue.html_url}`}
                >
                  <div>
                    <strong>{issue.title}</strong>
                    <p>{issue.user.login}</p>
                  </div>
                  <FiChevronRight size={20} />
                </a>
              ))}
            </IssuesList>
          </>
        )}
      </Container>
    </>
  );
};

export default Repository;
