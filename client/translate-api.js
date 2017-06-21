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
