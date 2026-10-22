import { FileUploader, FileUploaderButton, FileUploaderDropContainer, FileUploaderItem, Filename } from '@carbon/react';

// Filename is just the status glyph used inside FileUploaderItem.
export const InContext = () => (
  <div style={{ display: 'flex', gap: '1.5rem', padding: '1rem', alignItems: 'center' }}>
    <Filename status="uploading" iconDescription="Uploading" />
    <Filename status="edit" iconDescription="Remove" />
    <Filename status="complete" iconDescription="Complete" />
  </div>
);
