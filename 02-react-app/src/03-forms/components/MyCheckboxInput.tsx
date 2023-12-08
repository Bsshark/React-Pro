import { ErrorMessage, useField } from "formik";

interface formProps {
	name: string;
	label: string;
	placeholder?: string;
	[x: string]: any;
}

export const MyCheckboxInput = ({ label, ...props }: formProps) => {
	const [field, meta] = useField({ ...props, type: "checkbox" });

	return (
		<>
			<label>
				<input type="checkbox" {...field} {...props} />
				{label}
			</label>
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
