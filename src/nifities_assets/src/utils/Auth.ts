
export const getToken = () => {
    const token = sessionStorage.getItem('token');
    return token ?? '';
};

export const removeToken = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('userInfo');
};

export const getUserInfo = () => {
    const userInfo = sessionStorage.getItem('userInfo');
    if (userInfo) {
        return JSON.parse(userInfo)
    }
    return {
        userId: "",
        userName: "",
        profilePhoto: "",
        email: ""
    }
};