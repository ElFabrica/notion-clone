"use client";

import "@blocknote/core/style.css";

interface EditorProps {
  onChange: (value: string) => void;
  initialContent?: string;
  editable?: boolean;
}

export function Editor({ onChange, editable, initialContent }: EditorProps) {
  return <div>Viva ao editor</div>;
}
