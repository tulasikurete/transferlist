import { Box, Grid, Paper, Checkbox } from "@mui/material";
import * as React from "react";

const HOME1 = "HOME";
const PROFILE1 = "PROFILE";
const CONTACTS1 = "CONTACTS";

export default class Tabs extends React.Component {
  constructor() {
    super();
    this.state = {
      active: HOME1,
    };
  }

  render() {
    return (
      <Box>
        <Grid container>
          <Grid item>
            <button onClick={() => this.setState({ active: HOME1 })}>
              home
            </button>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item>
            <button onClick={() => this.setState({ active: PROFILE1 })}>
              Profile
            </button>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item>
            <button onClick={() => this.setState({ active: CONTACTS1 })}>
              contacts
            </button>
          </Grid>
        </Grid>

        {this.state.active === HOME1 && (
          <Paper>
            HOME Content{" "}
            <p>
              FlowParserMixin.parseExprAtom
              (C:\Users\navee\OneDrive\Desktop\trasfer\node_modules\@babel\parser\lib\index.js)
            </p>{" "}
          </Paper>
        )}
        {this.state.active === PROFILE1 && <Paper>PROFILE Content</Paper>}
        {this.state.active === CONTACTS1 && <Paper>Contacts Content</Paper>}
      </Box>
    );
  }
}
