import axios from "axios";

const useFetch = (query) => {
    console.log(query);
    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
            url: `https://www.googleapis.com/books/v1/volumes?q=${query.search}&key=${process.env.REACT_APP_API_KEY}`,
        })
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
    });
};

export default useFetch;
