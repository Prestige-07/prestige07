import { handleSmoothScroll } from 'utils/handleSmoothScroll';
import { MainLinkButton } from 'components/Global/Global.styled';
import { HeroSection, Container, Title } from './Hero.styled';

export const Hero = () => {
  return (
    <HeroSection className="hero__bg-image" id="home">
      <Container>
        <Title>Отримайте безкоштовну консультацію від наших експертів.</Title>
        <MainLinkButton
          href="#reserve"
          onClick={e => {
            e.preventDefault();
            handleSmoothScroll('reserve');
          }}
        >
          Замовити дзвінок
        </MainLinkButton>
      </Container>
    </HeroSection>
  );
};
