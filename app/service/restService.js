import { RESTDataSource } from 'apollo-datasource-rest';
import { AUTHORIZATION } from '../config/constants';
import {
    BASE_URL,
    AUTH,
    PROPERTIES_URL,
} from '../config/service'

// A Rest service to fulfill calls to simple rest API
export class RestService extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = BASE_URL;
    }

    willSendRequest(request) {
        request.headers.set(AUTHORIZATION, AUTH);
    }

    async getPropertiesByCity(cityName) {
        return await this.get(`${PROPERTIES_URL}?q=${cityName}`);
    }
}