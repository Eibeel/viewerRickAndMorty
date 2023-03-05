import { SimpleGrid } from '@chakra-ui/react'
import PropTypes from 'prop-types'

export const WrapperGrid = ({ children }) => {
  return (
    <SimpleGrid
      columns={{ base: 2, md: 4 }}
      spacing={8}
      mt={6}
      w={{ base: 'xs', md: 'container.md' }}
    >
      {children}
    </SimpleGrid>
  )
}

WrapperGrid.propTypes = {
  children: PropTypes.node.isRequired
}
