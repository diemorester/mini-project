import React from "react";

const SuccessModal = ({
  message,
  onClose,
}: {
  message: string;
  onClose: () => void;
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="modal-box bg-sept-black text-green-500">
        <h2 className="font-bold text-lg">Success</h2>
        <div className="py-4">
          {message && (
            <p className="text-sept-white">{message}</p>
          )}
        </div>
        <div className="modal-action">
          <button
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

export default SuccessModal;