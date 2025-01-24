import { MethodNotImplementedError, PDFObject } from 'src/core';

describe(`PDFObject`, () => {
  const pdfObject = new PDFObject();

  it(`does not implement clone()`, () => {
    expect(() => {
      return pdfObject.clone();
    }).toThrow(new MethodNotImplementedError(PDFObject.name, 'clone'));
  });

  it(`does not implement toString()`, () => {
    expect(() => {
      return pdfObject.toString();
    }).toThrow(new MethodNotImplementedError(PDFObject.name, 'toString'));
  });

  it(`does not implement sizeInBytes()`, () => {
    expect(() => {
      return pdfObject.sizeInBytes();
    }).toThrow(new MethodNotImplementedError(PDFObject.name, 'sizeInBytes'));
  });

  it(`does not implement copyBytesInto()`, () => {
    expect(() => {
      return pdfObject.copyBytesInto(new Uint8Array(), 0);
    }).toThrow(new MethodNotImplementedError(PDFObject.name, 'copyBytesInto'));
  });
});
