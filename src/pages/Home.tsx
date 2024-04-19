import { Box, Stack, Typography, styled } from "@mui/material";

const Home = () => {
  return (
    <StyledHome>
      <Box mb={5}>
        <Typography variant="h4" fontWeight="bold">
          정보 자산화 서비스 <br />
        </Typography>

        <Typography variant="h6" color="textSecondary" mb={3}>
          Quantum Intelligence Information Processing
        </Typography>

        <Typography variant="body1">
          문서와 음성에서 인식된 텍스트 또는 웹상에서 발생하는 텍스트 데이터를
          정보화합니다. <br />
          단순 위치나 패턴 기반 정보화가 아닌, AI 학습 기반 자연어 모델을
          활용하여 문서와 음성 내 다른 텍스트와의 관계를 파악하여 정보를
          추출합니다. <br />
          또한 오토라벨링과 어노테이션 자동화를 통해 후속 업무 연계 자동화, 학습
          고도화 도구를 제공합니다.
        </Typography>
      </Box>

      <Stack flexDirection="row" alignItems="center" gap="20px" p={2}>
        <img src="/images/home/tech.doc_sort.01.svg" alt="ocr step1" />

        <span className="arrow-right">→</span>

        <img src="/images/home/tech.doc_sort.02.svg" alt="ocr step2" />

        <span className="arrow-right">→</span>

        <img src="/images/home/tech.doc_sort.03.svg" alt="ocr step3" />

        <span className="plus">→</span>

        <img src="/images/home/tech.doc_sort.04.svg" alt="ocr step4" />
      </Stack>
    </StyledHome>
  );
};

export default Home;

const StyledHome = styled(Box)(() => ({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  ".arrow-right": {
    display: "block",
    width: "24px",
    height: "24px",
    border: "1px solid #616161",
    borderRadius: "100%",
    background: "#FFF",
    overflow: "hidden",
    textIndent: "-1000em",
    position: "relative",

    "&::before": {
      content: "''",
      display: "block",
      position: "absolute",
      width: "14px",
      height: "0",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      borderTop: "1px solid #616161",
    },

    "&::after": {
      content: "''",
      display: "block",
      position: "absolute",
      width: "6px",
      height: "6px",
      top: "50%",
      left: "50%",
      transform: "translate(-30%, -50%) rotate(-55deg) skewY(20deg)",
      border: "1px solid #616161",
      borderLeft: 0,
      borderTop: 0,
    },
  },

  ".plus": {
    display: "block",
    width: "24px",
    height: "24px",
    border: "1px solid #616161",
    borderRadius: "100%",
    background: "#FFF",
    overflow: "hidden",
    textIndent: "-1000em",
    position: "relative",

    "&::before": {
      content: "''",
      display: "block",
      position: "absolute",
      width: "14px",
      height: "0",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      borderTop: "1px solid #616161",
    },

    "&::after": {
      content: "''",
      display: "block",
      position: "absolute",
      height: "14px",
      width: "0",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      borderTop: "1px solid #616161",
    },
  },
}));
