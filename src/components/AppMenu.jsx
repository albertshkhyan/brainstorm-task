import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';

import IconDashboard from '@material-ui/icons/Dashboard';
import IconShoppingCart from '@material-ui/icons/ShoppingCart';
import IconPeople from '@material-ui/icons/People';
import IconBarChart from '@material-ui/icons/BarChart';
import IconLibraryBooks from '@material-ui/icons/LibraryBooks';

import AppMenuItem from './AppMenuItem';

const appMenuItems = [
	{
		name: 'Homepage',
		link: '/',
		Icon: IconDashboard,
	},
	{
		name: 'Users',
		link: '/users',
		Icon: IconShoppingCart,
	},
	{
		name: 'PremiumUsers',
		link: '/premium_users',
		Icon: IconPeople,
	},
	{
		name: 'Resaurants',
		link: '/resaurants',
		Icon: IconBarChart,
	},
	{
		name: 'Learn',

		Icon: IconLibraryBooks,
		items: [
			{
				name: 'Quick Start',
				link: '/quick_start',
			},
			{
				name: 'Recipes',
				link: '/recipes',
			},
		],
	},
];

const AppMenu = () => {
	const classes = useStyles();

	const foo = () => {
		// const ma = appMenuItems.map((item) => {
		// 	console.log('item.link', item.link);
		// 	return item;
		// });
		const fa = appMenuItems.filter((item) => item.link);
		console.log('fa', fa);
	};
	return (
		<List component="nav" className={classes.appMenu} disablePadding>
			{/* {foo()} */}
			{appMenuItems.map((item, index) => (
				<AppMenuItem {...item} key={index} />
			))}
		</List>
	);
};

const drawerWidth = 240;

const useStyles = makeStyles((theme) =>
	createStyles({
		appMenu: {
			width: '100%',
		},
		navList: {
			width: drawerWidth,
		},
		menuItem: {
			width: drawerWidth,
		},
		menuItemIcon: {
			color: '#97c05c',
		},
	})
);

export default AppMenu;
