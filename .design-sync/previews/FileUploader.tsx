import { FileUploader, FileUploaderDropContainer, FileUploaderItem } from '@carbon/react';

export const Basic = () => (
  <div style={{ maxWidth: '24rem' }}>
    <FileUploader
      labelTitle="Upload files"
      labelDescription="Max file size is 500 KB. Supported types: .jpg, .png"
      buttonLabel="Add files"
      buttonKind="primary"
      filenameStatus="edit"
      accept={['.jpg', '.png']}
      multiple
    />
  </div>
);

export const DropArea = () => (
  <div style={{ maxWidth: '24rem' }}>
    <FileUploaderDropContainer labelText="Drag and drop files here or click to upload" multiple />
  </div>
);

export const ItemStatuses = () => (
  <div style={{ maxWidth: '24rem' }}>
    <FileUploaderItem uuid="f1" name="uploading.png" status="uploading" />
    <FileUploaderItem uuid="f2" name="complete.png" status="complete" />
    <FileUploaderItem uuid="f3" name="editable.png" status="edit" />
    <FileUploaderItem uuid="f4" name="invalid.png" status="edit" invalid errorSubject="File size exceeds limit" errorBody="500 KB max" />
  </div>
);
