import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";

export const FormikComponents = () => {
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
						.required()
						.notOneOf(["designer"], "Esta opción no está permitida"),
				})}
			>
				{({ getFieldProps, touched, errors }) => (
					<Form noValidate>
						<label htmlFor="firstName">First Name</label>
						<Field name="firstName" type="text" placeholder="Nombre" />
						<ErrorMessage name="firstName" component="span" />

						<label htmlFor="lastName">Last Name</label>
						<Field name="lastName" type="text" />
						<ErrorMessage name="lastName" component="span" />

						<label htmlFor="email">Email Address</label>
						<Field name="email" type="text" />
						<ErrorMessage name="email" component="span" />

						<label htmlFor="jobType">Job Type</label>
						<Field name="jobType" as="select">
							<option value="">Tipo de trabajo</option>
							<option value="developer">Developer</option>
							<option value="it-senior">IT Senior</option>
							<option value="designer">Designer</option>
						</Field>
						<ErrorMessage name="jobType" component="span" />

						<label>
							<Field name="terms" type="checkbox" />
							Términos y condiciones
						</label>
						<ErrorMessage name="terms" component="span" />

						<button type="submit">Submit</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
