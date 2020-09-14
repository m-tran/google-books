import React, { useState, useEffect } from 'react';
import '../App.css';
import DeleteCard from "../components/DeleteCard";
import { Grid } from '@material-ui/core';
import axios from "axios";

function Saved() {
    const [result, setResult] = useState([]);

    useEffect(() => {
        axios({
            method: "GET",
            url: `http://localhost:5000/api/books`,
        })
        .then((response) => {
            console.log(response);
            return response;
        })
        .then((res) => {
            const data = res.data;
            console.log(res)
            return data;
        })
        .then((data) => {
            setResult(data);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    let card = result.map((item, i) => {
        return (
            <Grid item xs={12}>
                <DeleteCard
                    key={item.id}
                    title={item.volumeInfo && item.volumeInfo.title}
                    author={item.volumeInfo && item.volumeInfo.authors}
                    image={item.volumeInfo && item.volumeInfo.imageLinks.thumbnail}
                    description={item.volumeInfo && item.volumeInfo.description}
                    link={item.volumeInfo && item.volumeInfo.infoLink}
                />
            </Grid>
        )
    });

    return (
        <div className="Search">
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

export default Saved;
