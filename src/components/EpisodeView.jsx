import { useSelector } from 'react-redux'
import { AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Text } from '@chakra-ui/react'

export const EpisodeView = () => {
  const { episodes } = useSelector(state => state.viewer)
  return (
    <>
      {
        episodes.map(episode => (
          <AccordionItem key={episode.id}>
            <h2>
              <AccordionButton _expanded={{ bg: '#E9D8FD', color: 'black' }}>
                <Text flex='1' textAlign='left'> Episode {episode.name} </Text>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              <Text>Title: {episode.name}</Text>
              <Text>Chapter: {episode.episode}</Text>
              <Text>Date: {episode.air_date}</Text>
              <Text>Created: {episode.created.slice(0, -14)}</Text>
            </AccordionPanel>
          </AccordionItem>
        ))
      }
    </>
  )
}
