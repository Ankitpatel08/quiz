import createService from './create-service';

export default createService(post => {
    return {
        url: 'https://jsonplaceholder.typicode.com/posts',
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
