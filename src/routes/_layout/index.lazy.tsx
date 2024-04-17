import { CharacterCard } from '@/components/CharacterCard';
import { GET_CHARACTERS } from '@/gql/documents/queries';
import { useQuery } from '@apollo/client';
import { createLazyFileRoute } from '@tanstack/react-router';

const Index = () => {
  const getCharactersQuery = useQuery(GET_CHARACTERS);
  return (
    <div>
      {/* {getCharactersQuery.data?.characters?.results?.map((character) => (
        <CharacterCard key={character?.id} character={character} />
      ))} */}
    </div>
  );
};

export const Route = createLazyFileRoute('/_layout/')({
  component: Index
});
