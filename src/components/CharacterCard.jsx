import {
  Box,
  Button,
  Image,
  Modal,
  Text,
  useDisclosure,
  VStack
} from '@chakra-ui/react'
import { ModalCard } from './ModalCard'
import PropTypes from 'prop-types'

export const CharacterCard = ({ thumbnail, name, status, specie, gender, origin, locationName }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box
      border='solid 1px'
      borderColor='#E2E8F0'
      borderRadius={4}
      xs={6}
    >
      <Image src={thumbnail} h='180px' w='180px' borderRadius='4px 4px 0 0' />
      <VStack py={4} spacing={4}>
        <Text textAlign='center'>{name}</Text>
        <Button onClick={onOpen} size='sm' variant='ghost' color='#6B46C1'>View more</Button>
      </VStack>

      <Modal isOpen={isOpen} onClose={onClose} isCentered size='xs'>
        <ModalCard
          gender={gender}
          locationName={locationName}
          name={name}
          origin={origin}
          specie={specie}
          status={status}
          thumbnail={thumbnail}
          Open={isOpen}
          Close={onClose}
        />
      </Modal>
    </Box>
  )
}

CharacterCard.propTypes = {
  thumbnail: PropTypes.node.isRequired,
  name: PropTypes.node.isRequired,
  status: PropTypes.node.isRequired,
  specie: PropTypes.node.isRequired,
  gender: PropTypes.node.isRequired,
  origin: PropTypes.node.isRequired,
  locationName: PropTypes.node.isRequired
}
