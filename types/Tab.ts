import ReactNode from "react";

export type TabKey = "student1" | "student2" | "student3"

export interface Tab {
    key: TabKey;
    title: string;
    content: React.ReactNode;
}