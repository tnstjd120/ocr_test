import { Box, styled } from "@mui/material";
import ImageUpload from "../components/ocr/ImageUpload";
import OcrResult from "../components/ocr/OcrResult";

const OcrPage = () => {
  return (
    <StyledOcrPage>
      <LeftArea>
        <ImageUpload />
      </LeftArea>

      <RightArea>
        <OcrResult />
      </RightArea>
    </StyledOcrPage>
  );
};

export default OcrPage;

const StyledOcrPage = styled(Box)(() => ({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "20px",

  "@media (max-width: 1024px)": {
    flexDirection: "column",
  },
}));

const LeftArea = styled(Box)(() => ({
  width: "50%",
  height: "100%",

  "@media (max-width: 1024px)": {
    width: "100%",
  },
}));

const RightArea = styled(Box)(() => ({
  width: "50%",
  height: "100%",

  "@media (max-width: 1024px)": {
    width: "100%",
  },
}));
