import React from "react";

export default function SectionContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="box-content">{children}</div>;
}
