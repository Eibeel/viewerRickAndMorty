import { SearchIcon } from '@chakra-ui/icons'
import { Button, Flex, IconButton, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useAuth from '../hooks/useAuth'
import { FormLayout } from '../services/auth/FormLayout'
import { getCharacterAction } from '../store/viewer'
import { setAuth } from '../store/viewer/viewerSlice'
import { Favorites } from './Favorites'

export const InputSearch = () => {
  const [query, setQuery] = useState('')
  const { handleLogout } = useAuth()
  const { auth } = useSelector(state => state.viewer)
  const dispatch = useDispatch()

  const handleChange = ({ target }) => {
    setQuery(target.value)
    dispatch(getCharacterAction(0, query))
  }

  const onLogout = () => {
    handleLogout()
    dispatch(setAuth(''))
  }

  const authStorage = localStorage.getItem('email')

  return (
    <Flex w={{ base: 'auto', md: 'container.md' }} alignItems='center' columnGap={6} mb={6}>
      {
        auth || authStorage
          ? <Favorites />
          : ''
      }
      <InputGroup>
        <Input
          placeholder='Search a character'
          focusBorderColor='#6B46C1'
          value={query}
          onChange={handleChange}
        />
        <InputRightElement>
          <IconButton icon={<SearchIcon />} variant='unstyled' />
        </InputRightElement>
      </InputGroup>
      {
        auth || authStorage
          ? <Button size='md' colorScheme='red' onClick={onLogout}>Logout</Button>
          : <FormLayout />
      }
    </Flex>
  )
}
