import React from 'react';
import { 
    Button
} from '@material-ui/core';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Search from "../pages/Search";
import Saved from "../pages/Saved";

const Header = () => {
    return (
        <Router>
            <div>
                <header>
                    <Button color="primary">
                        <Link to="/">Search</Link>
                    </Button>
                    <Button color="primary">
                        <Link to="/saved">Saved</Link>
                    </Button>
                </header>
                <Route exact path="/" component={Search} />
                <Route path="/saved" component={Saved} />
            </div>
        </Router>
    )
}

export default Header;
