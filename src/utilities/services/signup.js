import createService from './create-service';

export default createService(post => {
    return {
        url: 'http://localhost:3000/auth/signup',
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        data: post,
        parser: (data) => {
            return data;
        },
    };
});
