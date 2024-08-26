import React from "react";

const ErrorModal = ({
  errors,
  onClose,
}: {
  errors: { email?: string; password?: string; message?: string };
  onClose: () => void;
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="modal-box bg-sept-black text-red-500">
        <h2 className="font-bold text-lg">Error</h2>
        <div className="py-4">
          {errors.message && (
            <p className="text-sept-white">{errors.message}</p>
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

export default ErrorModal;
