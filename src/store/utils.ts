import axios from "axios";

export const fetchAdditionalData = async (urls: Array<string>) => {
    try {
        const responses = await Promise.all(urls.map((url) => axios.get(url)));
        return responses.map((response) => response.data);
    } catch (error) {
        console.error(error);
        return [];
    }
};