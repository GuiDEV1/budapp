import { AuthContext } from "context/AuthProvider/AuthProvider"
import { useContext } from "react"
import { ProtectedCont, ProtectedItems, Button } from "./ProtectedLayoutStyle";
import { useNavigate } from "react-router-dom";
import restricted from 'assets/img/restricted.svg';

export const ProtectedLayout = ({children}: {children: any}) => {
    const contextAuth = useContext(AuthContext);
    const navigate = useNavigate();

    if(!contextAuth.email) {
        return (
            <ProtectedCont>
                <ProtectedItems>
                    <div className="item_text">
                        <p>Acesso <span>não</span> permitido! </p>
                        <p>Para acessar essa <span>página</span> você </p>  
                        <p>precisa <span>acessar sua conta!</span> </p>

                        <Button onClick={() => navigate('/login')}>Ir para login</Button>
                    </div>

                    <div className="item_img">
                        <img src={restricted} />
                    </div>
                </ProtectedItems>
            </ProtectedCont>
        );
    }

    return children;
}