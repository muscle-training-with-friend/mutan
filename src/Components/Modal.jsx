import { useState } from "react";

export function createModal() {
  const [visible, setVisible] = useState(false);

  const open = () => setVisible(true);
  const close = () => setVisible(false);
  const Modal = ({ children }) =>
    visible ? (
      <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-[rgba(0,0,0,0.5)]">
        <div className="z-[10] w-[80%] rounded-xl bg-bg p-5">{children}</div>
      </div>
    ) : undefined;

  return { open, close, Modal };
}
