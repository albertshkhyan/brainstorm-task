import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { useDispatch } from 'react-redux';
import { updateSG } from './../app/reducers/users';

const IOSSwitch = withStyles((theme) => ({
	root: {
		width: 40,
		height: 20,
		padding: 2,
		margin: theme.spacing(1),
	},
	switchBase: {
		padding: 1,
		'&$checked': {
			transform: 'translateX(16px)',
			color: theme.palette.common.white,
			'& + $track': {
				backgroundColor: 'red',
				opacity: 1,
				border: 'none',
			},
		},
		'&$focusVisible $thumb': {
			color: '#52d869',
			border: '6px solid #fff',
		},
	},
	thumb: {
		width: 20,
		height: 17,
	},
	track: {
		borderRadius: 26 / 2,
		border: `1px solid ${theme.palette.grey[400]}`,
		backgroundColor: 'red',
		opacity: 1,
		transition: theme.transitions.create(['background-color', 'border']),
	},
	checked: {
		padding: 1,
		'&$checked': {
			transform: 'translateX(16px)',
			color: theme.palette.common.white,
			'& + $track': {
				backgroundColor: '#52d869',
				opacity: 1,
				border: 'none',
			},
		},
	},
	focusVisible: {},
}))(({ classes, ...props }) => {
	return (
		<Switch
			focusVisibleClassName={classes.focusVisible}
			disableRipple
			classes={{
				root: classes.root,
				switchBase: classes.switchBase,
				thumb: classes.thumb,
				track: classes.track,
				checked: classes.checked,
			}}
			{...props}
		/>
	);
});

export default function SwitchButton({ row, disabled = false }) {
	const [checked, setChecked] = React.useState(disabled);
	const dispatch = useDispatch();

	const handleChange = (event) => {
		// event.stopPropagation(); //not work in handleRowClick add -> event.target === event.currentTarget
		event.preventDefault();
		dispatch(updateSG(row, event.target.checked, (checked) => setChecked(checked)));
	};
	return (
		<FormGroup>
			<FormControlLabel control={<IOSSwitch checked={checked} onChange={handleChange} name="checked" />} />
		</FormGroup>
	);
}
