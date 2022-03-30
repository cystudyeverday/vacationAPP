export const authHeader = () => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (user) {
        return { Authorization: user }
    } else { return null }

}

