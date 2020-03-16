import React from "react";
import {
  Container,
  Paper,
  Grid,
  CardContent,
  Typography
} from "@material-ui/core";

const Reports = () => {
  // - Render
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper elevation={1}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Total Orders
              </Typography>
            </CardContent>
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper elevation={1}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Total Orders
              </Typography>
            </CardContent>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Reports;
