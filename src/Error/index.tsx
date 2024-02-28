import { closePopup } from "../Utils/utils"

type props = {
    onclose: (loader: boolean) => void,
}

const SomethingWentWrong = (props: props) => {

    return (
        <div
            className="modal fade show"
            id="email-popup"
            style={{ backgroundColor: "rgba(0, 0, 0, .5)", display:"block"}}
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex={-1}
            aria-hidden="true"
            aria-modal="true"
            role="dialog"
        >
            <div className="modal-dialog weight-validation-width">
                <div className="modal-content">
                    <div className="modal-header pt-4 justify-content-center border-0">
                        <img
                            src="../Images/404-img.svg"
                            alt="info-required-icon"
                            className="success-icon"
                        />
                    </div>
                    <div className="modal-body py-0 text-center border-0">
                        <h5 className="popup-header">Something Went Wrong</h5>
                        <p className="popup-txt">
                            Oops - We're having some trouble completing your request.
                        </p>
                    </div>
                    <div className="modal-footer pb-4 justify-content-center border-0">
                        <button
                            type="button"
                            className="btn vps-btn-primary"
                            data-bs-dismiss="modal"
                            onClick={() => {
                                closePopup(props.onclose(false))
                            }}
                        >
                            OK
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SomethingWentWrong