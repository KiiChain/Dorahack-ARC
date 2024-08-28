import React from "react"

import Rodal from "rodal"

import { useModal } from "@/providers"

import "rodal/lib/rodal.css"

interface ModalProps {
  modalId: ModalIds
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ modalId, children }) => {
  const { isOpen, closeModal } = useModal(modalId)

  return (
    <Rodal
      visible={isOpen}
      onClose={closeModal}
      animation="slideUp"
    >
      {children}
    </Rodal>
  )
}

export default Modal
