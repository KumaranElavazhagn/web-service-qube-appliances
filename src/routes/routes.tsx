import {
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import { ApplianceComponent } from "../component/appliances/appliances"
import { ApplianceDetailComponent } from "../component/applianceDetail/applianceDetail"

export const AppRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Navigate to="/appliance" />} />
                <Route path="/appliance" element={<ApplianceComponent />} />
                <Route path="/appliance-details/:applianceId" element={<ApplianceDetailComponent />} />
            </Routes>
        </div>
    )
}