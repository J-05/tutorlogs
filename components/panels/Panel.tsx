import PanelProps from "@/types/PanelProps"

const Panel: React.FC<PanelProps> = ({ children }) => {
    return (
        <div className="bg-white h-full" >
            {children}  
        </div>
    );
}

export default Panel;