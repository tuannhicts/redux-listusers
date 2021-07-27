import { makeStyles, createStyles } from '@material-ui/core';

export const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    container: {
      marginTop: 30,
      width: 350,
      margin: '20 auto',
      height: 300,
    },
    content: {},
    avatar: {
      marginTop: 10,
      margin: '0 auto',
      width: 150,
      height: 150,
    },
    cardActions: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
  }),
);
