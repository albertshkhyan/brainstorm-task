import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import Drawer from "@material-ui/core/Drawer";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";

import AppMenu from "components/AppMenu";
import {
  Users,
  Recipes,
  HomePage,
  QuickStart,
  Restaurants,
  UsersPremium,
} from './containers';
import { Route, Switch } from "react-router-dom";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    background: theme.palette.primary.main,
    color: "#fff"
  },
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  }
}));
const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <AppMenu />
      </Drawer>
      <main className={classes.content}>
        <Container maxWidth="lg" className={classes.container}>
          <Typography>I'm the content</Typography>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/recipes" component={Recipes} />
            <Route exact path="/users" component={Users} />
            <Route exact path="/quick_start" component={QuickStart} />
            <Route exact path="/resaurants" component={Restaurants} />
            <Route exact path="/premium_users" component={UsersPremium} />
          </Switch>
        </Container>
      </main>
    </div>
  );
};

export default App;
