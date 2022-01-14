import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CodeIcon from '@material-ui/icons/Code';
import VisibilityIcon from '@material-ui/icons/Visibility';

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
	},
});

export default function Cards(props) {
	const classes = useStyles();
	const projects = props.projects;
	return (
		<div className='work'>
			{projects
				.slice(0)
				.reverse()
				.map((project, i) => {
					return (
						<div className='project' key={i}>
							<Card className={classes.root}>
								<CardActionArea
									href={project.Live}
									target='_blank'
									rel='noreferrer'>
									<CardMedia
										component='img'
										alt='Project Image'
										height='300'
										image={project.Image}
										title='Project Image'
									/>
									<CardContent>
										<Typography gutterBottom variant='h5' component='h2'>
											{project.Title}
										</Typography>
										<Typography
											variant='body2'
											color='textSecondary'
											component='p'>
											{project.Description}
										</Typography>
										<Typography
											variant='overline'
											color='textPrimary'
											component='p'>
											{project.Tech}
										</Typography>
									</CardContent>
								</CardActionArea>
								<CardActions>
									<Button
										href={project.Code}
										target='_blank'
										rel='noreferrer'
										variant='outlined'
										size='small'
										color='primary'
										startIcon={<CodeIcon />}>
										Code
									</Button>
									<Button
										href={project.Live}
										target='_blank'
										rel='noreferrer'
										variant='outlined'
										size='small'
										color='primary'
										startIcon={<VisibilityIcon />}>
										Live Link
									</Button>
								</CardActions>
							</Card>
						</div>
					);
				})}
		</div>
	);
}
