import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const LOGIN_URL = "http://localhost:1598/api/login"

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function Login() {
  const classes = useStyles();
  const [form, setForm] = useState({id:null, password:null})
  const history = useHistory();

  const handleChange = (input:any) => (e:any) => {
    setForm({...form, [input] : e.target.value})
  };
  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log('userId:',form.id,'password:',form.password)
    axios.post(LOGIN_URL,form)
      .then(res => {
        console.log('res:', res)
        history.push('/dogs')
      })
      .catch(err => {
        console.log('err:', err);
      })
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form onSubmit = {handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="id"
            label="ID"
            name="id"
            onChange={handleChange('id')}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={handleChange('password')}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            type = "submit"
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  );
}
