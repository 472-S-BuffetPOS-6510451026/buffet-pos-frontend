'use client';

import axiosInstance from "@/lib/axiosInstance";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getSession } from "next-auth/react";

interface StaffRequestStatusResponse {
    status: "pending" | "accepted" | "rejected";
}

interface UpdateStaffRequestRequest {
    requestId: string;
    status: "accepted" | "rejected";
}

const getStaffRequestStatus = async (tableId: string) => {
    console.log("tableId", tableId);
    const { data } = await axiosInstance.get(`/customer/staff-notifications/${tableId}`, {
        headers: {
            AccessCode: tableId,
        },
    });
    return data as StaffRequestStatusResponse;
}

const updateStaffRequestStatus = async (newStatus: UpdateStaffRequestRequest) => {
    const session = await getSession();
    const { data } = await axiosInstance.put("/staff/update-request-status", newStatus, {
        headers: {
            Authorization: `Bearer ${session?.token}`,
        },
    });
    return data;
}

const useGetStaffRequestStatus = (tableId: string) => {
    return useQuery<StaffRequestStatusResponse>({
        queryKey: ["staff-request-status", tableId],
        queryFn: () => getStaffRequestStatus(tableId),
        staleTime: 0,
        refetchInterval: 3000,
    });
}

const useUpdateStaffRequestStatus = () => {
    return useMutation({
        mutationFn: updateStaffRequestStatus,
    });
}

export { useGetStaffRequestStatus, useUpdateStaffRequestStatus };