import { useState } from 'react';
import {
  ContactsWrapper,
  Button,
  Icon,
  List,
  Item,
  Text,
  Link,
} from './ContactButton.styled';

export const ContactButton = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <ContactsWrapper>
      <Button type="button" onClick={() => setOpen(!isOpen)}>
        <Icon />
      </Button>

      <List isOpen={isOpen}>
        <Item>
          <Text>Записатися:</Text>
          <Link href="tel:+380681380707">+380681380707</Link>
        </Item>
        <Item>
          <Text>Гаряча лінія:</Text>
          <Link href="tel:+380668838928">+380668838928</Link>
        </Item>
      </List>
    </ContactsWrapper>
  );
};
