import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	card: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
	cardMedia: {
		paddingTop: '56.25%', // 16:9
		cursor: 'pointer'
	},
	cardContent: {
		flexGrow: 1,
	},
	typographyContent: {
		color: 'gray',
	}
}));

export default function CardComponentUsers(props) {
	const classes = useStyles();

	return (
		<Grid item xs={12} sm={6} md={4}>
			<Card className={classes.card}>
				<CardMedia
					className={classes.cardMedia}
					image={props.user.img}
					title="Image title"
				/>
				<CardContent className={classes.cardContent}>
					<Typography gutterBottom variant="h5" component="h2">
						{props.user.name}
					</Typography>
				    <Typography component="div">
						<Typography className={classes.typographyContent}>{props.user.email}</Typography>
					</Typography>
				</CardContent>
			</Card>
		</Grid>
	);
}