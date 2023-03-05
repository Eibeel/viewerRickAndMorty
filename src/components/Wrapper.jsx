import { Container } from '@chakra-ui/react'
import PropTypes from 'prop-types'

export const Wrapper = ({ children }) => {
  return (
    <Container maxW='container.md' centerContent>
      {children}
    </Container>
  )
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired
}
