import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { startLogout } from "../../actions/auth";

import { Offline, Online } from "react-detect-offline";
import { PatchCheckFill, PatchExclamationFill } from "react-bootstrap-icons";

export const Navbar = () => {
	const dispatch = useDispatch();
	const { name } = useSelector((state) => state.auth);

	const handleLogout = () => {
		dispatch(startLogout());
	};

	return (
		<div className="navbar navbar-dark bg-dark mb-4">
			<span className="navbar-brand">{name}</span>
			<Online>
				<span style={{ paddingRight: "2px" }}>
					<PatchCheckFill color="green" />
				</span>
				<span className="text-success">Online</span>
			</Online>
			<Offline>
				<span style={{ paddingRight: "2px" }}>
					<PatchExclamationFill color="red" />
				</span>
				<span className="text-danger">
					Offline - Peticiones serán guardadas
				</span>
			</Offline>
			<button className="btn btn-outline-danger" onClick={handleLogout}>
				<i className="fas fa-sign-out-alt"></i>
				<span> Salir</span>
			</button>
		</div>
	);
};
