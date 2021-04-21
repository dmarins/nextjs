import * as S from "./styles";

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="imagem de um átomo e React Avançado escrito ao lado."
    />
    <S.Title>React Avançado</S.Title>
    <S.Description>
      TypeScript, ReactJS, NextJS e Styled Components
    </S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="ilustração de um programador sentado de frente para uma tela com códigos."
    />
  </S.Wrapper>
);

export default Main;
