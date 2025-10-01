import React from "react";

interface SeparatorProps {
  className?: string;
}

const Separator: React.FC<SeparatorProps> = ({ className }) => (
  <hr className={`border-t border-gray-200 dark:border-gray-700 my-4 ${className ?? ""}`.trim()} />
);

export default Separator;
