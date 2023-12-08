import { Formik, Form } from "formik";
import formJson from "../data/custom-form.json";
import { MySelectInput, MyTextInput } from "../components";
import * as Yup from "yup";

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of formJson) {
	initialValues[input.name] = input.value;
	if (!input.validations) continue;

	let schema = Yup.string();

	for (const rule of input.validations) {
		if (rule.type === "required") {
			schema = schema.required("Este campo es requerido");
		}
		console.log(rule.type);
		if (rule.type === "minLength") {
			schema = schema.min(
				(rule as any).value || 1,
				`Al menos ${(rule as any).value} caracteres`
			);
		}
		if (rule.type === "email") {
			schema = schema.matches(
				/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
				"Formato de correo no válido"
			);
		}
	}

	requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });

export const DynamicForm = () => {
	return (
		<div>
			<h1>Dynamic Form</h1>

			<Formik
				initialValues={initialValues}
				onSubmit={(values) => console.log(values)}
				validationSchema={validationSchema}
			>
				{(formik) => (
					<Form>
						{formJson.map(({ label, type, name, placeholder, options }) => {
							if (type === "input" || type === "password" || type === "email") {
								return (
									<MyTextInput
										key={name}
										name={name}
										label={label}
										type={type as any}
										placeholder={placeholder}
									/>
								);
							} else if (type === "select") {
								return (
									<MySelectInput key={name} label={label} name={name}>
										<option value="">Selecciona una opción</option>
										{options?.map((opt) => (
											<option key={opt.id} value={opt.id}>
												{opt.title}
											</option>
										))}
									</MySelectInput>
								);
							}

							throw new Error(`El tipo ${type} no es soportado`);
						})}
						<button type="submit">Submit</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
