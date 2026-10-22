import { TreeView, TreeNode } from '@carbon/react';

export const Basic = () => (
  <div style={{ width: '18rem' }}>
    <TreeView label="File explorer" hideLabel>
      <TreeNode id="src" label="src" isExpanded>
        <TreeNode id="components" label="components" isExpanded>
          <TreeNode id="button" label="Button.jsx" />
          <TreeNode id="tile" label="Tile.jsx" />
        </TreeNode>
        <TreeNode id="index" label="index.js" />
      </TreeNode>
      <TreeNode id="pkg" label="package.json" />
    </TreeView>
  </div>
);
