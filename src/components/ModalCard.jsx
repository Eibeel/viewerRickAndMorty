import { SmallAddIcon } from '@chakra-ui/icons'
import {
  Button,
  Image,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack
} from '@chakra-ui/react'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { useSelector } from 'react-redux'

export const ModalCard = ({ thumbnail, name, status, specie, gender, origin, locationName, id }) => {
  const { auth } = useSelector(state => state.viewer)
  const [disable, setDisable] = useState(false)
  const newFavorite = {
    nameCharacter: name,
    image: thumbnail,
    id
  }

  const handleSetId = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || []
    const duplicateId = favorites.findIndex(favorite => favorite.id === newFavorite.id)
    if (duplicateId === -1) {
      favorites.push(newFavorite)
      localStorage.setItem('favorites', JSON.stringify(favorites))
      setDisable(false)
    } else {
      setDisable(true)
    }
  }

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
        <ModalFooter>
          <Button onClick={handleSetId} size='sm' colorScheme='purple' rightIcon={<SmallAddIcon />} isDisabled={disable || auth === ''}>
            Add to favorites
          </Button>
        </ModalFooter>
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
  locationName: PropTypes.node.isRequired,
  id: PropTypes.node.isRequired
}
