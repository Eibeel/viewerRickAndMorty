import { useState } from 'react'
import PropTypes from 'prop-types'
import { Box, Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, Stack, Text } from '@chakra-ui/react'
import useAuth from '../../hooks/useAuth'

export const Authentication = ({ Close }) => {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  const data = {
    email: '',
    password: ''
  }

  const { email, password, handleChange, handleSubmit, errors } = useAuth(data)

  return (
    <Box border='solid 1px' borderColor='gray.200' borderRadius={6} px={12} py={16}>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel>Email address</FormLabel>
          <Input
            id='mail'
            placeholder='example@mail.com'
            name='email'
            type='email'
            value={email}
            focusBorderColor='#6B46C1'
            onChange={handleChange}
            required
          />
          <FormLabel mt={6}>Password</FormLabel>
          <InputGroup mb={8}>
            <Input
              placeholder='********'
              type={show ? 'text' : 'password'}
              name='password'
              value={password}
              focusBorderColor='#6B46C1'
              onChange={handleChange}
              required
            />
            <InputRightElement w='4.5rem'>
              <Button h='1.75rem' size='sm' onClick={handleClick} >
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Stack spacing={8}>
            <Button type='submit' size='md' colorScheme='purple' onClick={Close}>
              Login
            </Button>
            {
              errors.error && <Text color='red.500' as='b' textAlign='center'>{errors.error}</Text>
            }
          </Stack>
        </FormControl>
      </form>
    </Box>
  )
}

Authentication.propTypes = {
  Close: PropTypes.func
}
