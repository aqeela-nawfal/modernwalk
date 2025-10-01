import React from "react";

interface SkeletonProps {
  className?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({ className }) => (
  <div
    className={`animate-pulse bg-gray-200 dark:bg-gray-700 rounded ${className ?? ""}`.trim()}
    aria-busy="true"
    aria-label="Loading..."
  />
);

export default Skeleton;
