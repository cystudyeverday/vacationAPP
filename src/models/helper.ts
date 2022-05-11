export function fromUrlToBlob(url: string, filename: string) {
    return fetch(url)
        .then(res => res.blob()) // Gets the response and returns it as a blob
        .then(blob => {
            return new File([blob], filename, { type: blob.type })
            // return blob
        });

}