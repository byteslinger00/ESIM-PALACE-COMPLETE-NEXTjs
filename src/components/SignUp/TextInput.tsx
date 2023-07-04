interface props {
  type: string;
  value: any;
  setValue: any;
  placeholder: string;
}

export const TextInput: React.FC<props> = ({ type, value, setValue, placeholder }) => {
  return (
    <input
      type={type}
      className="bg-[#EBF6FF] rounded-[14px] md:text-[18px] text-[14px] px-5 py-4 text-[#081B27] placeholder:text-[#081B2782] outline-none"
      placeholder={placeholder}
      value={value}
      onChange={(e)=>{setValue(e.target.value)}}
    />
  );
};
