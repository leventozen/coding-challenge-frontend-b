export async function handleResponse(response) {
    if (response.ok) return response.json();
    if (response.status === 400) {
        const error = await response.text();
        throw new Error(error);
    }
    throw new Error("Unresolved problem was occured.");
}

export function handleError(error) {
    // eslint-disable-next-line no-console
    console.error("API call failed. " + error);
    throw error;
}

export function createQueryParams(params) {
   return new URLSearchParams(params).toString()
}
