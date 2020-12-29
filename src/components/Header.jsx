import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import SearchBar from './SearchBar';
import BadgeAvatars from './Avatar';

import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
	},
	//
	appBar: {
		background: '#fff',
		width: `calc(100% - ${drawerWidth}px)`,
		[theme.breakpoints.up('sm')]: {
			width: `calc(100% - ${drawerWidth}px)`,
			marginLeft: drawerWidth,
		},
	},
	notificContent: {
		margin: '0 47px 0 12px',
	},
}));

const Header = () => {
	const classes = useStyles();
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	return (
		<AppBar position="fixed" className={classes.appBar}>
			<Toolbar>
				<Box width={1} display="flex" justifyContent="space-between">
					<Box display="flex" justifyContent="center" alignItems="center">
						<IconButton
							color="inherit"
							aria-label="open drawer"
							edge="start"
							onClick={handleDrawerToggle}
							className={classes.menuButton}
						>
							<MenuIcon />
						</IconButton>
						<Typography color="primary" variant="h6" noWrap>
							Responsive header
						</Typography>
					</Box>
					<Box display="flex" justifyContent="center" alignItems="center">
						<SearchBar />
						<Box component="span" className={classes.notificContent}>
							<Badge color="secondary" badgeContent={0} showZero>
								<NotificationsIcon style={{ color: '#000' }} />
							</Badge>
						</Box>
						<BadgeAvatars />
					</Box>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
