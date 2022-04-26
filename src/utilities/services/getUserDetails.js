import createService from './create-service';

export default createService((data) => {
    return {
        url: `http://localhost:3000/auth/user`,
        headers: {
            'Content-Type': 'application/json',
        },
        parser: (data) => {
            return data = data[0];
        },
    };
});
