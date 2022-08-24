import Styles from "./select.module.scss";

const Select = ({
  placeholder,
  required,
  options,
  onChange,
  id,
  name,
  value,
}) => {
  return (
    <select
      id={id}
      name={name}
      className={Styles.select}
      onChange={onChange}
      required={required}
      value={value}
    >
      <option value="">{placeholder}</option>
      {options?.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
