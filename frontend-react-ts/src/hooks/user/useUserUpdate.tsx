import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";
import Api from "../../services/api";

interface UserRequest {
    name: string;
    username: string;
    email: string;
    password? : string;
}

export const useUserUpdate = () => {
    return useMutation({
        mutationFn: async({id, data}: {id: number, data: UserRequest}) => {
            const token = Cookies.get('token');

            const response = await Api.put(`/api/users/${id}`, data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            return response.data;
        }
    })
}