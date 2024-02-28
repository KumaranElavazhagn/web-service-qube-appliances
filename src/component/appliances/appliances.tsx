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

    const [status, setStatus] = useState({
        Failed: 0,
        Stalled: 0,
        Archived: 0,
        Cancelled: 0,
        Scheduled: 0,
        Unarchiving: 0,
        Downloading: 0,
        Downloaded: 0,
    })
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
                if (response.data && response.data.appliances) {
                    setApplianceResponse(response.data.appliances);

                    const counts = response.data.appliances.reduce((acc: Record<string, number>, curr: Appliance) => {
                        acc[curr.downloadStatus]++;
                        return acc;
                    }, {
                        Failed: 0,
                        Stalled: 0,
                        Archived: 0,
                        Cancelled: 0,
                        Scheduled: 0,
                        Unarchiving: 0,
                        Downloading: 0,
                        Downloaded: 0,
                    });

                    setStatus(counts);
                } else {
                    setApplianceResponse([])
                }
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
                    Archived={status.Archived}
                    Cancelled={status.Cancelled}
                    Downloaded={status.Downloaded}
                    Downloading={status.Downloading}
                    Failed={status.Failed}
                    Scheduled={status.Scheduled}
                    Unarchiving={status.Unarchiving}
                    Stalled={status.Stalled}
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