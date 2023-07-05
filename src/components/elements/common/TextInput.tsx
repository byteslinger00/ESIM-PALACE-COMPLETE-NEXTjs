'use client'
interface props {
  type: string;
  header: string;
  placeholder: string;
  disabled?: boolean;
  value?: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
}

export const TextInput: React.FC<props> = ({
  type,
  header,
  placeholder,
  disabled,
  value,
  setValue,
}) => {
  return (
    <div className="flex flex-col gap-3 text-left font-montserrat">
      <p className="lg:text-[20px] text-[16px] font-semibold">{header}</p>
      <input
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        className="lg:text-[18px] text-[14px] bg-[#EBF6FF] px-6 py-4 rounded-xl  outline-none"
        value={value}
        onChange={(e)=>{if(setValue) setValue(e.target.value)}}
      />
    </div>
  );
};
