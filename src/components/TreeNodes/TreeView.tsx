import { useState } from "react";

interface TreeNodeData {
  name: string;
  children?: TreeNodeData[];
}

const TreeNode = ({ node }: { node: TreeNodeData }) => {
  console.log(node);
  const [isOpen, setIsOpen] = useState(true);

  const hasChildren = node.children && node.children.length > 0;

  const toggle = () => {
    if (hasChildren) setIsOpen(!isOpen);
  };

  return (
    <div style={{ paddingLeft: "1rem" }}>
      <div
        onClick={toggle}
        style={{
          cursor: hasChildren ? "pointer" : "default",
          userSelect: "none",
          fontFamily: "Courier New, monospace",
          fontSize: "12px",
        }}
      >
        {hasChildren ? (isOpen ? "📂" : "└─ 📁") : "└─ 📄"} {node.name}
      </div>

      {hasChildren && isOpen && (
        <div>
          {node.children?.map((child: TreeNodeData, index: number) => (
            <TreeNode key={index} node={child} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TreeNode;
