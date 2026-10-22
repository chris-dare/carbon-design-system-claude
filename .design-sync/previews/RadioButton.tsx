import { RadioButtonGroup, RadioButton, RadioTile, TileGroup } from '@carbon/react';

export const Group = () => (
  <RadioButtonGroup legendText="Deployment target" name="target" defaultSelected="staging">
    <RadioButton labelText="Development" value="dev" id="rb-dev" />
    <RadioButton labelText="Staging" value="staging" id="rb-staging" />
    <RadioButton labelText="Production" value="prod" id="rb-prod" />
    <RadioButton labelText="Disabled" value="off" id="rb-off" disabled />
  </RadioButtonGroup>
);

export const Vertical = () => (
  <RadioButtonGroup legendText="Plan" name="plan" orientation="vertical" defaultSelected="team">
    <RadioButton labelText="Individual" value="solo" id="rb-solo" />
    <RadioButton labelText="Team" value="team" id="rb-team" />
    <RadioButton labelText="Enterprise" value="ent" id="rb-ent" />
  </RadioButtonGroup>
);

export const Tiles = () => (
  <TileGroup legend="Instance size" name="size" defaultSelected="md">
    <RadioTile id="rt-sm" value="sm">Small — 2 vCPU, 4 GB</RadioTile>
    <RadioTile id="rt-md" value="md">Medium — 4 vCPU, 16 GB</RadioTile>
    <RadioTile id="rt-lg" value="lg">Large — 8 vCPU, 32 GB</RadioTile>
  </TileGroup>
);
