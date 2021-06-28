import Link from 'next/link';

import Heading from 'components/Heading';
import Logo from '../Logo';

import * as S from './styles';

const Footer = () => (
  <S.Wrapper>
    <Logo color="black" />
    <S.Content>
      <S.Column>
        <Heading color="black" lineBottom lineColor="secondary" size="small">
          Contact us
        </Heading>

        <a href="mailto:codesystem19@gmail.com">codesystem19@gmail.com</a>
      </S.Column>

      <S.Column>
        <Heading color="black" lineBottom lineColor="secondary" size="small">
          Follow us
        </Heading>

        <nav aria-labelledby="social-media">
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
          <a href="#">Youtube</a>
        </nav>
      </S.Column>

      <S.Column>
        <Heading color="black" lineBottom lineColor="secondary" size="small">
          Links
        </Heading>

        <nav aria-labelledby="social-media">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/games">
            <a>Store</a>
          </Link>
          <Link href="/search">
            <a>Search</a>
          </Link>
        </nav>
      </S.Column>

      <S.Column>
        <Heading color="black" lineBottom lineColor="secondary" size="small">
          Location
        </Heading>

        <span>Lorem Ipsum, 44</span>
        <span>Ipsum dolor</span>
        <span>Lorem, ipsum dolor.</span>
      </S.Column>
    </S.Content>

    <S.Copyright>Won Games 2020 © All rights reserved.</S.Copyright>
  </S.Wrapper>
);

export default Footer;
