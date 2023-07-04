export const hasAuthHash = () => {
    if (typeof window !== 'undefined') {
        return sessionStorage.getItem('auth_hash');
    }
    return false;
}