import createService from './create-service';

export default createService((data) => {
    return {
        url: `http://localhost:3000/user/user/${data.userId}`,
        headers: {
            'Content-Type': 'application/json',
        },
        parser: (data) => {
            return data;
        },
    };
});
