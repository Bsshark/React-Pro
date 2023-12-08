import { Formik, Form } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";
import { MyCheckboxInput, MySelectInput, MyTextInput } from "../components";

export const FormikAbstraction = () => {
	return (
		<div>
			<h1>Formik Components Tutorial</h1>

			<Formik
				initialValues={{
					firstName: "",
					lastName: "",
					email: "",
					terms: false,
					jobType: "",
				}}
				onSubmit={(values) => {
					console.log(values);
				}}
				validationSchema={Yup.object({
					firstName: Yup.string()
						.max(15, "Debe de tener 15 caracteres o menos.")
						.required("Campo obligatorio"),
					lastName: Yup.string()
						.max(10, "Debe de tener 15 caracteres o menos.")
						.required("Campo obligatorio"),
					email: Yup.string()
						.email("Debe ser un email")
						.required("Campo obligatorio"),
					terms: Yup.boolean().isTrue(
						"Debe aceptar los términos y condiciones de uso."
					),
					jobType: Yup.string()
						.required('Este campo es obligatorio')
						.notOneOf(["designer"], "Esta opción no está permitida"),
				})}
			>
				{({ getFieldProps, touched, errors }) => (
					<Form noValidate>
						<MyTextInput name="firstName" label="First Name" />
						<MyTextInput
							name="lastName"
							label="Last Name"
							placeholder="Last Name"
						/>
						<MyTextInput
							name="email"
							label="Email"
							type="email"
							placeholder="email adress"
						/>

						<MySelectInput label="Job Type" name="jobType">
							<option value="">Tipo de trabajo</option>
							<option value="developer">Developer</option>
							<option value="it-senior">IT Senior</option>
							<option value="designer">Designer</option>
						</MySelectInput>

						<MyCheckboxInput name="terms" label="Términos y Condiciones" />
						<button type="submit">Submit</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
