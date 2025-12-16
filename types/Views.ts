export type ViewKey = "planner" | "financing";
export type ViewType = "Planner" | "Financing";

export interface View {
    key : ViewKey;
    title: ViewType;
}