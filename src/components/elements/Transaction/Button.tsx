interface props {
  title: string;
  color: string;
  selected?: boolean;
  selectedColor?: string;
  onClick?: any;
}
export const Button: React.FC<props> = ({
  title,
  color,
  selected,
  selectedColor,
  onClick
}) => {
  return (
    <button
      className="md:w-[260px] w-[150px] border-[#F2B21B] border-[1px] rounded-lg"
      style={
        !selected
          ? { backgroundColor: color }
          : { backgroundColor: selectedColor }
      }
      onClick={onClick}
    >
      <p className="text-center leading-[64px] font-montserrat text-[18px]">
        {title}
      </p>
    </button>
  );
};
