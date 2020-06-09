import decode from 'jwt-decode';

export default class AuthService {
    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) { // Checking if token is expired. N
                return true;
            }
            else
                return false;
        }
        catch (err) {
            return false;
        }
    }
    loggedIn() {
        if (localStorage.getItem('id_token') !== null) {
            const savedToken = localStorage.getItem('id_token')
            console.log(savedToken)
            return !!savedToken && !this.isTokenExpired(savedToken)
        } else return false
    }
    logout() {
        localStorage.removeItem('id_token')
    }
    getProfile() {
        return decode(localStorage.getItem('id_token'))
    }
}
