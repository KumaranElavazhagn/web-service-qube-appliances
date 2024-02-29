import { useEffect, useState } from 'react'
import { StatusCard } from './statusCard'
import { GetAppliances } from '../../api/api'
import Loader from '../../Loader'
import SomethingWentWrong from '../../Error'
import { Appliance } from '../../interface/Appliances';
import React from 'react'
import { ApplianceTable } from './applianceTable'
import NavBarComponent from '../menu/navBar'


export const ApplianceComponent = () => {
    // State variables to manage appliances data, device status, download status, error handling, and loading state
    const [somethingWentWrong, setSomethingWentWrong] = useState(false);
    const [applianceResponse, setApplianceResponse] = useState<Appliance[]>([]);
    const [deviceStatus, setDeviceStatus] = useState("");
    const [downloadStatus, setDownloadStatus] = useState("");
    const [loader, setLoader] = useState(true);

    // Effect hook to fetch appliances data on component mount and when device status or download status changes
    useEffect(() => {
        const onLoadData = async () => {
            // Set loader state to true while fetching data
            setLoader(true);
            try {
                // Fetch appliances data from API based on device status and download status
                const response = await GetAppliances(deviceStatus, downloadStatus);
                // Set appliances data from API response
                setApplianceResponse(response.data?.appliances);
            } catch (error) {
                // Set error state if API call fails
                setSomethingWentWrong(true);
            } finally {
                // Set loader state to false after data fetching is complete
                setLoader(false);
            }
        };
        onLoadData(); // Call the function to fetch data
    }, [deviceStatus, downloadStatus]); // Dependency array ensures this effect runs whenever device status or download status changes

    // JSX to render Appliances component
    return (
        <div>
            {/* Render NavBar component */}
            <NavBarComponent />
            <div className="container-fluid">
                {/* Render StatusCard component with applianceResponse */}
                <StatusCard
                    applianceResponse={applianceResponse}
                />

                {/* Render ApplianceTable component with applianceResponse */}
                <ApplianceTable
                    applianceResponse={applianceResponse}
                />

                {/* Render SomethingWentWrong component if somethingWentWrong state is true */}
                {somethingWentWrong && <SomethingWentWrong onclose={setSomethingWentWrong} />}

                {/* Render Loader component if loader state is true */}
                {loader && <Loader />}
            </div>
        </div>
    )
}
