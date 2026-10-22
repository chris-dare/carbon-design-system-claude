import { ModalPresence, Modal } from '@carbon/react';

// ModalPresence keeps a Modal mounted across its enter/exit transition, so the
// closing animation can play instead of the modal vanishing. It renders nothing
// of its own — the Modal inside it is what you see.
export const Open = () => (
  <div style={{ position: 'relative', minHeight: '22rem' }}>
    <ModalPresence open>
      <Modal
        open
        modalHeading="Delete service"
        primaryButtonText="Delete"
        secondaryButtonText="Cancel"
        danger
        onRequestClose={() => {}}
      >
        <p>This permanently removes api-gateway and its configuration.</p>
      </Modal>
    </ModalPresence>
  </div>
);
