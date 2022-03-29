import { requestWithToken } from "../utils/request";
export const getArticle = () => {
    const requestOption = {
        url: '/view/myArticle',
        method: 'POST',
    }
    return requestWithToken(requestOption)
};
