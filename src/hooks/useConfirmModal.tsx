import { useState } from "react";

export const useConfirmModal = () => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const openConfirmModal = (): void => setShowConfirmModal(true);
  const closeConfirmModal = (): void => setShowConfirmModal(false);

  return {
    showConfirmModal,
    openConfirmModal,
    closeConfirmModal,
  };
};
