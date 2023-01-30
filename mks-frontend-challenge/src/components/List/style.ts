import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1000px;
  justify-content: center;
  max-height: calc(100vh - 101px);
  overflow: auto;
  margin: 0 auto;
  padding-top: 64px;
  padding-bottom: calc(34px + 64px);
  display: flex;
  gap: 22px;
  flex-wrap: wrap;
`;