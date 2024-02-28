import '../../Css/statusCard.css'
import '../../Css/commonCss.css'
import { Appliance } from '../../interface/Appliances'
import { useEffect, useState } from 'react'

type Props = {
    applianceResponse: Appliance[]
}


export const StatusCard = (props: Props) => {
    const [status, setStatus] = useState<any>({
        Failed: 0,
        Stalled: 0,
        Archived: 0,
        Cancelled: 0,
        Scheduled: 0,
        Unarchiving: 0,
        Downloading: 0,
        Downloaded: 0,
    })

    useEffect(() => {
        const counts = props.applianceResponse?.reduce((acc: Record<string, number>, curr: Appliance) => {
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
    }, [props.applianceResponse])

    return (
        <div className="card mt-4 status-card">
            <div className="overflow-auto">
                <ul className="list-unstyled d-flex mb-0">
                    <li className="d-flex align-items-center me-4">
                        <div className="bg-danger rounded-circle-position" />
                        <span className='ms-2 text-no-wrap'>{status.Failed} Failed</span>
                    </li>
                    <li className="d-flex align-items-center me-4">
                        <div className="bg-danger rounded-circle-position" />
                        <span className='ms-2 text-no-wrap'>{status.Stalled} Stalled</span>
                    </li>
                    <li className="d-flex align-items-center me-4">
                        <div className="bg-danger rounded-circle-position" />
                        <span className='ms-2 text-no-wrap'>{status.Archived} Archived</span>
                    </li>
                    <li className="d-flex align-items-center me-4">
                        <div className="bg-warning rounded-circle-position" />
                        <span className='ms-2 text-no-wrap'>{status.Cancelled} Cancelled</span>
                    </li>
                    <li className="d-flex align-items-center me-4">
                        <div className="bg-secondary rounded-circle-position" />
                        <span className='ms-2 text-no-wrap'>{status.Scheduled} Scheduled</span>
                    </li>
                    <li className="d-flex align-items-center me-4">
                        <div className="bg-primary rounded-circle-position" />
                        <span className='ms-2 text-no-wrap'>{status.Unarchiving} Unarchiving</span>
                    </li>
                    <li className="d-flex align-items-center me-4">
                        <div className="bg-primary rounded-circle-position" />
                        <span className='ms-2 text-no-wrap'>{status.Downloading} Downloading</span>
                    </li>
                    <li className="d-flex align-items-center me-4">
                        <div className="bg-success rounded-circle-position" />
                        <span className='ms-2 text-no-wrap'>{status.Downloaded} Downloaded</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}