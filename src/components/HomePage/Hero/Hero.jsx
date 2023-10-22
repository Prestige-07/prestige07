import { MainLinkButton } from 'components/Global/Global.styled';
import { HeroSection, Container, Title } from './Hero.styled';

export const Hero = () => {
  return (
    <HeroSection className="hero__bg-image" id="home">
      <Container>
        <Title>Отримайте безкоштовну консультацію від наших експертів.</Title>
        <MainLinkButton href="#reserve">Замовити дзвінок</MainLinkButton>
      </Container>
    </HeroSection>
  );
};
