import "./backendTree.css";
import { backendTree } from "./backendTree.ts";

interface BackendTree {
  name: string;
  children?: BackendTree[];
}
const BackendTreeNode = ({ node }: { node: BackendTree }) => {
  const hasChildren = node.children && node.children.length > 0;

  return (
    <li>
      <div className="node">{node.name}</div>
      {hasChildren && (
        <ul>
          {node.children!.map((child, idx) => (
            <BackendTreeNode key={idx} node={child} />
          ))}
        </ul>
      )}
    </li>
  );
};

const BackendTree = () => {
  return (
    <div className="tech-tree">
      <ul>
        <BackendTreeNode node={backendTree} />
      </ul>
    </div>
  );
};

export default BackendTree;
