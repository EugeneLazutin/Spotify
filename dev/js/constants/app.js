const clientId = 'a223aac6d6f94d2fa4495cc058a4b7fa';
const apiUrl = 'https://accounts.spotify.com/';

export const loginUrl = `${apiUrl}authorize?client_id=${clientId}&response_type=token&redirect_uri=http://localhost:3000/`;
