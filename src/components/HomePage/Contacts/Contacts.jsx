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
  AddressDescription,
  AddressLink,
  MapIcon,
  PhoneIcon,
  InstagramIcon,
  ScheduleTitle,
  ScheduleText,
} from './Contacts.styled';

export const Contacts = () => {
  return (
    <Section id="contacts">
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
                      м.Київ, Фінський провулок, 7
                    </AddressLink>
                  </AddressItem>
                  <AddressItem>
                    <PhoneIcon />
                    <AddressDescription>Записатися:</AddressDescription>
                    <AddressLink href="tel:+380681380707">
                      +380681380707
                    </AddressLink>
                  </AddressItem>
                  <AddressItem>
                    <PhoneIcon />
                    <AddressDescription>Гаряча лінія:</AddressDescription>
                    <AddressLink href="tel:+380668838928">
                      +380668838928
                    </AddressLink>
                  </AddressItem>
                  <AddressItem>
                    <AddressLink
                      href="https://www.instagram.com/avto_studio_0707"
                      target="_blank"
                    >
                      <InstagramIcon />
                      avto_studio_0707
                    </AddressLink>
                  </AddressItem>
                </AddressList>
              </AddressWrapper>

              <ScheduleTitle>Графік роботи:</ScheduleTitle>
              <ScheduleText>ПН-НД: з 09:00 до 21:00</ScheduleText>
            </div>
          </LeftSide>
          <RightSide
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2540.4629347306945!2d30.6338612!3d50.4511036!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c5a4c17b716f%3A0x8d370322e6b061ed!2z0JDQstGC0L7QvNC40LnQutCw!5e0!3m2!1sru!2sua!4v1701874204945!5m2!1sru!2sua"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </ContactsWrapper>
      </MainContainer>
    </Section>
  );
};
