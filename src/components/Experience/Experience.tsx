import { Box, styled } from "@mui/material";
import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";
import Securin from "../../assets/securin.jpg";
import Verizon from "../../assets/verizon.jpg";
interface Experience {
  span?: string;
  company?: string;
  progress?: any;
}
interface Prop {
  experience: Experience;
}

const Wrapper = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  padding: "0 0 20px",
}));
const CompanyWrapper = styled(Box)(() => ({
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
  const { company = "", span, progress = [] } = experience;
  return (
    <Wrapper>
      <CompanyWrapper>
        <div className="logo">
          <img src={logo[company.toLowerCase()]} alt="logo" />
        </div>
        <div className="employment-info">
          {progress?.length === 1 && <div>{progress[0].role}</div>}
          <div>{company}</div>
          <div>{span}</div>
        </div>
      </CompanyWrapper>
      <DescriptionWrapper>
        {progress.length === 1 &&
          progress[0].descriptions.map((desc: string) => <div>{desc}</div>)}
        {progress.length > 1 &&
          progress.map((prog: any) => {
            return (
              <>
                <div>{prog.role}</div>
                <div>
                  {prog.descriptions.map((desc: string) => (
                    <div>{desc}</div>
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
