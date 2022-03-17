import { useNavigate } from 'react-router-dom'

const useHistory = () => {
    const navigate = useNavigate()
    return {
        navigate,
        gotoPage(page: string) {
            navigate(page)
        }

    }

}
export default useHistory
