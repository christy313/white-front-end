import React from "react";
import {
  Container,
  Title,
  Desc,
  InputContainer,
  Input,
  Button,
} from "./Newsletter.styles";

import SendIcon from "@mui/icons-material/Send";

const Newsletter = () => (
  <Container>
    <Title>Newsletter</Title>
    <Desc>Get news from the lates newsletter!</Desc>
    <InputContainer>
      <Input placeholder="Your email" />
      <Button>
        <SendIcon />
      </Button>
    </InputContainer>
  </Container>
);

export default Newsletter;
