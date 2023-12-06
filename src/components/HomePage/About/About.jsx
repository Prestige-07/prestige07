import { useInView } from 'react-intersection-observer';

import {
  MainContainer,
  Section,
  SectionTitle,
} from 'components/Global/Global.styled';
import {
  Text,
  FeaturesTitle,
  FeaturesList,
  StrongText,
  ImagesList,
  ImagesItem,
} from './About.styled';

export const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  return (
    <Section id="about">
      <MainContainer>
        <SectionTitle>Про нас</SectionTitle>
        <Text>
          Ми - команда професіоналів, які присвятили себе догляду за вашими
          автомобілями. Наша мета - зробити ваш транспортний засіб як новий і
          забезпечити вам найкращий досвід обслуговування.
        </Text>

        <FeaturesTitle>Чому саме ми?</FeaturesTitle>
        <FeaturesList>
          <li>
            <Text>
              <StrongText>Досвід та професіоналізм.</StrongText> Наша команда
              складається з висококваліфікованих фахівців, які знають, як
              зробити ваш автомобіль сяючим і чистим.
            </Text>
          </li>
          <li>
            <Text>
              <StrongText>Сучасне обладнання.</StrongText> Ми використовуємо
              найновішу технологію та обладнання, щоб забезпечити вам найкращий
              результат.
            </Text>
          </li>
          <li>
            <Text>
              <StrongText>Екологічність.</StrongText> Ми пильно стежимо за
              екологічністю наших послуг та використовуємо екологічно чисті
              засоби для догляду за автомобілем.
            </Text>
          </li>
          <li>
            <Text>
              <StrongText>Зручний сервіс.</StrongText> Ми розуміємо, що ваш час
              дорогоцінний, тому ми пропонуємо швидке та зручне обслуговування
              без зайвої затримки.
            </Text>
          </li>
          <li>
            <Text>
              <StrongText>Зона очікування.</StrongText> Наша автомийка також
              пропонує затишну зону очікування, де ви можете розслабитися та
              насолодитися смачними напоями та закусками під час того, як ми
              дбаємо про ваш автомобіль.
            </Text>
          </li>
        </FeaturesList>
        <ImagesList ref={ref}>
          <ImagesItem isVisible={inView}>
            <img
              src="https://res.cloudinary.com/ddnujny0z/image/upload/v1699294572/prestige-gallery/jvhrtedjfwigci9nuxzi"
              alt="Літня тераса кафе"
              loading="lazy"
            />
          </ImagesItem>
          <ImagesItem isVisible={inView}>
            <img
              src="https://res.cloudinary.com/ddnujny0z/image/upload/v1699294572/prestige-gallery/rg4qebcpi4qnu9iyaneo"
              alt="Зона для замовлення"
              loading="lazy"
            />
          </ImagesItem>
          <ImagesItem isVisible={inView}>
            <img
              src="https://res.cloudinary.com/ddnujny0z/image/upload/v1699294572/prestige-gallery/p8fmyz7tpdylbnkiepan"
              alt="Зона відпочинку"
              loading="lazy"
            />
          </ImagesItem>
        </ImagesList>
      </MainContainer>
    </Section>
  );
};
