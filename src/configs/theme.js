import { createMuiTheme } from "@material-ui/core/styles";

import colors from "./colors";

const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: colors.primary
    }
  }
  // overrides: {
  //   MuiButton: {
  //     root: {
  //       color: "white",
  //       "&:hover": {
  //         backgroundColor: "purple"
  //       }
  //     }
  //   }
  // }
});

export default theme;
