import { defineConfig } from 'rollup';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';

// eslint-disable-next-line no-undef
const { MINIFY, MODULE_TYPE } = process.env;

const IgnoredWarnings = [
  // Mac & Linux
  'Circular dependency: es/api/PDFDocument.js -> es/api/PDFFont.js -> es/api/PDFDocument.js',
  'Circular dependency: es/api/PDFDocument.js -> es/api/PDFImage.js -> es/api/PDFDocument.js',
  'Circular dependency: es/api/PDFDocument.js -> es/api/PDFPage.js -> es/api/PDFDocument.js',
  'Circular dependency: es/api/PDFPage.js -> es/api/PDFDocument.js -> es/api/PDFPage.js',
  'Circular dependency: es/api/PDFDocument.js -> es/api/PDFEmbeddedPage.js -> es/api/PDFDocument.js',
  'Circular dependency: es/api/PDFDocument.js -> es/api/form/PDFForm.js -> es/api/PDFDocument.js',
  'Circular dependency: es/api/form/index.js -> es/api/form/PDFButton.js -> es/api/form/PDFField.js -> es/api/PDFDocument.js -> es/api/form/index.js',
  'Circular dependency: es/api/form/PDFButton.js -> es/api/PDFPage.js -> es/api/PDFDocument.js -> es/api/form/PDFForm.js -> es/api/form/PDFButton.js',
  'Circular dependency: es/api/PDFPage.js -> es/api/PDFDocument.js -> es/api/form/PDFForm.js -> es/api/form/PDFCheckBox.js -> es/api/PDFPage.js',
  'Circular dependency: es/api/PDFDocument.js -> es/api/form/PDFForm.js -> es/api/form/PDFCheckBox.js -> es/api/form/PDFField.js -> es/api/PDFDocument.js',
  'Circular dependency: es/api/PDFPage.js -> es/api/PDFDocument.js -> es/api/form/PDFForm.js -> es/api/form/PDFDropdown.js -> es/api/PDFPage.js',
  'Circular dependency: es/api/PDFPage.js -> es/api/PDFDocument.js -> es/api/form/PDFForm.js -> es/api/form/PDFOptionList.js -> es/api/PDFPage.js',
  'Circular dependency: es/api/PDFPage.js -> es/api/PDFDocument.js -> es/api/form/PDFForm.js -> es/api/form/PDFRadioGroup.js -> es/api/PDFPage.js',
  'Circular dependency: es/api/PDFPage.js -> es/api/PDFDocument.js -> es/api/form/PDFForm.js -> es/api/form/PDFTextField.js -> es/api/PDFPage.js',

  // Windows
  'Circular dependency: es\\api\\PDFDocument.js -> es\\api\\PDFFont.js -> es\\api\\PDFDocument.js',
  'Circular dependency: es\\api\\PDFDocument.js -> es\\api\\PDFImage.js -> es\\api\\PDFDocument.js',
  'Circular dependency: es\\api\\PDFDocument.js -> es\\api\\PDFPage.js -> es\\api\\PDFDocument.js',
  'Circular dependency: es\\api\\PDFPage.js -> es\\api\\PDFDocument.js -> es\\api\\PDFPage.js',
  'Circular dependency: es\\api\\PDFDocument.js -> es\\api\\PDFEmbeddedPage.js -> es\\api\\PDFDocument.js',
  'Circular dependency: es\\api\\PDFDocument.js -> es\\api\\form\\PDFForm.js -> es\\api\\PDFDocument.js',
  'Circular dependency: es\\api\\form\\index.js -> es\\api\\form\\PDFButton.js -> es\\api\\form\\PDFField.js -> es\\api\\PDFDocument.js -> es\\api\\form\\index.js',
  'Circular dependency: es\\api\\form\\PDFButton.js -> es\\api\\PDFPage.js -> es\\api\\PDFDocument.js -> es\\api\\form\\PDFForm.js -> es\\api\\form\\PDFButton.js',
  'Circular dependency: es\\api\\PDFPage.js -> es\\api\\PDFDocument.js -> es\\api\\form\\PDFForm.js -> es\\api\\form\\PDFCheckBox.js -> es\\api\\PDFPage.js',
  'Circular dependency: es\\api\\PDFDocument.js -> es\\api\\form\\PDFForm.js -> es\\api\\form\\PDFCheckBox.js -> es\\api\\form\\PDFField.js -> es\\api\\PDFDocument.js',
  'Circular dependency: es\\api\\PDFPage.js -> es\\api\\PDFDocument.js -> es\\api\\form\\PDFForm.js -> es\\api\\form\\PDFDropdown.js -> es\\api\\PDFPage.js',
  'Circular dependency: es\\api\\PDFPage.js -> es\\api\\PDFDocument.js -> es\\api\\form\\PDFForm.js -> es\\api\\form\\PDFOptionList.js -> es\\api\\PDFPage.js',
  'Circular dependency: es\\api\\PDFPage.js -> es\\api\\PDFDocument.js -> es\\api\\form\\PDFForm.js -> es\\api\\form\\PDFRadioGroup.js -> es\\api\\PDFPage.js',
  'Circular dependency: es\\api\\PDFPage.js -> es\\api\\PDFDocument.js -> es\\api\\form\\PDFForm.js -> es\\api\\form\\PDFTextField.js -> es\\api\\PDFPage.js'
];

// Silence circular dependency warnings we don't care about
/** @type {import('rollup').WarningHandlerWithDefault} */
const onwarn = (warning, defaultHandler) => {
  if (IgnoredWarnings.includes(warning.message)) return;
  defaultHandler(warning);
};

export default defineConfig({
  onwarn,
  plugins: [ resolve(), commonjs(), json(), MINIFY === 'true' && terser(), typescript() ],
  input: 'es/index.js',
  output: {
    name: 'PDFLib',
    format: MODULE_TYPE,
    sourcemap: true
  }
});