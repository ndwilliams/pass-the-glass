import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getRequestById } from "../../services/requestsService";

export const RequestDetails = () => {
  const { requestId } = useParams();
  const [request, setRequest] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    getRequestById(requestId).then((requestObj) => setRequest(requestObj));
  }, [requestId]);

  return (
    <section key={request.id} className="request-container">
      <div className="request-info">
        Day of Week: <span>{request?.dayOfWeek?.name}</span>
      </div>
      <div className="request-time-slot-container">
        Time Slot:{" "}
        <span className="request-time-slot-info">
          {request?.timeOfDayStart?.timeOfDay} to
        </span>
        <span className="request-time-slot-info">
          {" "}
          {request?.timeOfDayEnd?.timeOfDay}
        </span>
      </div>
      <div>
        Address:{" "}
        <span className="request-info-address">{request.user?.address}</span>
      </div>
      <div className="request-info-phone-number">
        {request.user?.phoneNumber}
      </div>
      <div className="request-extra-notes">
        Notes: <span>{request.notes}</span>
      </div>
    </section>
  );
};
