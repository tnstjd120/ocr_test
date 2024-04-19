import { Box, Stack, styled } from "@mui/material";

const Footer = () => {
  return (
    <StyledFooter>
      <Stack>
        <div className="image-wrapper">
          <img src="/logo-w.svg" alt="퀀텀에이아이 로고" />
        </div>
      </Stack>

      <Stack alignItems="flex-end">
        <p>
          <span>
            <strong>사업자등록번호</strong> 760-87-02192
          </span>
          <span>
            <strong>대표</strong> 최성집
          </span>
        </p>

        <p>
          <span>
            <strong>전화번호</strong> 02-6408-0915
          </span>
          <span>
            <strong>이메일</strong> quantumai@quantum-ai.ai
          </span>
        </p>
        <p>ⓒ 2024 Quantum AI Corp. All rights reserved.</p>
      </Stack>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled(Box)(() => ({
  backgroundColor: "#bdbdbd",
  color: "#fff",
  height: "90px",
  padding: "20px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  ".image-wrapper": {
    width: "130px",
    height: "34px",

    img: {
      width: "100%",
      height: "100%",
      objectFit: "contain",
    },
  },

  p: {
    margin: 0,
    fontSize: "12px",

    span: {
      "&:not(:last-of-type)": {
        "&::after": {
          content: "'|'",
          padding: "0 5px",
          color: "#ddd",
        },
      },

      // "&:not(:last-child)": {
      //   paddingRight: "10px",

      // },

      // "&:not(:first-child)": {
      //   paddingLeft: "10px",
      // },
    },
  },
}));
