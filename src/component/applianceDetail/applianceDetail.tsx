import { useNavigate, useParams } from "react-router-dom";
import '../../Css/applianceDetail.css'
import '../../Css/commonCss.css'
import { useEffect, useState } from "react";
import { ApplianceDetailResponse } from "../../interface/ApplianceDetail";
import { GetApplianceDetail } from "../../api/api";
import SomethingWentWrong from "../../Error";
import Loader from "../../Loader";

export const ApplianceDetailComponent = () => {

    let { applianceId } = useParams();

    const navigate = useNavigate();

    const [applianceDetailResponse, setApplianceDetailResponse] = useState<ApplianceDetailResponse>()
    const [somethingWentWrong, setSomethingWentWrong] = useState(false)

    useEffect(() => {
        const onLoadData = async () => {
            if (applianceId !== undefined) {
                try {
                    const response = await GetApplianceDetail(applianceId)
                    if (response.data) {
                        setApplianceDetailResponse(response.data);
                    } else {
                        navigate("/")
                    }
                } catch (error) {
                    setSomethingWentWrong(true);
                }
            } else {
                navigate("/")
            }
        }
        onLoadData()
    }, [])
    return (
        <div>
            <div className="mt-2 ms-4 ps-2 d-flex">
                <span className="data-txt breadcrumb cursor-pointer" onClick={() => { navigate("/") }}>Devices</span>
                <img className="breadcrumb-img mx-2 mt-1" src="../Images/bread-crumb.svg" alt="filter icon" />
                <span className="breadcrumb">{applianceId}</span>
            </div>

            <div className="device-detail-card p-3 mb-4">
                <div className="d-flex align-items-center justify-content-between">
                <h2>{applianceId}</h2>

                    <div className="d-flex">
                        <button className='ms-3 filter-button'>
                            <span className='mx-2 text-no-wrap'>
                                <img src="../Images/speed-test-icon.svg" alt="speed test icon" />
                                <span className='ms-1'>Speed Test</span>
                            </span>
                        </button>
                        <button className='ms-3 filter-button'>
                            <span className='mx-2 text-no-wrap'>
                                <img src="../Images/tags-icon.svg" alt="tags icon" />
                                <span className='ms-1'>Logs</span>
                            </span>
                        </button>
                    </div>
                </div>
                <div>Cross River Mall</div>
                <span className="data-txt">New Delhi, Delhi, India</span>
                <div className="mt-2 border-bottom-dd-card">
                    <button className='device-detail-card-status me-2'>
                        <span className='mx-2 text-no-wrap'>
                            <div className={`${applianceDetailResponse?.deviceStatus === "Online" ? "bg-success" : "bg-danger"} rounded-circle-position display`} />
                            <span className='ms-1'>{applianceDetailResponse?.deviceStatus}</span>
                        </span>
                    </button>
                    <button className='device-detail-card-status me-2'>
                        <span className='mx-2 text-no-wrap'>
                            <img src="../Images/storage-icon.svg" alt="filter icon" />
                            <span className='ms-1'>{applianceDetailResponse?.storage}</span>
                        </span>
                    </button>
                </div>
                <div className="ms-4 mt-3">
                    <span className="data-txt-bolder me-5 cursor-pointer">Details</span>
                    <span className="data-txt-bolder me-5">Content</span>
                    <span className="data-txt-bolder me-5">Bandwidth</span>
                </div>
            </div>

            <div className="container-fluid">
                <div className="card device-monitor-card">
                    <div className="row m-3">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-3 mb-3">
                            <label className="device-monitor-card-label">
                                Device Serial
                            </label>
                            <span className="device-monitor-card-span">
                                {applianceDetailResponse?.serialNo}
                            </span>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-3 mb-3">
                            <label className="device-monitor-card-label">
                                Loation
                            </label>
                            <span className="device-monitor-card-span">
                                {applianceDetailResponse?.theatreName}
                            </span>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-3 mb-3">
                            <label className="device-monitor-card-label">
                                City
                            </label>
                            <span className="device-monitor-card-span">
                                {applianceDetailResponse?.location.city},{applianceDetailResponse?.location.state},{applianceDetailResponse?.location.country}
                            </span>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-3 mb-3">
                            <label className="device-monitor-card-label">
                                ISP Payment Responsibility
                            </label>
                            <span className="device-monitor-card-span">
                                {applianceDetailResponse?.ispPaymentResponsibility}
                            </span>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-3 mb-3">
                            <label className="device-monitor-card-label">
                                Bandwidth
                            </label>
                            <span className="device-monitor-card-span">
                                {applianceDetailResponse?.bandwidth}
                            </span>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-3 mb-3">
                            <label className="device-monitor-card-label">
                                Average Bandwidth
                            </label>
                            <span className="device-monitor-card-span">
                                {applianceDetailResponse?.avgBandwidth}
                            </span>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-3 mb-3">
                            <label className="device-monitor-card-label">
                                Plan Start Date
                            </label>
                            <span className="device-monitor-card-span">
                                {applianceDetailResponse?.planStartDate}
                            </span>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-3 mb-3">
                            <label className="device-monitor-card-label">
                                Billing Cycle
                            </label>
                            <span className="device-monitor-card-span">
                                {applianceDetailResponse?.billingCycle}
                            </span>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-3 mb-3">
                            <label className="device-monitor-card-label">
                                Download Status
                            </label>
                            <span className="device-monitor-card-span">
                                {applianceDetailResponse?.downloadStatus}
                            </span>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-3 mb-3">
                            <label className="device-monitor-card-label">
                                OS Version
                            </label>
                            <span className="device-monitor-card-span">
                                {applianceDetailResponse?.osVersion}
                            </span>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-3 mb-3">
                            <label className="device-monitor-card-label">
                                Storage Available
                            </label>
                            <span className="device-monitor-card-span">
                                {applianceDetailResponse?.storage}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {somethingWentWrong && <SomethingWentWrong onclose={setSomethingWentWrong} />}

        </div>
    )
}