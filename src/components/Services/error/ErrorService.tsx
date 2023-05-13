import { Error } from "./ErrorStyle";
import { FiXOctagon } from "react-icons/fi";
import { useEffect, useState } from "react";
import { IErrorService } from "interfaces/Services/error.panel";

export const ErrorService = ({errorText}: IErrorService) => {

    const [error, setError] = useState({
        opcity: 1,
        right: 2,
    });

    
    useEffect(() => {
        setTimeout(() => {
            setError(prevState => ({
                ...prevState,
                opcity: 0,
                right: -100,
            }));
        }, 3000); 

    }, []); 

    return (
        <Error style={{opacity: error.opcity, right: `${error.right}%`}}> 
            <div className="hideError">
                <FiXOctagon size={28} color="#FF5271"/>
            </div>
            <div className="messageError">
                <p>{errorText}</p>
            </div>
        </Error>
    );
}

