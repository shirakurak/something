import React, {useState, useEffect} from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import axios from 'axios';

import './Dogs.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    imageList: {
      'min-width': '720px',
      'max-width': '1000px',
      height: '80vh',
      padding:'5px',
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }),
);

const DOGS_URL = "http://localhost:1598/api/dogs"

export default function Dogs() {
  const classes = useStyles();
  const [dogs,setDogs] = useState([{id:"",name:"",area:"",img:""}]);
  // 初回レンダリング時のみに実行
  useEffect(() => {
    axios.get(DOGS_URL)
      .then(res => {
        console.log('res:', res)
        setDogs(res.data);
      })
      .catch(err => {
        console.log('err:', err);
      })
  },[]);

  return (
    <div className={classes.root}>
      <ImageList rowHeight={180} cols={4} className={classes.imageList}>
        <ImageListItem key="Subheader" cols={4} style={{ height: 'auto' }}>
          <ListSubheader component="div">ワンちゃん一覧</ListSubheader>
        </ImageListItem>
        {dogs.map((dog) => (
          <ImageListItem key={dog.img} className="dog-images">
            <img src={dog.img} alt={dog.name} onClick={()=>{alert(`${dog.name}の詳細画面を表示する`)}}/>
            <ImageListItemBar
              title={dog.name}
              subtitle={<span>{dog.area}</span>}
              style={{height:'auto'}}
              actionIcon={
                <IconButton aria-label={`info about ${dog.name}`} className={classes.icon}>
                  <InfoIcon onClick={()=>{alert(`${dog.name}の情報を表示する`)}} />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
