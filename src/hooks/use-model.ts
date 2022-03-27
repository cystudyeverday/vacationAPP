import { useDispatch, useSelector } from 'react-redux'
import { RootState, Dispatch } from '../app/store'
import { State } from '../utils/types'
export const useModel = (model: string) => {

    const state: State = useSelector((state: RootState) => state[model])
    const dispatch: any = useDispatch<Dispatch>()[model]

    return ({
        state, dispatch
    })

}