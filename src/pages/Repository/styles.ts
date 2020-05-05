import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(-10px);
      color: #666;
    }

    svg {
      margin-right: 5px;
    }
  }
`;

export const RepoInfo = styled.section`
  max-width: 700px;
  padding: 10px 0;
  margin-top: 60px;
  display: flex;
  align-items: center;

  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }

  div {
    margin: 0 16px;
    margin-left: 24px;
    flex: 1;

    strong {
      font-size: 36px;
      color: #3d3d4d;
    }

    p {
      font-size: 18px;
      margin-top: 4px;
      color: #737380;
    }
  }

  @media screen and (max-width: 502px) {
    flex-direction: column;
    flex: 1;

    img {
      margin-bottom: 20px;
      align-self: flex-start;
    }

    div {
      margin-left: 0px;
    }
  }
`;

export const DataInfo = styled.div`
  margin-top: 30px;
  display: flex;

  ul {
    display: flex;
    list-style: none;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        font-weight: bold;
        font-size: 36px;
        color: #3d3d4d;
      }

      p {
        display: block;
        color: #6c6c80;
        margin-left: 2px;
      }
    }
  }

  @media screen and (max-width: 502px) {
    ul {
      li {
        & + li {
          margin-left: 30px;
        }
      }
    }
  }
`;

export const IssuesList = styled.div`
  margin-top: 40px;
  max-width: 700px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.2s;

    & + a {
      margin-top: 10px;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        margin-top: 4px;
        color: #a8a8b3;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }

    &:hover {
      transform: translateX(10px);
    }
  }
`;
