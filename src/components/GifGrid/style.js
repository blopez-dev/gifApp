import styled from 'styled-components';

export const Searcher = styled.div`
  font-family: 'Open Sans', sans-serif;
    input{
      font-size: 1rem;
      color:grey;
      max-width:100%;
      width: 80%;
      border-radius: 1rem;
      background:rgba(230,236,240,0.48);
      padding: 5px 10px;
      border-color:transparent;
      box-shadow: inset 4px 4px 15px #ededed;
    }
`;

export const GridResults = styled.div`
  display:flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: flex-start;

`;
