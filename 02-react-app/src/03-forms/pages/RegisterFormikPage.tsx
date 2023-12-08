import { Form, Formik } from "formik";
import "../styles/styles.css";
import * as Yup from "yup";
import { MyTextInput } from "../components";

const requiredString = "Este campo es obligatorio.";

export const RegisterFormikPage = () => {
	return (
		<div>
			<h1>Register Page</h1>

			<Formik
				initialValues={{
					name: "",
					email: "",
					password1: "",
					password2: "",
				}}
				onSubmit={(values) => console.log(values)}
				validationSchema={Yup.object({
					name: Yup.string()
						.trim()
						.required(requiredString)
						.max(15, "Máximo 15 caracteres")
						.min(2, "Mínimo 2 caracteres"),
					email: Yup.string()
						.trim()
						.email("Formato de correo inválido")
						.required(requiredString),
					password1: Yup.string()
						.trim()
						.required(requiredString)
						.min(6, "Mínimo 6 caracteres"),
					password2: Yup.string()
						.trim()
						.required(requiredString)
						.oneOf([Yup.ref("password1")], "Las contraseñas deben coincidir."),
				})}
			>
				{({ handleReset }) => (
					<Form noValidate>
						<MyTextInput type="text" name="name" label="Nombre" />
						<MyTextInput type="text" name="email" label="Correo" />
						<MyTextInput type="password" name="password1" label="Contraseña" />
						<MyTextInput
							type="password"
							name="password2"
							label="Repita contraseña"
						/>
						<button type="submit">Crear cuenta</button>
						<button onClick={handleReset}>Reset</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
