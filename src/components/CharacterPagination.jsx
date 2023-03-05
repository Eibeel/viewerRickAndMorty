import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { useDispatch, useSelector } from 'react-redux'
import { Flex, IconButton, Square } from '@chakra-ui/react'
import { getCharacterAction } from '../store/viewer/thunks'

export const CharacterPagination = () => {
  const dispatch = useDispatch()
  const { pages } = useSelector(state => state.viewer)

  const handleNextPage = async () => {
    dispatch(getCharacterAction(pages))
  }

  const handlePrevPage = () => {
    dispatch(getCharacterAction(pages - 2))
  }

  return (
    <Flex w='fit-content' mt={10} mx='auto'>
      <IconButton icon={<ChevronLeftIcon />} onClick={handlePrevPage} isDisabled={pages === 1} />
      <Square size='40px'>{pages}</Square>
      <IconButton icon={<ChevronRightIcon />} onClick={handleNextPage} isDisabled={pages === 42} />
    </Flex>
  )
}
