interface props {
    index: number;
    selected_index: number;
    title: string;
    set_index: any;
}
export const TabItem: React.FC<props> = ({ index, selected_index, title, set_index }) => {
    return (
        <div
            style={index === selected_index ? { color: "#F2B21B", borderBottomWidth: 2, borderColor: '#F2B21B' } : {}}
            className="py-3 hover:text-[#F2B21B] cursor-pointer" 
            onClick={() => set_index(index)} 
            >
            {title}
        </div>
    )
}