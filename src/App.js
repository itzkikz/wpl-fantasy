import React, { useEffect, useState } from "react";
import Tabletop from "tabletop";
import PropTypes from "prop-types";
import { withStyles, makeStyles, useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import CircularProgress from "@material-ui/core/CircularProgress";
import Chip from "@material-ui/core/Chip";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import SwipeableViews from "react-swipeable-views";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = useState(false);
  const classes = useRowStyles();
  const theme = useTheme();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="medium"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" onClick={() => setOpen(!open)}>
          <b>{row.Name}</b>
          <br></br>
          <small> {row.Mobile}</small>
          <br></br>
          <small>
            <Chip
              variant="outlined"
              size="small"
              label={row.Team}
              color="secondary"
            />
          </small>
        </TableCell>
        <TableCell align="center">
          <strong>
            <h3>{row.Points}</h3>
          </strong>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell
          style={{ padding: 0, backgroundColor: "#eeeeee" }}
          colSpan={6}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box>
              <AppBar position="static" color="default">
                <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="secondary"
                  textColor="secondary"
                  variant="fullWidth"
                  aria-label="full width tabs example"
                >
                  <Tab label="Game Week" {...a11yProps(0)} />
                  <Tab label="Players" {...a11yProps(1)} />
                </Tabs>
              </AppBar>
              <SwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={value}
                onChangeIndex={handleChangeIndex}
              >
                <TabPanel value={value} index={0} dir={theme.direction}>
                  <Grid
                    container
                    spacing={1}
                    className="scrolling-wrapper-flexbox"
                  >
                    <Grid item xs={3} className="card">
                      <Card
                        className={classes.root}
                        style={{ backgroundColor: "#ff004f" }}
                      >
                        <CardContent style={{ color: "white" }}>
                          <Typography
                            align="center"
                            variant="h5"
                            component="h2"
                          >
                            {row.Week1}
                          </Typography>
                          <Typography
                            className={classes.title}
                            align="center"
                            gutterBottom
                          >
                            GW 1
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={3} className="card">
                      <Card
                        className={classes.root}
                        style={{ backgroundColor: "#ff004f" }}
                      >
                        <CardContent style={{ color: "white" }}>
                          <Typography
                            align="center"
                            variant="h5"
                            component="h2"
                          >
                            {row.Week2}
                          </Typography>
                          <Typography
                            className={classes.title}
                            align="center"
                            gutterBottom
                          >
                            GW 2
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={3} className="card">
                      <Card
                        className={classes.root}
                        style={{ backgroundColor: "#ff004f" }}
                      >
                        <CardContent style={{ color: "white" }}>
                          <Typography
                            align="center"
                            variant="h5"
                            component="h2"
                          >
                            {row.Week3}
                          </Typography>
                          <Typography
                            className={classes.title}
                            align="center"
                            gutterBottom
                          >
                            GW 3
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={3} className="card">
                      <Card
                        className={classes.root}
                        style={{ backgroundColor: "#ff004f" }}
                      >
                        <CardContent style={{ color: "white" }}>
                          <Typography
                            align="center"
                            variant="h5"
                            component="h2"
                          >
                            {row.Week4}
                          </Typography>
                          <Typography
                            className={classes.title}
                            align="center"
                            gutterBottom
                          >
                            GW 4
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={3} className="card">
                      <Card
                        className={classes.root}
                        style={{ backgroundColor: "#ff004f" }}
                      >
                        <CardContent style={{ color: "white" }}>
                          <Typography
                            align="center"
                            variant="h5"
                            component="h2"
                          >
                            {row.Week5}
                          </Typography>
                          <Typography
                            className={classes.title}
                            align="center"
                            gutterBottom
                          >
                            GW 5
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={3} className="card">
                      <Card
                        className={classes.root}
                        style={{ backgroundColor: "#ff004f" }}
                      >
                        <CardContent style={{ color: "white" }}>
                          <Typography
                            align="center"
                            variant="h5"
                            component="h2"
                          >
                            {row.Week6}
                          </Typography>
                          <Typography
                            className={classes.title}
                            align="center"
                            gutterBottom
                          >
                            GW 6
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={3} className="card">
                      <Card
                        className={classes.root}
                        style={{ backgroundColor: "#ff004f" }}
                      >
                        <CardContent style={{ color: "white" }}>
                          <Typography
                            align="center"
                            variant="h5"
                            component="h2"
                          >
                            {row.Week7}
                          </Typography>
                          <Typography
                            className={classes.title}
                            align="center"
                            gutterBottom
                          >
                            GW 7
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={3} className="card">
                      <Card
                        className={classes.root}
                        style={{ backgroundColor: "#ff004f" }}
                      >
                        <CardContent style={{ color: "white" }}>
                          <Typography
                            align="center"
                            variant="h5"
                            component="h2"
                          >
                            {row.Week8}
                          </Typography>
                          <Typography
                            className={classes.title}
                            align="center"
                            gutterBottom
                          >
                            GW 8
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={3} className="card">
                      <Card
                        className={classes.root}
                        style={{ backgroundColor: "#ff004f" }}
                      >
                        <CardContent style={{ color: "white" }}>
                          <Typography
                            align="center"
                            variant="h5"
                            component="h2"
                          >
                            {row.Week9}
                          </Typography>
                          <Typography
                            className={classes.title}
                            align="center"
                            gutterBottom
                          >
                            GW 9
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={3} className="card">
                      <Card
                        className={classes.root}
                        style={{ backgroundColor: "#ff004f" }}
                      >
                        <CardContent style={{ color: "white" }}>
                          <Typography
                            align="center"
                            variant="h5"
                            component="h2"
                          >
                            {row.Week10}
                          </Typography>
                          <Typography
                            className={classes.title}
                            align="center"
                            gutterBottom
                          >
                            GW 10
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={3} className="card">
                      <Card
                        className={classes.root}
                        style={{ backgroundColor: "#ff004f" }}
                      >
                        <CardContent style={{ color: "white" }}>
                          <Typography
                            align="center"
                            variant="h5"
                            component="h2"
                          >
                            {row.Week11}
                          </Typography>
                          <Typography
                            className={classes.title}
                            align="center"
                            gutterBottom
                          >
                            GW 11
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={3} className="card">
                      <Card
                        className={classes.root}
                        style={{ backgroundColor: "#ff004f" }}
                      >
                        <CardContent style={{ color: "white" }}>
                          <Typography
                            align="center"
                            variant="h5"
                            component="h2"
                          >
                            {row.Week12}
                          </Typography>
                          <Typography
                            className={classes.title}
                            align="center"
                            gutterBottom
                          >
                            GW 12
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={3} className="card">
                      <Card
                        className={classes.root}
                        style={{ backgroundColor: "#ff004f" }}
                      >
                        <CardContent style={{ color: "white" }}>
                          <Typography
                            align="center"
                            variant="h5"
                            component="h2"
                          >
                            {row.Week13}
                          </Typography>
                          <Typography
                            className={classes.title}
                            align="center"
                            gutterBottom
                          >
                            GW 13
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={3} className="card">
                      <Card
                        className={classes.root}
                        style={{ backgroundColor: "#ff004f" }}
                      >
                        <CardContent style={{ color: "white" }}>
                          <Typography
                            align="center"
                            variant="h5"
                            component="h2"
                          >
                            {row.Week14}
                          </Typography>
                          <Typography
                            className={classes.title}
                            align="center"
                            gutterBottom
                          >
                            GW 14
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                  <br></br>
                  <i>
                    <small>GW - Game Week</small>
                  </i>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                  <Grid
                    container
                    spacing={1}
                    className="scrolling-wrapper-flexbox"
                  >
                    <Grid item xs={6} className="card">
                      <Card
                        className={classes.root}
                        style={{ backgroundColor: "#ff004f" }}
                      >
                        <CardContent style={{ color: "white" }}>
                          <Typography
                            align="center"
                            variant="h5"
                            component="h2"
                          >
                            {row.FERPOINTS}
                          </Typography>
                          <Typography
                            className={classes.title}
                            align="center"
                            gutterBottom
                          >
                            {row.FER}
                            <br></br>
                            <small>Fergie's Fledglings</small>
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={6} className="card">
                      <Card
                        className={classes.root}
                        style={{ backgroundColor: "#ff004f" }}
                      >
                        <CardContent style={{ color: "white" }}>
                          <Typography
                            align="center"
                            variant="h5"
                            component="h2"
                          >
                            {row.GALPOINTS}
                          </Typography>
                          <Typography
                            className={classes.title}
                            align="center"
                            gutterBottom
                          >
                            {row.GAL}
                            <br></br>
                            <small>Galacticos</small>
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={6} className="card">
                      <Card
                        className={classes.root}
                        style={{ backgroundColor: "#ff004f" }}
                      >
                        <CardContent style={{ color: "white" }}>
                          <Typography
                            align="center"
                            variant="h5"
                            component="h2"
                          >
                            {row.LEGPOINTS}
                          </Typography>
                          <Typography
                            className={classes.title}
                            align="center"
                            gutterBottom
                          >
                            {row.LEG}
                            <br></br>
                            <small>Legends Of 90's</small>
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={6} className="card">
                      <Card
                        className={classes.root}
                        style={{ backgroundColor: "#ff004f" }}
                      >
                        <CardContent style={{ color: "white" }}>
                          <Typography
                            align="center"
                            variant="h5"
                            component="h2"
                          >
                            {row.MEIPOINTS}
                          </Typography>
                          <Typography
                            className={classes.title}
                            align="center"
                            gutterBottom
                          >
                            {row.MEI}
                            <br></br>
                            <small>Meisel's Wunderteam</small>
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={6} className="card">
                      <Card
                        className={classes.root}
                        style={{ backgroundColor: "#ff004f" }}
                      >
                        <CardContent style={{ color: "white" }}>
                          <Typography
                            align="center"
                            variant="h5"
                            component="h2"
                          >
                            {row.MIGPOINTS}
                          </Typography>
                          <Typography
                            className={classes.title}
                            align="center"
                            gutterBottom
                          >
                            {row.MIG}
                            <br></br>
                            <small>The Mighty Magyers</small>
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={6} className="card">
                      <Card
                        className={classes.root}
                        style={{ backgroundColor: "#ff004f" }}
                      >
                        <CardContent style={{ color: "white" }}>
                          <Typography
                            align="center"
                            variant="h5"
                            component="h2"
                          >
                            {row.DIVPOINTS}
                          </Typography>
                          <Typography
                            className={classes.title}
                            align="center"
                            gutterBottom
                          >
                            {row.DIV}
                            <br></br>
                            <small>The Divine Ponytails</small>
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={6} className="card">
                      <Card
                        className={classes.root}
                        style={{ backgroundColor: "#ff004f" }}
                      >
                        <CardContent style={{ color: "white" }}>
                          <Typography
                            align="center"
                            variant="h5"
                            component="h2"
                          >
                            {row.DONPOINTS}
                          </Typography>
                          <Typography
                            className={classes.title}
                            align="center"
                            gutterBottom
                          >
                            {row.DON}
                            <br></br>
                            <small>The Don's Magicians</small>
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={6} className="card">
                      <Card
                        className={classes.root}
                        style={{ backgroundColor: "#ff004f" }}
                      >
                        <CardContent style={{ color: "white" }}>
                          <Typography
                            align="center"
                            variant="h5"
                            component="h2"
                          >
                            {row.WHIPOINTS}
                          </Typography>
                          <Typography
                            className={classes.title}
                            align="center"
                            gutterBottom
                          >
                            {row.WHI}
                            <br></br>
                            <small>The White Walkers</small>
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </TabPanel>
              </SwipeableViews>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function CollapsibleTable() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Tabletop.init({
      key: "1K3QtYL2Su4c8SQo9IhJp8nXYwD3qBkJUySfvd5be-f8",
      callback: (googleData) => {
        setLoading(false);
        setData(googleData);
      },
      simpleSheet: true,
    });
  }, []);

  return (
    <div className="mobileView">
      <AppBar position="sticky">
        <img style={{ width: "100%" }} src={require("./banner.jpg")} />
      </AppBar>

      {loading && (
        <div style={{ position: "absolute", top: "50%", left: "45%" }}>
          <CircularProgress />
        </div>
      )}
      {!loading && (
        <TableContainer>
          <Table aria-label="sticky table" size="small">
            <TableHead>
              <TableRow>
                <StyledTableCell />
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell align="center">Points</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, index) => (
                <Row key={index} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
}
