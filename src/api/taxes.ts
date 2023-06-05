import fetcher from "../utils/fetcher"

export const getTaxes = () => {
    return fetcher({
        path: '/taxes',
        method: 'GET',
    })
}

export const getTaxesForm = (id: string) => {
    return fetcher({
        path: `/taxes/${id}/form`,
        method: 'GET',
    });
}

export const postTaxesForm = (id: string, body: object) => {
    return fetcher({
        path: `/taxes/${id}/form`,
        method: 'POST',
        body
    });
}