import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { useDispatch, useSelector } from 'react-redux'
import { Flex, IconButton, Square } from '@chakra-ui/react'
import { getLocationAction } from '../store/viewer/thunks'

export const LocationPagination = () => {
  const dispatch = useDispatch()
  const { pages } = useSelector(state => state.viewer)

  const handleNextPage = async () => {
    dispatch(getLocationAction(pages))
  }

  const handlePrevPage = () => {
    dispatch(getLocationAction(pages - 2))
  }

  return (
    <Flex w='fit-content' mt={10} mx='auto'>
      <IconButton icon={<ChevronLeftIcon />} onClick={handlePrevPage} isDisabled={pages === 1} />
      <Square size='40px'>{pages}</Square>
      <IconButton icon={<ChevronRightIcon />} onClick={handleNextPage} isDisabled={pages === 7} />
    </Flex>
  )
}
