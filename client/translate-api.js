export function translate({word, src, dest}) {
    console.log(word, src, dest);
    let params = 'word=' + encodeURIComponent(word);
    if (dest) {
        params += '&' + 'dest=' + encodeURIComponent(dest);
    }
    if (src) {
        params += '&' + 'src=' + encodeURIComponent(src);
    }
    return fetch(API_ENDPOINT + '?' + params);
}
