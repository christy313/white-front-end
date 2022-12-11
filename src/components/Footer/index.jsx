import React from "react";

import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

import {
  Container,
  Wrapper,
  SocialContainer,
  SocialIcon,
  Title,
} from "./Footer.styles";

const Footer = () => (
  <Container>
    <Wrapper>
      <Title>Copyright © White Co., Ltd. All rights reserved.</Title>
      <SocialContainer>
        <SocialIcon>
          <FacebookOutlinedIcon fontSize="large" />
        </SocialIcon>
        <SocialIcon>
          <InstagramIcon fontSize="large" />
        </SocialIcon>
        <SocialIcon>
          <TwitterIcon fontSize="large" />
        </SocialIcon>
      </SocialContainer>
    </Wrapper>
  </Container>
);

export default Footer;
