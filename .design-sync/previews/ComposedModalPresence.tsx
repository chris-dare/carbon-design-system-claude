import { ComposedModalPresence, ComposedModal, ModalHeader, ModalBody, ModalFooter } from '@carbon/react';

// ComposedModalPresence is the ComposedModal counterpart of ModalPresence: it
// holds the modal mounted so its exit transition can play.
export const Open = () => (
  <div style={{ position: 'relative', minHeight: '22rem' }}>
    <ComposedModalPresence open>
      <ComposedModal open onClose={() => {}} preventCloseOnClickOutside>
        <ModalHeader label="Services" title="Delete service" />
        <ModalBody>
          <p>This permanently removes api-gateway and its configuration.</p>
        </ModalBody>
        <ModalFooter primaryButtonText="Delete" secondaryButtonText="Cancel" danger />
      </ComposedModal>
    </ComposedModalPresence>
  </div>
);
