import { useSelector } from 'react-redux'
import { AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Text } from '@chakra-ui/react'

export const LocationView = () => {
  const { location } = useSelector(state => state.viewer)

  return (
    <>
      {
        location.map(location => (
          <AccordionItem key={location.id}>
            <h2>
              <AccordionButton _expanded={{ bg: '#E9D8FD', color: 'black' }}>
                <Text flex='1' textAlign='left'> {location.name} </Text>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              <Text>Type: {location.type}</Text>
              <Text>Dimension: {location.dimension}</Text>
              <Text>Created: {location.created.slice(0, -14)}</Text>
            </AccordionPanel>
          </AccordionItem>
        ))
      }
    </>
  )
}
