'use client';

import React, { useEffect } from 'react';

const Modal = ({
  children,
  id,
  onClose,
}: {
  children: React.ReactNode;
  id?: string;
  onClose: () => void;
}) => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (e.target) {
        const target = e.target as HTMLElement;
        if (target.id === id) {
          onClose();
        }
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [id, onClose]);
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      id={id}
    >
      <div className="modal-box bg-sept-black text-white">
        {children}
        <div className="modal-action">
          <button
            type="button"
            className="btn bg-sept-green text-sept-white"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
