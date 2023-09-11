import { City, ListResponse } from "models";
import axiosClient from "./axiosClient";

const cityApi = {
    getAll(): Promise<ListResponse<City>> {
        const url = "/cities";
        return axiosClient.get(url, {
            params: {
                _page: 1,
                _limit: 100,
                _totalRows: 100
            }
        });
    }
}

export default cityApi;