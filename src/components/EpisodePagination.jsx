import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { useDispatch, useSelector } from 'react-redux'
import { Flex, IconButton, Square } from '@chakra-ui/react'
import { getEpisodeAction } from '../store/viewer/thunks'

export const EpisodePagination = () => {
  const dispatch = useDispatch()
  const { pages } = useSelector(state => state.viewer)

  const handleNextPage = async () => {
    dispatch(getEpisodeAction(pages))
  }

  const handlePrevPage = () => {
    dispatch(getEpisodeAction(pages - 2))
  }

  return (
    <Flex w='fit-content' mt={10} mx='auto'>
      <IconButton icon={<ChevronLeftIcon />} onClick={handlePrevPage} isDisabled={pages === 1} />
      <Square size='40px'>{pages}</Square>
      <IconButton icon={<ChevronRightIcon />} onClick={handleNextPage} isDisabled={pages === 3} />
    </Flex>
  )
}
