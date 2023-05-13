import { HeaderCont } from "./HeaderSearchStyle"

import { FaSearch } from "react-icons/fa";
import { useState } from "react";

export const HeaderSearch = () => {
    const [search, setSearch] = useState<string>('');


    return (
        <HeaderCont>
            <div className="inputSearch">
                <input 
                    type="text" 
                    placeholder="Pesquise aqui..." 
                    value={search} 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
                />
                <button><FaSearch className="searchIcon"/></button>
            </div>
            
        </HeaderCont>
    )
}

