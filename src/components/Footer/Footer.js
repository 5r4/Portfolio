import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>whatsapp</LinkTitle>
          <LinkItem href="https://api.whatsapp.com/send?phone=966572297915&text=I%20want%20to%20find%20out%20about%20your%20products">
            +966 57 229 7915
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:discord.trix@gmail.com">
            discord.trix@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Terrors of sorrow from the raven ungainly.</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com">
            <AiFillGithub size="3rem"></AiFillGithub>
          </SocialIcons>
          <SocialIcons href="https://github.com">
            <AiFillInstagram size="3rem"></AiFillInstagram>
          </SocialIcons>
          <SocialIcons href="https://github.com">
            <AiFillLinkedin size="3rem"></AiFillLinkedin>
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
