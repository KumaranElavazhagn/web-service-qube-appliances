
import Pagination from '@mui/material/Pagination';
import '../../Css/applianceTable.css'
import '../../Css/commonCss.css'
import { useEffect, useState } from 'react';
import { Appliance } from '../../interface/Appliances';
import { compare } from "../../Utils/comparator"
import { useNavigate } from 'react-router-dom';

type Props = {
    applianceResponse: Appliance[]
}

export const ApplianceTable = (props: Props) => {

    const navigate = useNavigate();

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [applianceResponse, setApplianceResponse] = useState<Appliance[]>(props.applianceResponse)
    const [search, setSearch] = useState("")
    const [sort, setSort] = useState({
        sortField: "",
        sortOrder: "",
    });

    useEffect(() => {
        setApplianceResponse(props.applianceResponse);
        setTotalPage(Math.ceil(props.applianceResponse?.length / rowsPerPage))
    }, [props.applianceResponse, rowsPerPage])

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value);
    };


    const BindingAppliance = () => {
        const sortedData = [...applianceResponse]?.sort((a: any, b: any) => compare(a[sort.sortField], b[sort.sortField], sort.sortOrder));
        const filteredData = sortedData?.filter((data: Appliance) => data.serialNo.toLowerCase().includes(search.toLowerCase()));
        const startIndex = (currentPage - 1) * rowsPerPage;
        const endIndex = startIndex + rowsPerPage;
        const paginatedData = filteredData?.slice(startIndex, endIndex);
    
        return paginatedData?.map((data: Appliance, index: number) => {
            const statusClasses: any = {
                Online: 'bg-success',
                Offline: 'bg-danger',
                Failed: 'bg-danger',
                Stalled: 'bg-danger',
                Archived: 'bg-danger',
                Cancelled: 'bg-warning',
                Scheduled: 'bg-secondary',
                Unarchiving: 'bg-primary',
                Downloading: 'bg-primary',
                Downloaded: 'bg-success'
            };

            const bgdeviceColorClass = statusClasses[data.deviceStatus] || '';
            const bgdownloadColorClass = statusClasses[data.downloadStatus] || '';
            return (
                <tr key={index}>
                    <td>{data.serialNo}</td>
                    <td>
                        <div>{data.theatreName}</div>
                        <span className='blue-table-data'>{data.location.city}, {data.location.state}, {data.location.country}</span>
                    </td>
                    <td>
                        <div>{data.bandwidth}</div>
                        <span className='data-txt'>{data.avgBandwidth}</span>
                    </td>
                    <td>
                        <div className={`${bgdeviceColorClass} rounded-circle-position display`}></div>
                        <span className='ms-2 text-no-wrap blue-table-data'>{data.deviceStatus}</span>
                    </td>
                    <td>
                        <div className={`${bgdownloadColorClass} rounded-circle-position display`}></div>
                        <span className='ms-2 text-no-wrap blue-table-data'>{data.downloadStatus}</span>
                    </td>
                    <td>{data.osVersion}</td>
                    <td className='text-center'>
                        <button className='ms-3 filter-button' onClick={()=>{navigate(`/appliance-details/${data.serialNo}`)}}>
                            <span className='mx-2 text-no-wrap'>
                                <span className='ms-1'>View</span>
                            </span>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    const getSortIcon = (fieldName: string) => {
        return fieldName === sort.sortField ? <span key={12299} className="ps-2" >
            <img src={sort.sortOrder === "Asc" ? "../Images/sort-up-icon.svg" : "../Images/sort-down-icon.svg"} alt="sort-icon" className="cp-table-sort" />
        </span> : ""
    }

    // CPF_PD_PC_11
    const onSorting = (columnName: string) => {
        const sortOrder = sort.sortField === columnName ? (sort.sortOrder === "Asc" ? "Desc" : "Asc") : "Asc";
        setSort({ sortField: columnName, sortOrder });
    }

    return (
        <div className='card my-4 app-table-card '>

            <div className="d-flex align-items-center justify-content-between">

                <div className="d-flex align-items-center gap-0">
                    <div className="input-group search-max-width">
                        <input
                            type="search"
                            className="form-control search-form-field border-end-0 "
                            placeholder="Search by serial no"
                            aria-label="al-search-grp"
                            name='searchData'
                            id="al-search-grp"
                            onChange={(event) => { setSearch(event.target.value); }}
                        />
                        <span className="input-group-text bg-white" >
                            <a>
                                <img src="../Images/search-icon.svg" alt="search icon" />
                            </a>
                        </span>
                    </div>
                    <button className='ms-3 filter-button'>
                        <span className='mx-2 text-no-wrap'>
                            <img src="../Images/filter-icon.svg" alt="filter icon" />
                            <span className='ms-1'>Filter</span>
                        </span>
                    </button>
                </div>

                <div className="d-flex">
                    <div className="d-flex justify-content-end float-end align-items-center ms-2">
                        <label
                            className="text-nowrap me-2 data-txt"
                        >
                            Show
                        </label>
                        <select
                            className="form-select select-min-width"
                            value={rowsPerPage}
                            onChange={(event) => { setRowsPerPage(Number(event.target.value)); }}
                        >
                            <option value={10}>10</option>
                            <option value={20}>20</option>
                            <option value={30}>30</option>
                            <option value={40}>40</option>
                            <option value={50}>50</option>
                        </select>
                    </div>
                    <Pagination
                        className='Mui-selected'
                        count={totalPage}
                        shape="rounded"
                        page={currentPage}
                        onChange={handleChange}
                    />
                </div>


            </div>

            <table className='mt-5'>
                <thead>
                    <tr>
                        <th onClick={() => onSorting("serialNo")}>Device Serial{getSortIcon("serialNo")}</th>
                        <th onClick={() => onSorting("theatreName")}>Location{getSortIcon("theatreName")}</th>
                        <th onClick={() => onSorting("bandwidth")}>Bandwidth{getSortIcon("bandwidth")}</th>
                        <th onClick={() => onSorting("deviceStatus")}>status{getSortIcon("deviceStatus")}</th>
                        <th onClick={() => onSorting("downloadStatus")}>Download status{getSortIcon("downloadStatus")}</th>
                        <th onClick={() => onSorting("osVersion")}>OS Version{getSortIcon("osVersion")}</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {BindingAppliance()}
                </tbody>
            </table>
        </div>
    )
}