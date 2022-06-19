
export const getToken = () => {
    const token = sessionStorage.getItem('token');
    return token ?? '';
};

export const getPrincipalId = () => {
    const token = sessionStorage.getItem('principalId');
    return token ?? '';
};

export const removeToken = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('userInfo');
    // @ts-ignore
    window.ic.plug.disconnect()
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