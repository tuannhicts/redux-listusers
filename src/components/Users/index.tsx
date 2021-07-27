import React, { useState, useEffect } from 'react';
import { getListUsers } from '../../API/index';
import { useStyles } from './styles';
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardHeader,
  CardActions,
  Avatar,
  IconButton,
  Container,
  Grid,
} from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
const index = () => {
  const [users, setUsers] = useState<any>([]);
  const classes = useStyles();
  useEffect(() => {
    getListUsers().then((res) => {
      setUsers(res.data.data);
    });
  }, []);
  console.log('users:', users);

  return (
    <Container className={classes.root}>
      <Grid container spacing={4}>
        {users.map((person: any) => (
          <Grid item>
            <Card key={person.id} className={classes.container}>
              <div className={classes.content}>
                <Avatar src={person.avatar} className={classes.avatar} />
                <CardContent>
                  <Typography>{person.first_name}</Typography>
                  <Typography>{person.email}</Typography>
                </CardContent>
                <CardActions>
                  <IconButton>
                    <InfoIcon />
                  </IconButton>
                </CardActions>
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default index;
