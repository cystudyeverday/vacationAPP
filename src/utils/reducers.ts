import { State } from './types'
export const set = (state: State, data: any) => {
    if (Array.isArray(data) && data.length === 2) {
        if (Array.isArray(data[0])) {
            return state.setIn(data[0], data[1]);
        }
        return state.set(data[0], data[1]);
    } else if (data?.path !== undefined && data?.value !== undefined && Array.isArray(data.path)) {
        return state.setIn(data.path, data.value);
    }
    console.error('wrong payload for set reducer', data);
    return state;
};