interface props {
    region: string;
    selected_region: string;
    title: string;
    set_region: React.Dispatch<React.SetStateAction<string>>;
}
export const TabItem: React.FC<props> = ({ region, selected_region, title, set_region }) => {
    return (
        <div
            style={region === selected_region ? { color: "#F2B21B", borderBottomWidth: 2, borderColor: '#F2B21B' } : {}}
            className="py-3 hover:text-[#F2B21B] cursor-pointer" 
            onClick={() => set_region(region)} 
            >
            {title}
        </div>
    )
}