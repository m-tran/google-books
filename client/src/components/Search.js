import React from 'react';
import { makeStyles, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
    },
    },
}));

const Search = (props) => {
    const classes = useStyles();

    return (
        <form onSubmit={props.submitQuery} className={classes.root} noValidate autoComplete="off">
            <TextField 
                id="outlined-basic" 
                label="Search" 
                variant="outlined"
                name="search" 
                onChange={props.editQuery}
            />
        </form>
    )
}

export default Search;
