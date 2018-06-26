import styled from 'styled-components';

const IntroWrapper = styled.div`
  width: 95%;
  max-width: 1200px;
  text-align: center;
  font-size: calc(5px + 0.2vw);
  margin: 0 auto;
  padding: 25px;
  .feed {
    display: grid;
    justify-content: end;
    grid-template-columns: 200px 200px;
    grid-template-rows: auto auto;
  }
  .story {
    margin: 0 auto;
    border: 1px solid #222;

    h1,
    p {
      width: 100%;
    }
    img {
      display: block;
      width: 100%;
    }
  }
`;

export default IntroWrapper;
