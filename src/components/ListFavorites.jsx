import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

export const ListFavorites = () => {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || []

  return (
    <>
      {
        favorites.map(favorite => (
          <Flex
            key={favorite.id}
            alignItems='center'
            justifyContent='space-between'
            my={2}
            p={2}
            border='solid 1px'
            borderColor='#e5e5e5'
            borderRadius={4}
          >
            <Text>Character: {favorite.nameCharacter}</Text>
            <Image src={favorite.image} h='36px' borderRadius={32} />
          </Flex>
        ))
      }
    </>
  )
}
