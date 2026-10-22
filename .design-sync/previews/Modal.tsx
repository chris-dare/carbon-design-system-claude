import { Modal, ComposedModal, ModalHeader, ModalBody, ModalFooter, TextInput } from '@carbon/react';

export const Basic = () => (
  <Modal
    open
    modalHeading="Delete api-gateway?"
    modalLabel="Services"
    primaryButtonText="Delete"
    secondaryButtonText="Cancel"
    danger
    onRequestClose={() => {}}
  >
    <p>This permanently removes the service and its configuration. This action cannot be undone.</p>
  </Modal>
);

export const Passive = () => (
  <Modal open passiveModal modalHeading="Deployment started" onRequestClose={() => {}}>
    <p>Your service is being deployed. You can close this dialog.</p>
  </Modal>
);

export const Composed = () => (
  <ComposedModal open onClose={() => {}} size="sm">
    <ModalHeader label="Account" title="Rename service" />
    <ModalBody hasForm>
      <TextInput id="m-name" labelText="Service name" defaultValue="api-gateway" />
    </ModalBody>
    <ModalFooter primaryButtonText="Save" secondaryButtonText="Cancel" />
  </ComposedModal>
);
