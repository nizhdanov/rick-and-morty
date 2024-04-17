import { gql } from '@/gql/__generated__';

export const CARD_CHARACTER = gql(`
    fragment CardCharacter on Character {
        id
        name
        image
        gender
        status
        species
        origin {
            name
        }
    }
`);
