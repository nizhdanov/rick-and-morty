import { GetCharactersQuery } from '@/gql/__generated__/graphql';

import styles from './CharacterCard.module.css';

export const CharacterCard = ({ characters }: GetCharactersQuery) => {
  return <div className={styles.container}>{character.name}</div>;
};
