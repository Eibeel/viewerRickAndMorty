import { useSelector } from 'react-redux'
import { CharacterCard } from './CharacterCard'

export const CharacterView = () => {
  const { characters } = useSelector(state => state.viewer)
  return (
    <>
      {
        characters.map(character => (
          <CharacterCard
            gender={character.gender}
            key={character.id}
            name={character.name}
            specie={character.species}
            status={character.status}
            thumbnail={character.image}
            origin={character.origin.name}
            locationName={character.location.name}
          />
        ))
      }
    </>
  )
}
