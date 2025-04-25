import { apiClient } from "./config";

//book Appointments
export const apiBookAppointment = async (data) => {
  return apiClient.post("/appointments", data);
};

// fetch appointments
export const apiGetAppointment = async () => {
  return apiClient.get("/appointments");
};

export const apiCancelAppointment = async (appointmentId) => {
  return apiClient.delete("/appointments/cancel", {
    data: { appointmentId },
  });
};
