import { Desenv } from "./DesenvPageStyle"

//img
import desenvImg from "assets/img/desenv.svg";

export const DesenvPage = () => {
    return (
        <Desenv>
            <img src={desenvImg} />
            <p className="labelDefault"> Aguarde, estamos em desenvolvimento...</p>
            <p className="labelDefault"> Aproveite as demais funcionailidades que já estão em funcionamento</p>
            
        </Desenv>
    )
}