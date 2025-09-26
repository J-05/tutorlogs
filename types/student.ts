export interface StudentInfo {
    personalInfo: Partial<PersonalInfo>,
    contactInfo: Partial<ContactInfo>,
    academicInfo: Partial<AcademicInfo>,
    serviceInfo: Partial<ServiceInfo>,
    additionalInfo: Partial<AdditionalInfo>
}

export interface PersonalInfo {
    parentName: string,
    studentName: string,
    PreferredName: string,
    prounouns: string,
}

export interface ContactInfo {
    parentPhone: string,
    parentEmail: string,
}

export interface AcademicInfo {
    school: string,
    yearGroup: string,
    subjects: string[],
}

export interface ServiceInfo {
    service: string,
    frequency: string,
    subjects: SubjectServiceInfo[],
}

export interface SubjectServiceInfo {
    name: string,
    examBoard: string,
    tier: string
    currentGrade: string,
    goalGrade: string
}

export interface AdditionalInfo {
    timings: string,
    teachingStyle: string,
    challenges: string,
    strengths: string,
    requests: string,
    otherNotes: string
}