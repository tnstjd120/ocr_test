import { create } from "zustand";
import { IOcrData, IOcrState } from "../types/OcrData";

interface OcrStore extends IOcrState {
  setOcrTitle: (DOC_ID: string, NLP_DOC_ID: string) => void;
  setOcrData: (NLP_RESULT: IOcrData[]) => void;
  setOcrMessage: (MESSAGE: string) => void;
  setOcrRcvNo: (RCV_NO: string) => void;
  setAllOcrData: (data: IOcrState) => void;

  ocrImageFile: File | null;
  setOcrImageFile: (ocrImageFile: File | null) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

const useOcrStore = create<OcrStore>((set) => ({
  DOC_ID: null,
  NLP_DOC_ID: null,
  NLP_RESULT: [],
  MESSAGE: "",
  RCV_NO: null,
  ocrImageFile: null,

  setOcrTitle: (DOC_ID, NLP_DOC_ID) => set({ DOC_ID, NLP_DOC_ID }),
  setOcrData: (NLP_RESULT) => set({ NLP_RESULT }),
  setOcrMessage: (MESSAGE) => set({ MESSAGE }),
  setOcrRcvNo: (RCV_NO) => set({ RCV_NO }),
  setAllOcrData: (data) => set(data),
  setOcrImageFile: (ocrImageFile) => set({ ocrImageFile }),

  isLoading: false,
  setIsLoading: (isLoading) => set({ isLoading }),
}));

export default useOcrStore;
