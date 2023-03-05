import { useDispatch } from 'react-redux'
import { Accordion, Divider, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import { getEpisodeAction, getLocationAction } from '../store/viewer'
import { CharacterView, EpisodeView, LocationView, CharacterPagination, WrapperGrid, LocationPagination, EpisodePagination } from './'

const Navigation = () => {
  const dispatch = useDispatch()

  const handleGetEpisode = () => {
    dispatch(getEpisodeAction())
  }

  const handleGetLocation = () => {
    dispatch(getLocationAction())
  }

  return (
    <>
      <Tabs colorScheme='purple' size='lg' isLazy isFitted w={{ base: 'auto', md: 'container.md' }}>
        <TabList>
          <Tab>Characters</Tab>
          <Tab onClick={handleGetEpisode}>Episodes</Tab>
          <Tab onClick={handleGetLocation}>Locations</Tab>
        </TabList>
        <TabPanels>

          {/* Character */}
          <TabPanel pt={2} pb={8} px={0}>
            <WrapperGrid>
              <CharacterView />
            </WrapperGrid>
            <CharacterPagination />
          </TabPanel>

          {/* Episode */}
          <TabPanel py={0} px={0}>
            <Accordion allowToggle w={{ base: 'xs', md: 'auto' }} pb={8}>
              <EpisodeView />
            </Accordion>
            <EpisodePagination />
          </TabPanel>

          {/* Location */}
          <TabPanel py={0} px={0}>
            <Accordion allowToggle w={{ base: 'xs', md: 'auto' }} pb={6}>
              <LocationView />
            </Accordion>
            <LocationPagination />
          </TabPanel>
        </TabPanels>
      </Tabs >
      <Divider />
    </>
  )
}

export default Navigation
