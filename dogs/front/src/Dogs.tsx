import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import itemData from './itemData';

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

export default function Dogs() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageList rowHeight={180} cols={4} className={classes.imageList}>
        <ImageListItem key="Subheader" cols={4} style={{ height: 'auto' }}>
          <ListSubheader component="div">ワンちゃん一覧</ListSubheader>
        </ImageListItem>
        {itemData.map((item) => (
          <ImageListItem key={item.img} className="dog-images">
            {/* FIXME:バックエンド通信 */}
            <img src={item.img} alt={item.name} onClick={()=>{alert(`${item.name}の詳細画面を表示する`)}}/>
            <ImageListItemBar
              title={item.name}
              subtitle={<span>{item.area}</span>}
              style={{height:'auto'}}
              actionIcon={
                <IconButton aria-label={`info about ${item.name}`} className={classes.icon}>
                  <InfoIcon onClick={()=>{alert(`${item.name}の情報を表示する`)}} />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
