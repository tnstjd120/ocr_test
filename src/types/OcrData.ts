export interface IOcrState {
  DOC_ID: string | null;
  NLP_DOC_ID: string | null;
  NLP_RESULT: IOcrData[];
  MESSAGE: string;
  RCV_NO: string | null;
}

export interface IOcrData {
  blockIndex: string;
  displayName: string;
  key: string;
  lineLoc: number;
  pageId: number;
  pageIndex: number;
  showIdx: number;
  value: string;
}
