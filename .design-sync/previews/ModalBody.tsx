import { ComposedModal, ModalHeader, ModalBody, ModalFooter, TextInput } from '@carbon/react';

// ModalBody is part of the ComposedModal composition — the modal is forced open.
export const InContext = () => (
  <div style={{ position: 'relative', minHeight: '22rem' }}>
    <ComposedModal open onClose={() => {}} preventCloseOnClickOutside>
      <ModalHeader label="Services" title="Rename service" />
      <ModalBody hasForm>
        <TextInput id="cm-name" labelText="Service name" defaultValue="api-gateway" />
      </ModalBody>
      <ModalFooter primaryButtonText="Save" secondaryButtonText="Cancel" />
    </ComposedModal>
  </div>
);
