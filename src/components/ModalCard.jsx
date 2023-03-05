import {
  Image,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack
} from '@chakra-ui/react'
import PropTypes from 'prop-types'

export const ModalCard = ({ thumbnail, name, status, specie, gender, origin, locationName }) => {
  return (
    <>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign='center'>{name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Image src={thumbnail} h='300px' w='300px' borderRadius='8px' />
          <VStack py={6} textAlign='center'>
            <Text>Status: {status}</Text>
            <Text>Specie: {specie}</Text>
            <Text>Gender: {gender}</Text>
            <Text>Origin: {origin}</Text>
            <Text>Location: {locationName}</Text>
          </VStack>
        </ModalBody>
      </ModalContent>
    </>
  )
}

ModalCard.propTypes = {
  thumbnail: PropTypes.node.isRequired,
  name: PropTypes.node.isRequired,
  status: PropTypes.node.isRequired,
  specie: PropTypes.node.isRequired,
  gender: PropTypes.node.isRequired,
  origin: PropTypes.node.isRequired,
  locationName: PropTypes.node.isRequired
}
