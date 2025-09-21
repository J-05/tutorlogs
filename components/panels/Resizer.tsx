"use client";


const Resizer: React.FC = (resizePanel: () => void) => {
    return (
        <div
            className="w-1 bg-secondary cursor-col-resize"
            onMouseDown={resizePanel}
        ></div>
    );
}

export default Resizer;