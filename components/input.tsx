'use client';

interface InputProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
  type?: string;
  name?: string;
  placeHolder?: string;
  className?: string;
  value?: string;
}
const Input: React.FC<InputProps> = ({
  onChange,
  className,
  value,
  style,
  placeHolder,
  type,
  name,
}) => {
  return (
    <>
      <input
        type={type}
        style={style}
        name={name}
        value={value}
        className={className}
        placeholder={placeHolder}
        onChange={onChange}></input>
    </>
  );
};

export default Input;
