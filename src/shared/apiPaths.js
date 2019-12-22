const { baseUrl } = CONFIG.api; // eslint-disable-line

const apiPaths = {
    AUTHENTICATION: `${baseUrl}/authentication`,
    RESET_PASSWORD: username => (`${baseUrl}/users/${username}/resetPassword`),
    USERS: `${baseUrl}/users`,
    ROLES: `${baseUrl}/users/roles`,
};

export default apiPaths;
