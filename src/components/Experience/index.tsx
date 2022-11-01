import { Box, styled } from "@mui/material";
import Experience from "./Experience";
import ExperienceList from "./Experience.json";
const TitleWrapper = styled(Box)(() => ({
  fontSize: "2em",
  padding: 20,
}));
const ExperienceWrapper = styled(Box)(() => ({}));
const ExperienceContainer = () => {
  return (
    <Box>
      <TitleWrapper>Experience</TitleWrapper>
      <ExperienceWrapper>
        {ExperienceList.map((experince,ind) => (
          <Experience experience={experince} key={ind}/>
        ))}
      </ExperienceWrapper>
    </Box>
  );
};
export default ExperienceContainer;
