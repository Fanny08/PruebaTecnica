import * as CharacterService from './CharacterService';

export const list = async (params) => {
    const result = await CharacterService.list(params);
    return result;
}