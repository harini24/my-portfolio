import { styled, Box } from "@mui/material";
import { StyleConstants } from "../../styles/StyleConstants";

const IntroductionContainer = styled(Box)(() => ({
  height: "100vh",
  width: "100vw",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
}));
const IntroInfoWrapper = styled(Box)(() => ({
  padding: 40,
  fontSize: "3em",
  flexGrow: 1,
  display: "flex",
  alignItems: "center",
}));
const IntroFooterWrapper = styled(Box)(() => ({
  height: "35%",
  background: StyleConstants.APP_INTRO_GROUND,
}));
export const Introduction = () => {
  return (
    <IntroductionContainer>
      <IntroInfoWrapper>
        Hi my name is Harini
        <br />I am an react developer
      </IntroInfoWrapper>
      <IntroFooterWrapper></IntroFooterWrapper>
    </IntroductionContainer>
  );
};
