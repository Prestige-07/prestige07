import styled from '@emotion/styled';
import { FiMapPin, FiPhone, FiInstagram } from 'react-icons/fi';

export const ContactsWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }

  background-color: var(--secondary-bg-color);

  border-radius: 12px;
  overflow: hidden;
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;

  @media screen and (min-width: 768px) {
    flex-basis: calc(100% / 2);
  }
`;

export const RightSide = styled.iframe`
  min-height: 450px;

  @media screen and (min-width: 768px) {
    flex-basis: calc(100% / 2);
  }
`;

export const AddressWrapper = styled.address`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const AddressList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  list-style: none;
`;

export const AddressItem = styled.li`
  display: flex;
  &:nth-of-type(2) > a,
  &:nth-of-type(3) > a {
    margin-left: 8px;
  }
`;

export const AddressDescription = styled.p`
  font-style: normal;
`;

export const AddressLink = styled.a`
  transition: color var(--transition);
  color: inherit;
  &:hover,
  &:hover > svg {
    color: var(--accent-color);
  }
`;

export const MapIcon = styled(FiMapPin)`
  margin-right: 8px;
`;

export const PhoneIcon = styled(FiPhone)`
  margin-right: 8px;
`;

export const InstagramIcon = styled(FiInstagram)`
  margin-right: 8px;
`;

export const ScheduleTitle = styled.h3`
  margin-top: 50px;
  margin-bottom: 16px;
  font-size: 20px;
`;

export const ScheduleText = styled.p`
  font-size: 16px;
  color: inherit;
`;
