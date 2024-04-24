import camelCaseToWords from "../../util/text/camelCaseToWords";

interface Props {
  field: string,
  value: string,
  type: string,
  required?: boolean,
  updateFormData: (field: string, value: string) => void,
}

const FormInput = ({field, value, type, updateFormData, required = false}: Props) => {
  return ( 
    <div className="form-group">
      <label htmlFor={field} className="inria-sans-bold">{camelCaseToWords(field)} {required ? <span className="asterisk">*</span> : ""}</label>
      {type === "textarea" ? 
        <textarea
          id={field}
          value={value}
          onChange={(e) => updateFormData(field, e.target.value)}
          required={required}
        />
        :
        <input
          id={field}
          type={type}
          value={value}
          onChange={(e) => updateFormData(field, e.target.value)}
          required={required}
        />
      }
    </div>
   );
}
 
export default FormInput;