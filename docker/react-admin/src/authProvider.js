export default {
    // called when the user attempts to log in
    login:  () => Promise.resolve(),
    // called when the user clicks on the logout button
    logout:  () => Promise.resolve(),
    // called when the API returns an error
    checkError:  () => Promise.resolve(),
    // called when the user navigates to a new location, to check for authentication
    checkAuth:  () => Promise.resolve(),
    // called when the user navigates to a new location, to check for permissions / roles
    getPermissions: () => Promise.resolve(),
};
