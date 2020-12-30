import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

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
		backgroundColor: '#52d869',
		opacity: 1,
		transition: theme.transitions.create(['background-color', 'border']),
	},
	checked: {},
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

export default function SwitchButton({ disabled = false }) {
	const [checked, setChecked] = React.useState(disabled);

	const handleChange = (event) => {
		setChecked(event.target.checked);
	};

	return (
		<FormGroup>
			<FormControlLabel control={<IOSSwitch checked={checked} onChange={handleChange} name="checked" />} />
		</FormGroup>
	);
}
