const isLogin = (username) => {
    if (username === "admin") {
        return true;
    }
    return false;
};
export { isLogin };
