import ReactNode from "react";

export interface Tab {
    key: string;
    title: string;
    content: React.ReactNode;
}