import { Outlet } from "react-router-dom";
import { SideMenu } from "../pages/containers/menu/SideMenu";
import { ContLayout } from "./LayoutStyle";
import { useContext } from "react";

import { ProtectedLayout } from "./ProtectedLayout/ProtectedLayout";

//modal
import { UserConfigModal } from "components/UserConfigModal/UserConfigModal";
import { UserConfigContext } from "context/ConfigModal/ConfigModal";



const Layout = () => {

    const userConfig = useContext(UserConfigContext);

    return (
        <ProtectedLayout>
            {userConfig.openModal && <UserConfigModal />}
            <ContLayout>
                <div className='menu'>
                    <SideMenu />
                </div>

                <div className="content">
                    <Outlet />
                </div>
            </ContLayout>
        </ProtectedLayout>
    );
}

export default Layout;