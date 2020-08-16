import React from "react";
// import styles from "../styles/Header.module.scss";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

type HeaderComponentProps = {
	title: string;
}

function HeaderComponent(props: HeaderComponentProps) {
	return (
		<AppBar position="static">
			<Toolbar>
				{/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
					<MenuIcon />
				</IconButton> */}
				<Typography variant="h6"
				//  className={classes.title}
				 >
					{props.title}
				</Typography>
				{/* <Button color="inherit">Login</Button> */}
			</Toolbar>
		</AppBar>
	);
}

export default HeaderComponent;