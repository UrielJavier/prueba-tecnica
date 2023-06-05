interface Fetcher {
    path: string;
    body?: object;
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
}

const fetcher = ({
    path,
    body,
    method = 'GET'
}:Fetcher) => {
    return fetch(`${process.env.API_URL}${path}`, {
        headers: {'Content-Type': 'application/json'},
        method: method,
        ...body && { body: JSON.stringify(body)},
    })
    .then(res => res.json().then(res => res))
}

export default fetcher;