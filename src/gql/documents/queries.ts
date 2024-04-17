import { gql } from '@/gql/__generated__';
import { CARD_CHARACTER } from './fragments';

export const GET_CHARACTERS = gql(`
    ${CARD_CHARACTER}
    query getCharacters {
        characters {
            results {
                ...CardCharacter
            }
        }
    }
`);
