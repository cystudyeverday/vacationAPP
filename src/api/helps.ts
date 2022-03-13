export const authHeader = () => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (user && user.data) {
        return { Authorization: 'Bears' + user.data }
    } else { return null }

}

