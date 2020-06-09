import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Paper, IconButton, InputBase, Grid } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import './App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    marginTop: '20px',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  logo: {
    textAlign: 'center'
  },
  searchResult: {
    padding: '30px 20px',
    display: 'flex',
    marginTop: '20px',
  },
  titleSearchResult: {
    margin: '0px',
    marginBottom: '30px',
    borderBottom: '1px solid #8e8e8e',
    width: '100%',
  },
  result: {
    borderRight: '1px solid #8e8e8e',
    borderRadius: '0px',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <h1 className={classes.logo}> Tra Cụm Từ . Com </h1>
      <Paper component="form" className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Gõ cụm từ bạn muốn, ví dụ: as far as, the crazy part,..."
          inputProps={{ 'aria-label': 'search google maps' }}
        />
        <IconButton type="submit" className={classes.iconButton} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>

      <Paper className={classes.searchResult}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h3 className={classes.titleSearchResult}>KẾT QUẢ TÌM KIẾM</h3>
          </Grid>
          <Grid item xs={3}>
            <Paper elevation={0} className={classes.result}>3</Paper>
          </Grid>
          <Grid item xs={9}>
            <Paper elevation={0}>9</Paper>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default App;
