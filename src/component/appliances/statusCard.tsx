import '../../Css/statusCard.css'
import '../../Css/commonCss.css'

type Props = {
    Failed: number,
    Stalled: number,
    Archived: number,
    Cancelled: number,
    Scheduled: number,
    Unarchiving: number,
    Downloading: number,
    Downloaded: number,
}


export const StatusCard = (props: Props) => {
    return (
        <div className="card mt-4 status-card">
            <div className="overflow-auto">
                <ul className="list-unstyled d-flex mb-0">
                    <li className="d-flex align-items-center me-4">
                        <div className="bg-danger rounded-circle-position" />
                        <span className='ms-2 text-no-wrap'>{props.Failed} Failed</span>
                    </li>
                    <li className="d-flex align-items-center me-4">
                        <div className="bg-danger rounded-circle-position" />
                        <span className='ms-2 text-no-wrap'>{props.Stalled} Stalled</span>
                    </li>
                    <li className="d-flex align-items-center me-4">
                        <div className="bg-danger rounded-circle-position" />
                        <span className='ms-2 text-no-wrap'>{props.Archived} Archived</span>
                    </li>
                    <li className="d-flex align-items-center me-4">
                        <div className="bg-warning rounded-circle-position" />
                        <span className='ms-2 text-no-wrap'>{props.Cancelled} Cancelled</span>
                    </li>
                    <li className="d-flex align-items-center me-4">
                        <div className="bg-secondary rounded-circle-position" />
                        <span className='ms-2 text-no-wrap'>{props.Scheduled} Scheduled</span>
                    </li>
                    <li className="d-flex align-items-center me-4">
                        <div className="bg-primary rounded-circle-position" />
                        <span className='ms-2 text-no-wrap'>{props.Unarchiving} Unarchiving</span>
                    </li>
                    <li className="d-flex align-items-center me-4">
                        <div className="bg-primary rounded-circle-position" />
                        <span className='ms-2 text-no-wrap'>{props.Downloading} Downloading</span>
                    </li>
                    <li className="d-flex align-items-center me-4">
                        <div className="bg-success rounded-circle-position" />
                        <span className='ms-2 text-no-wrap'>{props.Downloaded} Downloaded</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}