import React from "react";

import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import PhoneIcon from "@mui/icons-material/Phone";
// import MailOutlineIcon from "@mui/icons-material/MailOutline";

import {
  Container,
  Wrapper,
  Left,
  Right,
  Center,
  SocialContainer,
  Logo,
  SocialIcon,
  Desc,
  Title,
  List,
  ListItem,
  ContactItem,
  Payment,
} from "./Footer.styles";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Copyright © Gap Co., Ltd. All rights reserved.</Title>
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
};

export default Footer;
