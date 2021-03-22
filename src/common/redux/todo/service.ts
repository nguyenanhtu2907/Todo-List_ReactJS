import API from '../../constants/api';
import AxiosClient from '../../utils/axiosClient';

const todoServices = {
    fetchAll: (): Promise<any> => {
        const items = AxiosClient.get(API.TODO.FETCH_ALL);
        return items;
    },
};
export default todoServices;
