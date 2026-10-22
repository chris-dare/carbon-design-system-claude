import { FileUploader, FileUploaderButton, FileUploaderDropContainer, FileUploaderItem, Filename } from '@carbon/react';

// FileUploaderButton is the file-picker trigger on its own.
export const InContext = () => (
  <div style={{ padding: '1rem' }}>
    <FileUploaderButton labelText="Add files" buttonKind="tertiary" multiple />
  </div>
);
