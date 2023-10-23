import {
  Section,
  SectionTitle,
  MainContainer,
} from 'components/Global/Global.styled';
import {
  ContactsWrapper,
  LeftSide,
  RightSide,
  AddressWrapper,
  AddressList,
  AddressItem,
  AddressLink,
  MapIcon,
  PhoneIcon,
  ScheduleTitle,
  ScheduleText,
} from './Contacts.styled';

export const Contacts = () => {
  return (
    <Section id="contacts" paddingBottom={true}>
      <MainContainer>
        <ContactsWrapper>
          <LeftSide>
            <div>
              <SectionTitle>Контакти</SectionTitle>
              <AddressWrapper>
                <AddressList>
                  <AddressItem>
                    <AddressLink
                      href="https://goo.gl/maps/EBPHhEcK4U8pQuqV9"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <MapIcon />
                      м.Київ, Карельський провулок, 7
                    </AddressLink>
                  </AddressItem>
                  <AddressItem>
                    <AddressLink href="tel:+380961111111">
                      <PhoneIcon />
                      +38 096 111 11 11
                    </AddressLink>
                  </AddressItem>
                </AddressList>
              </AddressWrapper>

              <ScheduleTitle>Графік роботи:</ScheduleTitle>
              <ScheduleText>ПН-НД: з 09:00 до 21:00</ScheduleText>
            </div>
          </LeftSide>
          <RightSide
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1234.0810901572277!2d30.633539638669877!3d50.45069572975404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c5a4c17b716f%3A0x8d370322e6b061ed!2z0JDQstGC0L7QvNC40LnQutCw!5e0!3m2!1sru!2sua!4v1690836835781!5m2!1sru!2sua"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </ContactsWrapper>
      </MainContainer>
    </Section>
  );
};
