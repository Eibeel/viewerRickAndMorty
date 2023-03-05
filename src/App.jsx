import { IconButton, Image, Link } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { InputSearch, Navigation, Wrapper } from './components'
import { getCharacterAction } from './store/viewer'

export const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCharacterAction())
  }, [])

  return (
    <Wrapper>
      <Image src='https://rb.gy/zzx2tl' h='80px' my={6} />
      <InputSearch />
      <Navigation />
      <IconButton variant='unstyled' mt={8} mb={16} as={Link} href='https://github.com/Eibeel/viewerRickAndMorty' isExternal>
        <Image src='https://rb.gy/hvaqr9' h='32px' opacity='.4' />
      </IconButton>
    </Wrapper>
  )
}
