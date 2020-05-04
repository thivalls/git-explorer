import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import api from '../../services/api';

interface RepositoryParams {
  repository: string;
}

// interface RepositoryInfo { }

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <h1>Repository</h1>
      <p>{params.repository}</p>
    </>
  );
};

export default Repository;
