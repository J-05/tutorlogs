import CoreInfoPanelProps from "./CoreInfoPanelProps";

const CoreInfoPanel: React.FC<Partial<CoreInfoPanelProps>> = ( {studentInfo} ) => {
    return (
        <div>
            { studentInfo? studentInfo.academicInfo? (
                <p>
                {studentInfo.academicInfo}</p>
            )}
        </div>
    )
}

export default CoreInfoPanel;