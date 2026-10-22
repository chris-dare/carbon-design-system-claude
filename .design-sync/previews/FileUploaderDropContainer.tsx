import { FileUploader, FileUploaderButton, FileUploaderDropContainer, FileUploaderItem, Filename } from '@carbon/react';

// FileUploaderDropContainer is the drag-and-drop target.
export const InContext = () => (
  <div style={{ maxWidth: '24rem', padding: '1rem' }}>
    <FileUploaderDropContainer labelText="Drag and drop files here, or click to upload" multiple />
  </div>
);
