import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import {
    makeStyles,
    Card,
    CardActionArea,
    CardActions,
    Collapse,
    CardMedia,
    CardContent,
    Button,
    Typography,
    IconButton,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    root: {
        width: 700,
        padding: 10,
    },
    details: {
        display: 'flex',
        flexDirection: 'row',
    },
    media: {
        height: 300,
        width: 200,
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
}));

const DeleteCard = (props) => {

    const [book, setBook] = useState({
        title: "",
        author: [],
        description: "",
        image: "",
        link: ""
    });

    useEffect(() => {
        // console.log(book)
    }, [book]);
    
    const submitState = async (e) => {
        console.log(props);
        e.preventDefault();
        await setBook(props);
        await saveBook(book)
        .catch(err => {
            console.log(err.response)
        });
    };

    const saveBook = (state) => {
        console.log(state);
        return new Promise((resolve, reject) => {
            axios({
                method: "DELETE",
                url: `http://localhost:5000/api/books`,
                headers: {'Content-Type':'application/x-www-form-urlencoded'},
                data: {
                    title: state.title,
                    authors: state.author,
                    description: state.description,
                    image: state.image,
                    link: state.link
                },
            })
            .then((response) => {
                console.log(response);
                resolve(response);
            })
            .catch(err => {
                console.log(err.response)
            });
        });
    };

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <Card className={classes.root}>
            <div className={classes.details}>
                <CardActionArea>
                    <CardMedia
                        id={props.key}
                        className={classes.media}
                        image={props.image}
                        title={props.title}
                    />
                </CardActionArea>
                <div>
                    <Typography gutterBottom variant="h5" component="h5">
                        {props.title}
                    </Typography>
                    <Typography gutterBottom variant="subtitle1">
                        {props.author}
                    </Typography>
                    <CardActions>
                        <Button 
                            size="small" 
                            color="primary"
                            onClick={submitState}
                        >
                            Delete
                        </Button>
                        <Button size="small" color="primary" href={props.link}>
                            Link
                        </Button>
                        <IconButton
                            className={clsx(classes.expand, {
                                [classes.expandOpen]: expanded,
                            })}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {props.description}
                            </Typography>
                        </CardContent>
                    </Collapse>
                </div>
            </div>
        </Card>
    )
}

export default DeleteCard;
