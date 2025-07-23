import { FaCss3, FaHtml5, FaJs, FaGitAlt } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
import { LuFileJson } from "react-icons/lu";
import { SiSvg } from "react-icons/si";

export const FileIcon = ({ extension }) => {
  const iconStyle = {
    height: "20px",
    width: "20px",
  };

  const IconMapper = {
    svg :  <SiSvg color="yellow" style={iconStyle} />,    
    json: <LuFileJson color="yellow" style={iconStyle} />,
    gitignore: <FaGitAlt color="red" style={iconStyle} />,
    js: <FaJs color="yellow" style={iconStyle} />,
    jsx: <GrReactjs color="#61dbfa" style={iconStyle} />,
    css: <FaCss3 color="#3c99dc" style={iconStyle} />,
    html: <FaHtml5 color="rgba(227, 76, 38, 1)" style={iconStyle} />,
  };

  return <>{IconMapper[extension]}</>;
};
