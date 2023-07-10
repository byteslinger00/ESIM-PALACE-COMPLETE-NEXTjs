interface props {
  text: string;
  no_responsive?: boolean;
  disabled?: boolean;
  onCLick?: any;
}

export const OrangeButton: React.FC<props> = ({
  text,
  no_responsive,
  disabled,
  onCLick
}) => {
  return (
    <div className="w-full">
      {!no_responsive ? (
        <button
          className="py-6 px-9 max-md:w-full md:text-[18px] disabled:bg-light-solid text-[16px] bg-primary-solid hover:bg-[#FBE8BB] text-dark-solid rounded-lg text-center font-montserrat font-bold"
          disabled={disabled}
          onClick={onCLick}
        >
          <p className="md:leading-[13px] leading-[11px]">{text}</p>
        </button>
      ) : (
        <button
          className="py-6 px-9 md:text-[18px] disabled:bg-light-solid text-[16px] bg-primary-solid hover:bg-[#FBE8BB] text-dark-solid rounded-lg text-center font-montserrat font-bold"
          disabled={disabled}
          onClick={onCLick}
        >
          <p className="md:leading-[13px] leading-[11px]">{text}</p>
        </button>
      )}
    </div>
  );
};
