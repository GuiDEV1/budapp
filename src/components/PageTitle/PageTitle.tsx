import { TitleCont } from "./PageTitleStyle"

export const PageTitle = ({icon, title}: any) => {
    return(
        <TitleCont>
            <div className="iconPage">
                <span>
                    {icon}
                </span>
            </div>
            <h1 className="title">{title}</h1>
        </TitleCont>
    )
}