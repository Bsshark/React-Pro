import { ErrorMessage, useField } from "formik";

interface formProps {
	name: string;
	label?: string;
	placeholder?: string;
	[x: string]: any;
}
export const MySelectInput = ({ label, ...props }: formProps) => {
	const [field, meta] = useField(props);

	return (
		<>
			<label htmlFor={props.id || props.name}>{label}</label>
			<select {...field} {...props} />
			<ErrorMessage
				name={props.name}
				component="span" /* className="custom-span-error-span" */
			/>
			{/* {
				//Errores
				meta.touched && meta.error && <span>{meta.error}</span>
			} */}
		</>
	);
};
