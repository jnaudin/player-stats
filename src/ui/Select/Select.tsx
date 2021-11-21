import { ComponentProps } from "react";
import "./Select.css";

interface SelectProps extends ComponentProps<"select"> {
  options: { label: string; value: string }[];
  label: string;
}

export const Select = ({ options, label, id, ...props }: SelectProps) => {
  return (
    <div className="select__container">
      <label htmlFor={id}>{label}:</label>
      <select {...props}>
        {options.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};
