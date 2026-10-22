import { FileUploader, FileUploaderButton, FileUploaderDropContainer, FileUploaderItem, Filename } from '@carbon/react';

// FileUploaderItem is one row of upload status — shown complete, uploading, and invalid.
export const InContext = () => (
  <div style={{ maxWidth: '24rem', padding: '1rem' }}>
    <FileUploaderItem uuid="1" name="deployment.yaml" status="complete" iconDescription="Uploaded" />
    <FileUploaderItem uuid="2" name="secrets.env" status="uploading" iconDescription="Uploading" />
    <FileUploaderItem uuid="3" name="too-large.zip" status="edit" invalid
      errorSubject="File is too large" errorBody="Files must be under 5 MB." iconDescription="Remove" />
  </div>
);
