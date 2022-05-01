import createService from './create-service';

export default createService(post => {
    return {
        url: 'http://localhost:3000/quiz/add',
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
