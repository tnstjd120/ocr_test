import { Box, Stack, styled } from "@mui/material";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <StyledLayout>
      <Header />

      <ContentArea>
        <Outlet />
      </ContentArea>

      <Footer />
    </StyledLayout>
  );
};

export default Layout;

const StyledLayout = styled(Stack)(() => ({
  width: "100%",
}));

const ContentArea = styled(Box)(() => ({
  width: "100%",
  height: "calc(100vh - 80px)",
  marginTop: "80px",
  padding: "20px",
  overflowY: "auto",
}));
