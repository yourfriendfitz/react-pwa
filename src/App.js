import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://orangevalleycaa.org/api/videos");
      const result = response.json();
      setData(await result);
    };
    fetchData();
  }, []);

  const useStyles = makeStyles({
    root: {
      flexGrow: 1
    }
  });

  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Videos
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      <div className={classes.root}>
        <Grid container alignContent="center" justify="center">
          {data.map(video => (
            <div key={video.id}>
              <h5 align="center" color="white">{video.name}</h5>
              <video height={200} width={300} controls src={video.video_url} />
            </div>
          ))}
        </Grid>
      </div>
    </Container>
  );
}
export default App;
