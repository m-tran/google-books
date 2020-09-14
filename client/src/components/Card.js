import React from 'react';
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

const BookCard = (props) => {
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
                        title={props.bookTitle}
                    />
                </CardActionArea>
                <div>
                    <Typography gutterBottom variant="h5" component="h5">
                        {props.bookTitle}
                    </Typography>
                    <Typography gutterBottom variant="subtitle1" component="subtitle1">
                        {props.author}
                    </Typography>
                    <CardActions>
                        <Button size="small" color="primary">
                            Add
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

export default BookCard;
