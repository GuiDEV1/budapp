import { DesenvPage } from "components/DesenvPage/DesenvPage";
import { HeaderSearch } from "components/HeaderSearch/HeaderSearch"
import { PageTitle } from "components/PageTitle/PageTitle"

import { FaCheckCircle } from "react-icons/fa";

export const Goals = () => {
    return (
        <>
            <HeaderSearch />
            <PageTitle 
                icon={<FaCheckCircle />}
                title="Projetos"
            />

            <DesenvPage />

        </>
    )
}