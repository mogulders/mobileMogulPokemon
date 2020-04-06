import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import colors from "../constants/colors";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5"
  }
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center"
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white
      }
    }
  }
}))(MenuItem);

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },

  inputRoot: {
    color: "inherit",
    fontSize: "20px"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
}));

export default function CustomizedMenus(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();

  const handleTypeSelectedClick = event => {
    props.handleTypeFilter(event);
  };

  return (
    <div className="header">
      <i class="fas fa-search"></i>
      <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput
        }}
        inputProps={{ "aria-label": "search" }}
      />
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
        name="Filter"
      >
        Filter
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem
          style={{ backgroundColor: "#c3b091" }}
          onClick={handleTypeSelectedClick}
          name="city"
        >
          <ListItemIcon>
            <i
              class={
                props.partyTypeFilterO["city"]
                  ? "far fa-check-square"
                  : "far fa-square"
              }
            ></i>
          </ListItemIcon>
          <ListItemText primary="City" />
        </StyledMenuItem>
        <StyledMenuItem
          style={{ backgroundColor: "#c3b091" }}
          onChange={handleTypeSelectedClick}
          name="business"
        >
          <ListItemIcon>
            <i
              class={
                props.partyTypeFilterO["business"]
                  ? "far fa-check-square"
                  : "far fa-square"
              }
            ></i>
          </ListItemIcon>
          <ListItemText primary="Business" />
        </StyledMenuItem>
        <StyledMenuItem
          style={{ backgroundColor: "#c3b091" }}
          onChange={handleTypeSelectedClick}
          name="school"
        >
          <ListItemIcon>
            <i
              class={
                props.partyTypeFilterO["school"]
                  ? "far fa-check-square"
                  : "far fa-square"
              }
            ></i>
          </ListItemIcon>
          <ListItemText primary="School" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
