import { useForm } from "../hooks/useForm";
import "../styles/styles.css";
import { ChangeEvent, FormEvent, FormEventHandler, useState } from "react";

export const RegisterPage = () => {
	const {
		name,
		email,
		password1,
		password2,
		formData,
		onChange,
		onSubmit,
		resetForm,
		isValidEmail,
	} = useForm({
		name: "",
		email: "",
		password1: "",
		password2: "",
	});

	return (
		<div>
			<h1>Register Page</h1>
			<form noValidate onSubmit={(e) => onSubmit(e)}>
				<input
					type="text"
					placeholder={name}
					value={name}
					onChange={(e) => onChange(e)}
					name="name"
					className={`${name.trim().length <= 0 && "has-error"}`}
				/>
				{name.trim().length <= 0 && <span>Este campo es necesario</span>}
				<input
					type="email"
					placeholder={email}
					value={email}
					onChange={(e) => onChange(e)}
					name="email"
					className={`${!isValidEmail(email) && "has-error"}`}
				/>
				{!isValidEmail(email) && <span>Email no válido</span>}
				<input
					type="password"
					placeholder={password1}
					value={password1}
					onChange={(e) => onChange(e)}
					name="password1"
				/>
				{password1.trim().length <= 0 && <span>Este campo es necesario</span>}
				{password1.trim().length < 6 && password1.trim().length > 0 && (
					<span>La contraseña tiene que tener al menos 6 caracteres</span>
				)}
				<input
					type="password"
					placeholder={password2}
					value={password2}
					onChange={(e) => onChange(e)}
					name="password2"
				/>
				{password2.trim().length <= 0 && <span>Este campo es necesario</span>}
				{password2.trim().length > 0 &&
					password1 !== password2 &&
					password1.trim().length > 0 && (
						<span>Las contraseñas no son iguales</span>
					)}
				<button type="submit">Create</button>
				<button type="button" onClick={resetForm}>
					Reset Form
				</button>
			</form>
		</div>
	);
};
