import {
  MainContainer,
  Section,
  SectionTitle,
} from 'components/Global/Global.styled';
import { Text, FeaturesTitle, FeaturesList, StrongText } from './About.styled';

export const About = () => {
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
              <StrongText>Досвід та професіоналізм.</StrongText>
              Наша команда складається з висококваліфікованих фахівців, які
              знають, як зробити ваш автомобіль сяючим і чистим.
            </Text>
          </li>
          <li>
            <Text>
              <StrongText>Сучасне обладнання.</StrongText>
              Ми використовуємо найновішу технологію та обладнання, щоб
              забезпечити вам найкращий результат.
            </Text>
          </li>
          <li>
            <Text>
              <StrongText>Екологічність.</StrongText>
              Ми пильно стежимо за екологічністю наших послуг та використовуємо
              екологічно чисті засоби для догляду за автомобілем.
            </Text>
          </li>
          <li>
            <Text>
              <StrongText>Зручний сервіс.</StrongText>
              Ми розуміємо, що ваш час дорогоцінний, тому ми пропонуємо швидке
              та зручне обслуговування без зайвої затримки.
            </Text>
          </li>
        </FeaturesList>
      </MainContainer>
    </Section>
  );
};
