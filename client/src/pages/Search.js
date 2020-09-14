import React, { useState, useEffect } from 'react';
import '../App.css';
import SearchBar from "../components/SearchBar";
import BookCard from "../components/Card";
import useFetch from "../handlers/useFetch";
import { Grid } from '@material-ui/core';

function Search() {
    const [query, setQuery] = useState({
        search: ""
    });
    const [result, setResult] = useState([]);

    const editQuery = (e) => {
        setQuery({ ...query, [e.target.name]: e.target.value })
    }

    const SubmitQuery = (e) => {
        e.preventDefault();
        useFetch(query).then((res) => {
            const data = res.data.items;
            return data;
        })
            .then((data) => {
                return setResult(data);
            });
    };

    useEffect(() => {
        console.log(result);
    }, [result]);

    let card = result.map((item, i) => {
        return (
            <Grid item xs={12}>
                <BookCard
                    key={item.id}
                    bookTitle={item.volumeInfo && item.volumeInfo.title}
                    author={item.volumeInfo && item.volumeInfo.authors}
                    image={item.volumeInfo && item.volumeInfo.imageLinks.thumbnail}
                    description={item.volumeInfo && item.volumeInfo.description}
                    link={item.volumeInfo && item.volumeInfo.infoLink}
                />
            </Grid>
        )
    });

    let textQuery = <h1>Search results for '{query.search}'</h1>;

    return (
        <div className="Search">
            <SearchBar editQuery={editQuery} submitQuery={SubmitQuery} />
            {textQuery}
            <Grid
                container
                spacing={1}
                direction="column"
                justify="center"
                alignItems="center"
            >
                {card}
            </Grid>
        </div>
    );
}

export default Search;
