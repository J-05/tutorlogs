import React from "react";
import Logo from '@/assets/logo-placeholder-image.png';
import DropdownMenu from "@/components/dropdown/DropdownMenu";
 
const Header: React.FC = () => {
    const views: string[] = ["Planner", "Financing"]
    return (
        <header className="bg-primary shadow-lg p-4 flex justify-between items-center text-white">
            <div className="flex flex-row gap-4 items-center">
                <div className="user-profile header-text">
                    <img src={Logo.src} className="w-10 h-10 rounded-full" />
                </div>
                <div className="header-text logo text-xl font-bold">Tutorlogs</div>
            </div>

            <DropdownMenu options={views} />
        </header>
        
    );
}

export default Header;