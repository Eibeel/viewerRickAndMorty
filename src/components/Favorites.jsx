import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure
} from '@chakra-ui/react'
import { ListFavorites } from './ListFavorites'

export const Favorites = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button size='md' variant='outline' onClick={onOpen}>
        ❤️
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size={{ base: 'xs', md: 'lg' }}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Favorites</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ListFavorites />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
