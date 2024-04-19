import {
  Box,
  BoxProps,
  Button,
  Stack,
  StackProps,
  Typography,
  keyframes,
  styled,
} from "@mui/material";
import { MouseEvent, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import useOcrStore from "../../store/useOcrStore";
import { enqueueSnackbar } from "notistack";

interface ICustomFile extends File {
  preview: string;
}

function ImageUpload() {
  const setAllOcrData = useOcrStore((state) => state.setAllOcrData);
  const isLoading = useOcrStore((state) => state.isLoading);
  const setIsLoading = useOcrStore((state) => state.setIsLoading);

  const [files, setFiles] = useState<ICustomFile[]>([]);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 1) {
        return alert("이미지는 1개만 업로드 가능합니다.");
      }

      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  useEffect(() => {
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

  const handleClickCancel = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setFiles([]);
    setAllOcrData({
      DOC_ID: null,
      NLP_DOC_ID: null,
      NLP_RESULT: [],
      MESSAGE: "",
      RCV_NO: null,
    });
  };

  const handleClickOcr = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsLoading(true);
    setAllOcrData({
      DOC_ID: null,
      NLP_DOC_ID: null,
      NLP_RESULT: [],
      MESSAGE: "",
      RCV_NO: null,
    });

    getOcrData();
  };

  const getOcrData = async () => {
    setIsLoading(true);

    try {
      const formData = new FormData();

      formData.append("files", files[0]);

      const response = await fetch(
        `${import.meta.env.VITE_APP_BASE_API_URL}/inference/kveImage`,
        {
          method: "POST",
          body: formData,
        }
      );

      const json = await response.json();

      setAllOcrData({
        DOC_ID: json["CONTENTS"][0]["DOC_ID"],
        NLP_DOC_ID: json["CONTENTS"][0]["NLP_DOC_ID"],
        NLP_RESULT: json["CONTENTS"][0]["NLP_RESULT"],
        MESSAGE: json["MESSAGE"],
        RCV_NO: json["RCV_NO"],
      });

      enqueueSnackbar("이미지 OCR 처리가 완료되었습니다.", {
        variant: "success",
        autoHideDuration: 2000,
      });
    } catch (error) {
      console.error(error);

      enqueueSnackbar(
        <>
          <Typography variant="body1" color="textSecondary">
            이미지 OCR 처리에 실패했습니다.
          </Typography>
          <Typography variant="caption" color="error">
            {String(error)}
          </Typography>
        </>,
        {
          variant: "error",
        }
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <StyledImageUpload
      {...getRootProps()}
      isDragActive={isDragActive}
      isLoading={isLoading}
    >
      <input {...getInputProps()} />

      {files.length > 0 ? (
        <ImageUploadFileLayout isLoading={isLoading}>
          <div className="image-wrapper">
            <img
              src={files[0].preview}
              alt="이미지"
              style={{ width: "100%" }}
            />
          </div>

          <Stack className="image-controller">
            <Button
              variant="outlined"
              color="inherit"
              onClick={handleClickCancel}
            >
              취소
            </Button>
            <Button variant="outlined" onClick={handleClickOcr}>
              OCR
            </Button>
          </Stack>
        </ImageUploadFileLayout>
      ) : (
        <Typography
          variant="body1"
          color={isDragActive ? "primary" : "textSecondary"}
          display="flex"
          gap="4px"
        >
          이미지를
          <Typography color="primary" fontWeight="bold">
            업로드
          </Typography>
          해주세요
        </Typography>
      )}
    </StyledImageUpload>
  );
}

export default ImageUpload;

const StyledImageUpload = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isDragActive" && prop !== "isLoading",
})<BoxProps & { isDragActive: boolean; isLoading: boolean }>(
  ({ theme, isDragActive, isLoading }) => ({
    width: "100%",
    height: "100%",
    border: isDragActive
      ? `1px dashed ${theme.palette.primary.main}`
      : "1px dashed #ddd",
    padding: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: ".25s",
    cursor: "pointer",

    "&:hover": {
      border: `1px dashed ${theme.palette.primary.main}`,
      color: theme.palette.primary.main,
    },

    pointerEvents: isLoading ? "none" : "auto",
  })
);

const scanAnimation = keyframes`
  0% { top: 0; opacity: 0.1;}
  25% { opacity: 0.7; }
  50% { top: 100%; opacity: 0.1; }
  75% { opacity: 0.7; }
  100% { top: 0; opacity: 0.1; }
`;

const ImageUploadFileLayout = styled(Stack, {
  shouldForwardProp: (prop) => prop !== "isLoading",
})<StackProps & { isLoading: boolean }>(({ theme, isLoading }) => ({
  width: "100%",
  height: "100%",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  position: "relative",

  "&::before": {
    content: '""',
    position: "absolute",
    zIndex: 2,
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.1)",
    display: isLoading ? "block" : "none",
  },

  ".image-wrapper": {
    width: "100%",
    height: "90%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",

    "&::after": {
      content: '""',
      position: "absolute",
      top: "-8px",
      width: "100%",
      height: "8px",
      background: `linear-gradient(to right, transparent, ${theme.palette.primary.main}, transparent)`,
      boxShadow: `0 10px 30px -5px ${theme.palette.primary.main}40, 0 -10px 15px -5px ${theme.palette.primary.main}40`,
      animation: isLoading
        ? `${scanAnimation} 3s ease-in-out infinite forwards`
        : "none",
    },

    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "contain",
    },
  },

  ".image-controller": {
    width: "100%",
    height: "10%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    color: "#999",
  },
}));
