import { PDFName, PDFNumber } from 'src/core';

export const asPDFName = (name: string | PDFName) => {
  return name instanceof PDFName ? name : PDFName.of(name);
};

export const asPDFNumber = (num: number | PDFNumber) => {
  return num instanceof PDFNumber ? num : PDFNumber.of(num);
};

export const asNumber = (num: number | PDFNumber) => {
  return num instanceof PDFNumber ? num.asNumber() : num;
};
