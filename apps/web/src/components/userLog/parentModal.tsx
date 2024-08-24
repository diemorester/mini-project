import React, { useState } from "react";
import LoginModal from "./loginmodal";
import RegisterModal from "./registermodal";

export default function ParentModal() {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleOpenRegisterModal = () => {
    setIsRegisterModalOpen(true);
  };

  const handleOpenLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  return (
    <div>
      <button className="hover:text-sept-green" onClick={handleOpenLoginModal}>
        LOGIN
      </button>

      <button onClick={handleOpenRegisterModal}>Open Register Modal</button>

      <LoginModal
        isOpen={isLoginModalOpen}
        setIsModalOpen={setIsLoginModalOpen}
        handleOpenRegisterModal={handleOpenRegisterModal}
        isRegisterModalOpen={isRegisterModalOpen}
      />

      <RegisterModal
        isOpen={isRegisterModalOpen}
        setIsModalOpen={setIsRegisterModalOpen}
      />
    </div>
  );
}
