export const api = 'http://cfd-reactjs.herokuapp.com'


const refreshToken = async() => {
    const refreshToken = JSON.parse(localStorage.getItem("token"))?.refreshToken;
    let res = await fetch(`${api}/elearning/v4/refresh-token`, {
        method: "POST",
        body: JSON.stringify({
            refreshToken,
        }),
        headers: {
            "Content-Type": "application/json",
        },
    }).then((res) => res.json())
    localStorage.setItem('token', JSON.stringify(res.data));
}

export const handleResponse = async(res, url, option) => {
    if (res.status === 403) {
        await refreshToken();
        let token = JSON.parse(localStorage.getItem("token"))?.accessToken;

        return fetch(url, {
            ...option,
            headers: {
                ...option.headers,
                Authorization: `Bearer ${token}`,
            }
        }).then((res) => res.json());
    }
    return res.json();
}