import { styled, Box } from "@mui/material";
import { StyleConstants } from "../../styles/StyleConstants";

const IntroductionContainer = styled(Box)(() => ({
  height: "100vh",
  width: "100vw",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
}));
const IntroInfoWrapper = styled(Box)(({ theme }) => ({
  padding: 80,
  fontSize: "2.5em",
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "60%",
  [theme.breakpoints.down("sm")]: {
    fontSize: "2em",
    padding: 20,
  },
}));
const ReadMoreWrapper = styled(Box)(({ theme }) => ({
  "& button": {
    border: "none",
    background: StyleConstants.APP_INTRO_GROUND,
    color: StyleConstants.WHITE_COLOR,
    padding: 10,
    borderRadius: 4,
  },
}));
const Info = styled(Box)(() => ({}));
const IntroFooterWrapper = styled(Box)(() => ({
  height: "35%",
  background: StyleConstants.APP_INTRO_GROUND,
  borderTopLeftRadius: "95% 75%",
}));
export const Introduction = () => {
  return (
    <IntroductionContainer>
      <IntroInfoWrapper>
        <Info>
          Hi my name is Harini
          <br />I am an react developer
        </Info>
        <ReadMoreWrapper>
          <button>Read More</button>
        </ReadMoreWrapper>
      </IntroInfoWrapper>
      {/* <IntroFooterWrapper></IntroFooterWrapper> */}
    </IntroductionContainer>
  );
};
