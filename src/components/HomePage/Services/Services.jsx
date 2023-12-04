import {
  Section,
  SectionTitle,
  MainContainer,
} from 'components/Global/Global.styled';
import {
  ServicesWrapper,
  ContentWrapper,
  ServicesList,
  ServicesItem,
  ServiceName,
} from './Services.styled';

export const Services = () => {
  return (
    <Section id="services">
      <MainContainer>
        <ServicesWrapper>
          <SectionTitle>Послуги</SectionTitle>
          <ContentWrapper>
            <ServicesList>
              <ServicesItem>
                <ServiceName>Детейлінг полірування</ServiceName>
              </ServicesItem>
              <ServicesItem>
                <ServiceName>Детейлінг хімчистка</ServiceName>
              </ServicesItem>
              <ServicesItem>
                <ServiceName>Реставрація шкіри</ServiceName>
              </ServicesItem>
              <ServicesItem>
                <ServiceName>
                  Кварцовий захист (кераміка кузова, кераміка шкіри)
                </ServiceName>
              </ServicesItem>
              <ServicesItem>
                <ServiceName>
                  Мийка "Комплекс" (мийка, продування з витиранням, рідкий віск,
                  пилосос й вологе прибирання багажнику, протирання скла,
                  чорніння)
                </ServiceName>
              </ServicesItem>
              <ServicesItem>
                <ServiceName>Мийка безконтактна + килимки</ServiceName>
              </ServicesItem>
              <ServicesItem>
                <ServiceName>
                  Мийка "Експрес" з піною (без витирання) + килимки
                </ServiceName>
              </ServicesItem>
              <ServicesItem>
                <ServiceName>
                  Збивання бруду, снігу, льоду без мийки
                </ServiceName>
              </ServicesItem>
              <ServicesItem>
                <ServiceName>Рідкий віск</ServiceName>
              </ServicesItem>
              <ServicesItem>
                <ServiceName>
                  Пилосос салону і багажнику / вологе прибиранну салону
                </ServiceName>
              </ServicesItem>
              <ServicesItem>
                <ServiceName>
                  Вологе антибактеріальне прибирання салону (торнадор)
                </ServiceName>
              </ServicesItem>
              <ServicesItem>
                <ServiceName>Натирання плстику полімером</ServiceName>
              </ServicesItem>
              <ServicesItem>
                <ServiceName>Протирання всього скла</ServiceName>
              </ServicesItem>
              <ServicesItem>
                <ServiceName>Натирання гуми (чорніння коліс)</ServiceName>
              </ServicesItem>
              <ServicesItem>
                <ServiceName>Хімічна чистка дисків</ServiceName>
              </ServicesItem>
              <ServicesItem>
                <ServiceName>Твердий віск</ServiceName>
              </ServicesItem>
            </ServicesList>

            <ServicesList>
              <ServicesItem>
                <ServiceName>Полімерний віск</ServiceName>
              </ServicesItem>
              <ServicesItem>
                <ServiceName>Мийка двигуна</ServiceName>
              </ServicesItem>
              <ServicesItem>
                <ServiceName>Зняття комах</ServiceName>
              </ServicesItem>
              <ServicesItem>
                <ServiceName>Мийка гумових килимків</ServiceName>
              </ServicesItem>
              <ServicesItem>
                <ServiceName>Хімчистка тканинних килимків</ServiceName>
              </ServicesItem>
              <ServicesItem>
                <ServiceName>Обробка шкіри (кондиціонер шкіри)</ServiceName>
              </ServicesItem>
              <ServicesItem>
                <ServiceName>Антидощ</ServiceName>
              </ServicesItem>
              <ServicesItem>
                <ServiceName>Зняття бітуму, смоли</ServiceName>
              </ServicesItem>
              <ServicesItem>
                <ServiceName>Хімчистка салону</ServiceName>
              </ServicesItem>
              <ServicesItem>
                <ServiceName>Хімчистка підлоги</ServiceName>
              </ServicesItem>
              <ServicesItem>
                <ServiceName>Хімчистка карт дверей</ServiceName>
              </ServicesItem>
              <ServicesItem>
                <ServiceName>Хімчистка сидінь</ServiceName>
              </ServicesItem>
              <ServicesItem>
                <ServiceName>Хімчистка стелі</ServiceName>
              </ServicesItem>
              <ServicesItem>
                <ServiceName>Хімчистка багажнику</ServiceName>
              </ServicesItem>
              <ServicesItem>
                <ServiceName>
                  3-х фазна мийка кузова: попереднє миття шампунем без фосфатів,
                  ручна мийка шампунем, консервація кузова ідеальний блиск і
                  гідрофобність, турбо сушка + мікрофібра (в подарунок
                  консерваця шин)
                </ServiceName>
              </ServicesItem>
              <ServicesItem>
                <ServiceName>
                  3-х фазник комплекс доповнює мийку послугами: вологе
                  прибирання салону, пилосос, килимки, пластик, скло,багажник
                </ServiceName>
              </ServicesItem>
            </ServicesList>
          </ContentWrapper>
        </ServicesWrapper>
      </MainContainer>
    </Section>
  );
};
