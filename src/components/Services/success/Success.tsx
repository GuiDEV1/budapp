
import { FiCheckCircle } from "react-icons/fi";
import { useEffect, useState } from "react";
import { Success } from "./SuccessStyle";

export const SuccessService = ({sucessText}: any) => {

    const [success, setSuccess] = useState({
        opcity: 1,
        right: 2,
    });

    
    useEffect(() => {
        setTimeout(() => {
            setSuccess(prevState => ({
                ...prevState,
                opcity: 0,
                right: -100,
            }));
        }, 3000); 

    }, []); 

    return (
        <Success style={{opacity: success.opcity, right: `${success.right}%`}}> 
            <div className="hideSuccess">
                <FiCheckCircle size={28} color="#3CD8BF"/>
            </div>
            <div className="messageSuccess">
                <p>{sucessText}</p>
            </div>
        </Success>
    );
}

