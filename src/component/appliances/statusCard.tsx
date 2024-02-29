import '../../Css/statusCard.css'
import '../../Css/commonCss.css'
import { Appliance, ApplianceStatusResponse } from '../../interface/Appliances'
import { useEffect, useState } from 'react'

type Props = {
    applianceResponse: Appliance[]; // Type for props passed to StatusCard component
}

export const StatusCard = (props: Props) => {
    // State variable to manage status counts for different appliance statuses
    const [status, setStatus] = useState<any>({
        Failed: 0,
        Stalled: 0,
        Archived: 0,
        Cancelled: 0,
        Scheduled: 0,
        Unarchiving: 0,
        Downloading: 0,
        Downloaded: 0,
    });

    // Effect hook to update status counts when applianceResponse prop changes
    useEffect(() => {
        // Initialize counts object to store status counts
        const counts: ApplianceStatusResponse = {
            Failed: 0,
            Stalled: 0,
            Archived: 0,
            Cancelled: 0,
            Scheduled: 0,
            Unarchiving: 0,
            Downloading: 0,
            Downloaded: 0,
        };

        // Iterate through applianceResponse to count each status
        props.applianceResponse?.forEach((curr: Appliance) => {
            counts[curr.downloadStatus]++; // Increment count for current status
        });

        // Set status state with updated counts
        setStatus(counts);
    }, [props.applianceResponse]); // Dependency array ensures this effect runs whenever applianceResponse changes

    // JSX to render StatusCard component
    return (
        <div className="card mt-4 status-card">
            <div className="overflow-auto">
                <ul className="list-unstyled d-flex mb-0">
                    {/* Render status counts for each status */}
                    <li className="d-flex align-items-center me-4">
                        <div className="bg-danger rounded-circle-position" />
                        <span className='ms-2 status-card-text text-no-wrap'>{status.Failed} Failed</span>
                    </li>
                    <li className="d-flex align-items-center me-4">
                        <div className="bg-danger rounded-circle-position" />
                        <span className='ms-2 status-card-text text-no-wrap'>{status.Stalled} Stalled</span>
                    </li>
                    <li className="d-flex align-items-center me-4">
                        <div className="bg-danger rounded-circle-position" />
                        <span className='ms-2 status-card-text text-no-wrap'>{status.Archived} Archived</span>
                    </li>
                    <li className="d-flex align-items-center me-4">
                        <div className="bg-warning rounded-circle-position" />
                        <span className='ms-2 status-card-text text-no-wrap'>{status.Cancelled} Cancelled</span>
                    </li>
                    <li className="d-flex align-items-center me-4">
                        <div className="bg-secondary rounded-circle-position" />
                        <span className='ms-2 status-card-text text-no-wrap'>{status.Scheduled} Scheduled</span>
                    </li>
                    <li className="d-flex align-items-center me-4">
                        <div className="bg-primary rounded-circle-position" />
                        <span className='ms-2 status-card-text text-no-wrap'>{status.Unarchiving} Unarchiving</span>
                    </li>
                    <li className="d-flex align-items-center me-4">
                        <div className="bg-primary rounded-circle-position" />
                        <span className='ms-2 status-card-text text-no-wrap'>{status.Downloading} Downloading</span>
                    </li>
                    <li className="d-flex align-items-center me-4">
                        <div className="bg-success rounded-circle-position" />
                        <span className='ms-2 status-card-text text-no-wrap'>{status.Downloaded} Downloaded</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};
