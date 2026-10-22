import { ModalWrapper, TextInput } from '@carbon/react';

export const WithTrigger = () => (
  <div style={{ padding: '1rem' }}>
    <ModalWrapper
      buttonTriggerText="Rename service"
      modalHeading="Rename service"
      primaryButtonText="Save"
      secondaryButtonText="Cancel"
      handleSubmit={() => true}
    >
      <TextInput id="mw-name" labelText="Service name" defaultValue="api-gateway" />
    </ModalWrapper>
  </div>
);
