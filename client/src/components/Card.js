import React from 'react';
import {
    makeStyles,
    Card,
    CardActionArea,
    CardActions,
    CardMedia,
    CardContent,
    Button,
    Typography,
} from '@material-ui/core';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const BookCard = (props) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    id={props.key}
                    className={classes.media}
                    image={props.image}
                    title={props.bookTitle}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.bookTitle}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.author}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Add
                </Button>
            </CardActions>
        </Card>
    )
}

export default BookCard;
