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

    const [somethingWentWrong, setSomethingWentWrong] = useState(false)
    const [applianceResponse, setApplianceResponse] = useState<Appliance[]>([])
    const [deviceStatus, setDeviceStatus] = useState("")
    const [downloadStatus, setDownloadStatus] = useState("")
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        const onLoadData = async () => {
            setLoader(true);
            try {
                const response = await GetAppliances(deviceStatus, downloadStatus);
                setApplianceResponse(response.data?.appliances);
            } catch (error) {
                setSomethingWentWrong(true);
            } finally {
                setLoader(false);
            }
        };
        onLoadData();
    }, [deviceStatus, downloadStatus]);


    return (
        <div>
            <NavBarComponent />
            <div className="container-fluid">
                <StatusCard
                    applianceResponse={applianceResponse}
                />

                <ApplianceTable
                    applianceResponse={applianceResponse}
                />

                {somethingWentWrong && <SomethingWentWrong onclose={setSomethingWentWrong} />}

                {loader && <Loader />}
            </div>
        </div>
    )
}