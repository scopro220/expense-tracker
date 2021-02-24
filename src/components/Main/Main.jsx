import React from "react";
import {
  Card,
  CardHeader,
  Typography,
  Grid,
  Divider,
  CardContent,
} from "@material-ui/core";

import useStyles from "./styles";
import Form from "./Form/Form";
import List from "./List/List";

const Main = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader title="Expense Tracker" subheader="Powered by Speechly" />
      <CardContent>
        <Typography variant="h5" align="center">
          Total Balance $100
        </Typography>
        <Typography
          variant="subtitle1"
          style={{ lineHeight: "1.5em", marginTop: "20px" }}
        >
          InfoCard.............
        </Typography>
        <Divider />
        <Form />
      </CardContent>
      <CardContent className={classes.cardContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Main;
