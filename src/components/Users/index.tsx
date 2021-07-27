import React, { useState, useEffect } from 'react';
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
import { receiveApiData } from '../../redux/actions/users-action';
import { Information, InformationActionTypes } from '../../redux/type-redux';
import usersReducers from '../../redux/reducers/users-reducers';
import { useSelector, useDispatch } from 'react-redux';
interface PropsFromState {
  data: Information[];
}

interface propsFromDispatch {
  receiveApiData: () => any;
}

type AllProps = PropsFromState & propsFromDispatch;

const Users: React.FC = () => {
  const classes = useStyles();
  const selector = useSelector((state) => state);
  console.log(selector);

  return (
    <div>
      <h2>Users</h2>
    </div>
  );
};

export default Users;
