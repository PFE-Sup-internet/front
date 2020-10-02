let api = {
    baseUrl: "https://pfehelloapi.herokuapp.com/api/",

    login: (email, password) => {
        return new Promise((resolve, reject) => {
            fetch(baseUrl + 'login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({ 
                    email: email,
                    password: password
                })
            }).then((results) => {
                results.json().then((json) => {
                    localStorage.setItem("token", json.data.token)
                    resolve(json.data.token);
                });
            })
            .catch((error) => reject(error))
        })
    },

    register: (email, password, username) => {
        return new Promise((resolve, reject) => {
            fetch(baseUrl + 'signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({ 
                    username: username,
                    email: email,
                    password: password,
                })
            }).then((results) => {
                results.json().then((json) => {
                    localStorage.setItem("token", json.data.token)
                    resolve(json.data.token);
                });
            })
            .catch((error) => reject(error))
        })
    }
}

export default api