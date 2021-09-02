import React, { useState } from 'react';
import CardComponentUsers from './cardComponentUsers';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	cardGrid: {
		margin: "50px auto" 
	}
}));
function Users() {
    const classes = useStyles();
    const [usersArr, setUsersArr] = useState([{ name: "Loanding....", desc: "Loanding...." }]);
    var cardsCount = [];

	if(usersArr.length == 1) {
		axios({
			method: 'GET',
			url: 'https://reqres.in/api/users',
		})
		.then(function (response) { console.info(response.data.data);
			setUsersArr(response.data.data);
		});
	}

    for(var i=0;i< (usersArr.length || 1);i++)
        cardsCount.push(i);

    return (
        <Container className={classes.cardGrid} maxWidth="md">
          	<Grid container spacing={4}>
            	{cardsCount.map((i) => (
              		<CardComponentUsers 
                        user={{
                            email: usersArr[i].email,
                            name: `${usersArr[i].first_name} ${usersArr[i].last_name}`,
							img: usersArr[i].avatar
                        }}
                        key={i} 
                    />
            	))}
        	</Grid>
    	</Container>
    );
}

export default Users;