import React, { createContext, useContext, useState } from "react"

interface IModalContext {
  modals: Record<ModalIds, boolean>
  openModal: (modalId: ModalIds) => void
  closeModal: (modalId: ModalIds) => void
}

type IModalProvider = IProvider

const defaultValues: IModalContext = {
  modals: {
    normal: false,
  },
  openModal: () => {},
  closeModal: () => {},
}

const ModalContext = createContext<IModalContext>(defaultValues)

const ModalProvider: React.FC<IModalProvider> = ({ children }) => {
  const [modals, setModals] = useState(defaultValues.modals)

  const openModal = (modalId: ModalIds) => {
    setModals((prevModals) => ({
      ...prevModals,
      [modalId]: true,
    }))
  }

  const closeModal = (modalId: ModalIds) => {
    setModals((prevModals) => ({
      ...prevModals,
      [modalId]: false,
    }))
  }

  const modalContextValue: IModalContext = {
    modals,
    openModal,
    closeModal,
  }

  return <ModalContext.Provider value={modalContextValue}>{children}</ModalContext.Provider>
}

const useModal = (modalId: ModalIds) => {
  const { modals, openModal, closeModal } = useContext(ModalContext)

  if (modals[modalId]===undefined) {
    throw new Error(`Modal with id "${modalId}" does not exist`)
  }

  return {
    isOpen: modals[modalId] || false,
    openModal: () => openModal(modalId),
    closeModal: () => closeModal(modalId),
  }
}

export { ModalProvider, useModal }
