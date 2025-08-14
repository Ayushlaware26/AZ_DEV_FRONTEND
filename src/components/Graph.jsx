// src/components/Graph.jsx
import { useState, useEffect, useCallback } from "react";
import { ReactFlow, Controls, Background } from "@xyflow/react";
import { useNavigate } from "react-router-dom";
import dagre from "dagre";
import "@xyflow/react/dist/style.css";

const nodeWidth = 150;
const nodeHeight = 50;

export default function Graph() {
  const navigate = useNavigate();

  // Hardcoded nodes and edges
  const rawNodes = [
    { id: "1", data: { label: "Intro to DSA" } },
    { id: "2", data: { label: "Arrays" } },
    { id: "3", data: { label: "Linked Lists" } },
    { id: "4", data: { label: "Trees" } },
    { id: "5", data: { label: "Graphs" } },
  ];

  const rawEdges = [
    { id: "e1-2", source: "1", target: "2" },
    { id: "e1-3", source: "1", target: "3" },
    { id: "e2-4", source: "2", target: "4" },
    { id: "e3-4", source: "3", target: "4" },
    { id: "e4-5", source: "4", target: "5" },
  ];

  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  const layoutGraph = () => {
    const dagreGraph = new dagre.graphlib.Graph();
    dagreGraph.setDefaultEdgeLabel(() => ({}));
    dagreGraph.setGraph({ rankdir: "TB", marginx: 20, marginy: 20 });

    rawNodes.forEach((node) =>
      dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight })
    );
    rawEdges.forEach((edge) => dagreGraph.setEdge(edge.source, edge.target));

    dagre.layout(dagreGraph);

    const positionedNodes = rawNodes.map((node) => {
      const { x, y } = dagreGraph.node(node.id);
      return {
        ...node,
        position: { x, y },
        style: {
          background: "#1E3A8A", // dark blue background
          color: "#FFFFFF", // white text
          border: "2px solid #E6E5FF", // light border
          borderRadius: 10,
          fontWeight: "bold",
        },
      };
    });

    setNodes(positionedNodes);
    setEdges(rawEdges.map((edge) => ({ ...edge, animated: true, style: { stroke: "#E6E5FF" } })));
  };

  useEffect(() => {
    layoutGraph();
    const handleResize = () => layoutGraph();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNodeClick = useCallback(
    (_, node) => {
      const courseId = "1";
      const moduleIndex = node.id;
      const lessonIndex = 0;
      navigate(`/courses/${courseId}/module/${moduleIndex}/lesson/${lessonIndex}`);
    },
    [navigate]
  );

  return (
    <div className="w-full h-[calc(100vh)] bg-gradient-to-bl from-neutral-200 to-blue-900 pt-10">
      <ReactFlow nodes={nodes} edges={edges} fitView onNodeClick={handleNodeClick}>
        <Background color="#E6E5FF" gap={16} /> {/* light grid lines */}
        <Controls />
      </ReactFlow>
    </div>
  );
}
