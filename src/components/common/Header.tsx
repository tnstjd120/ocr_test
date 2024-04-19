import { Box, List, ListItem, styled } from "@mui/material";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <StyledHeader>
      <div className="image-wrapper">
        <Link to="/kb_ocr">
          <img src="/logo.svg" alt="퀀텀에이아이 로고" />
        </Link>
      </div>

      <StyledList>
        <ListItem>
          <NavLink to="/kb_ocr">Home</NavLink>
        </ListItem>

        <ListItem>
          <NavLink to="/kb_ocr/ocr">OCR</NavLink>
        </ListItem>
      </StyledList>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled(Box)(() => ({
  position: "fixed",
  left: 0,
  top: 0,
  width: "100%",
  height: "80px",
  padding: "20px",
  backgroundColor: "#fff",
  boxShadow: "0 3px 12px 0 rgba(0,0,0,0.1)",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  zIndex: 3,

  ".image-wrapper": {
    width: "130px",
    height: "34px",

    img: {
      width: "100%",
      height: "100%",
      objectFit: "contain",
    },
  },
}));

const StyledList = styled(List)(({ theme }) => ({
  display: "flex",

  a: {
    color: "#333",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: 700,
    padding: "10px",
    borderRadius: "5px",

    "&:hover": {
      backgroundColor: "#f5f5f5",
    },

    "&.active": {
      color: "#fff",
      backgroundColor: theme.palette.primary.light,
    },
  },
}));
