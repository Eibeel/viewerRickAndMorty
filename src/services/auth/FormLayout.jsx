import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure
} from '@chakra-ui/react'
import { Authentication } from './Authentication'

export const FormLayout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button size='md' colorScheme='purple' onClick={onOpen}>Login</Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size={{ base: 'sm', md: 'md' }}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={8}>
            <Authentication />
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
