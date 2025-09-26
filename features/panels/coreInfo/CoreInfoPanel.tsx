import CoreInfoPanelProps from "./CoreInfoPanelProps";

const CoreInfoPanel: React.FC<Partial<CoreInfoPanelProps>> = ( {studentInfo} ) => {
    const academicInfo = studentInfo?.academicInfo;

    return (
        <>
        <div>
            { studentInfo?.personalInfo && (
                <h1 className="text-red-600"> { studentInfo.personalInfo.studentName }</h1>
            )}
            { studentInfo?.academicInfo && (
                <p> { studentInfo.academicInfo.school }</p>
            )}
        </div>

        </>
    )
}

export default CoreInfoPanel;