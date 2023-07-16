interface props {
  title: string;
  text: string | string[];
}

export const Properties: React.FC<props> = ({ title, text }) => {
  return (
    <div className="xl:text-[20px] text-[18px]">
      {typeof text === "string" || typeof text === 'number' ? (
        <div>
          <span className="font-montserratbold">{title}</span>: {text}
        </div>
      ) : (
        <div>
            <span className="font-montserratbold">{title}</span>: 
            {text.map(item => item+ '  ')}
        </div>
      )}
    </div>
  );
};
