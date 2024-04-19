import {
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  styled,
} from "@mui/material";
import useOcrStore from "../../store/useOcrStore";
import Loading from "../common/Loading";

const OcrResult = () => {
  const isLoading = useOcrStore((state) => state.isLoading);

  const DOC_ID = useOcrStore((state) => state.DOC_ID);
  const NLP_DOC_ID = useOcrStore((state) => state.NLP_DOC_ID);
  const NLP_RESULT = useOcrStore((state) => state.NLP_RESULT);

  return (
    <StyledOcrResult>
      {NLP_RESULT.length === 0 && isLoading ? (
        <Loading />
      ) : NLP_RESULT.length === 0 ? (
        <Typography variant="body1" color="textSecondary" display="flex">
          이미지
          <Typography color="primary" fontWeight="bold" pl="4px">
            결과
          </Typography>
          가 표시됩니다.
        </Typography>
      ) : (
        <>
          <StyledOcrTitle variant="h5">
            <Typography fontWeight="bold">{NLP_DOC_ID}</Typography>(
            <Typography>{DOC_ID}</Typography>)
          </StyledOcrTitle>

          <StyledOcrTableContainer>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ textAlign: "center" }}>blockIndex</TableCell>
                  <TableCell sx={{ minWidth: "150px" }}>displayName</TableCell>
                  <TableCell>key</TableCell>
                  <TableCell>pageId</TableCell>
                  <TableCell sx={{ minWidth: "300px" }}>value</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {NLP_RESULT.map((row, i) => (
                  <TableRow key={i}>
                    <TableCell sx={{ textAlign: "center" }}>
                      {row.blockIndex}
                    </TableCell>
                    <TableCell>{row.displayName}</TableCell>
                    <TableCell>{row.key}</TableCell>

                    <TableCell sx={{ textAlign: "center" }}>
                      {row.pageId}
                    </TableCell>

                    <TableCell>{row.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </StyledOcrTableContainer>
        </>
      )}
    </StyledOcrResult>
  );
};

export default OcrResult;

const StyledOcrResult = styled(Stack)(() => ({
  width: "100%",
  height: "100%",
  border: "1px solid #ddd",
  padding: "10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const StyledOcrTitle = styled(Typography)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  padding: "10px",
}));

const StyledOcrTableContainer = styled(TableContainer)(() => ({
  width: "100%",
  height: "100%",
  border: "1px solid #ddd",
  borderRadius: "5px",
}));
