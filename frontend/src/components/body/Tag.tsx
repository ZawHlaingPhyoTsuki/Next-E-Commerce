import React from "react";

interface TagProps {
  children: React.ReactNode;
}

export default function Tag({ children }: TagProps) {
  return (
    <div className="flex gap-3 h-12 text-red-500">
      <div className="border-[10px] border-red-500 rounded-md" />
      <h4 className="my-auto text-xl font-semibold">{children}</h4>
    </div>
  );
}
