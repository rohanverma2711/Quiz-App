import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

import {Redirect} from "react-router-dom";

const Home = (props) => {
	const useStyles = makeStyles((theme) => ({
		root: {
			flexGrow: 1,
		},
		menuButton: {
			marginRight: theme.spacing(2),
		},
		title: {
			flexGrow: 1,
		},
	}));

	const classes = useStyles();
	const [auth, setAuth] = React.useState(props.authorized);
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);

	const handleChange = (event) => {
		setAuth(event.target.checked);
	};

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleProfile = () => {};

	if (!props.authorized) {
		return <Redirect to="/login-register" />;
	}

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<div>
						<IconButton
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorEl}
							anchorOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							open={open}
							onClose={handleClose}
						>
							<MenuItem onClick={handleProfile}>My Profile</MenuItem>
							<MenuItem onClick={handleClose}>
								{auth ? "Logout" : "Login"}
							</MenuItem>
						</Menu>
					</div>
					<Typography variant="h6" className={classes.title}>
						HOME
					</Typography>
					<IconButton>
						<FormGroup>
							<FormControlLabel
								control={
									<Switch
										checked={auth}
										onChange={handleChange}
										aria-label="login switch"
									/>
								}
								label={auth ? "Logout" : "Login"}
							/>
						</FormGroup>
					</IconButton>
				</Toolbar>
			</AppBar>
			<div>Welcome to Our HomePage!!</div>
		</div>
	);
};

export default Home;
