import { Box, styled } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import Securin from "../../assets/securin.jpg";
import Verizon from "../../assets/verizon.jpg";
interface Experience {
  span?: string;
  company?: string;
  location?: string;
  progress?: any;
}
interface Prop {
  experience: Experience;
}

const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: "0 0 20px",
  "& .span": {
    padding: "0 0 6px",
  },
  "& .description": {
    padding: "0 0 6px 12px",
    display: "flex",
    alignItems: "center",
    "& .bullet": {
      height: 10,
      minWidth: 10,
      backgroundColor: "black",
      borderRadius: "50%",
      marginRight: 10,
    },
  },

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
}));
const CompanyWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  "& .logo": {
    marginRight: 10,
    "& img": {
      height: 85,
      width: 85,
    },
  },
  "& .employment-info": {
    width: 250,
    marginRight: 10,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  [theme.breakpoints.down("md")]: {
    "& .employment-info": {
      alignItems: "flex-start",
    },
  },
}));
const DescriptionWrapper = styled(Box)(() => ({
  width: 450,
}));
interface Map {
  [key: string]: string | undefined;
}
const logo: Map = {
  securin: Securin,
  verizon: Verizon,
};

const Experience = ({ experience }: Prop) => {
  const { company = "", span, location, progress = [] } = experience;
  return (
    <Wrapper>
      <CompanyWrapper>
        <div className="logo">
          <img src={logo[company.toLowerCase()]} alt="logo" />
        </div>
        <div className="employment-info">
          <div>{company}</div>
          <div>{location}</div>
          <div>{span}</div>
        </div>
      </CompanyWrapper>
      <DescriptionWrapper>
        {progress.map((prog: any) => {
          return (
            <>
              <div className="role">{prog.role}</div>
              <div className="span">{prog.span}</div>
              <div>
                {prog.descriptions.map((desc: string) => (
                  <div className="description">
                    <div className="bullet" />
                    {desc}
                  </div>
                ))}
              </div>
            </>
          );
        })}
      </DescriptionWrapper>
    </Wrapper>
  );
};
export default Experience;
