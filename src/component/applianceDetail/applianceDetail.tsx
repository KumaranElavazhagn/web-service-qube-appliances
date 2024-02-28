import { useParams } from "react-router-dom";

export const ApplianceDetailComponent = () => {

    let { applianceId } = useParams();
    return (
        <div>
            {applianceId}
        </div>
    )
}