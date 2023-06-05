import fetcher from "../utils/fetcher"

export const postLogin = (body: object) => {
    return fetcher({
        path: `/login`,
        method: 'POST',
        body
    });
}