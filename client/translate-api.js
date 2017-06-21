let API_ENDPOINT;

if (process.env.NODE_ENV === 'production') {
    API_ENDPOINT = JSON.stringify('https://surfly-labs-translate.herokuapp.com/');
} else {
    API_ENDPOINT = JSON.stringify('/');
}

export function translate({word, src, dest}) {
    console.log(word, src, dest);
    let body = {
        word: word
    };
    if (dest) {
        body.dest = dest;
    }
    if (src) {
        body.src = src;
    }
    return fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
}
