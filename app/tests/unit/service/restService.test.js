import 'regenerator-runtime/runtime';
import { RestService } from '../../../service/restService';

jest.mock('../../../service/restService');

beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    RestService.mockClear();
});

describe('RestService', () => {
    it('Verity the constructor has been called', () => {
        const soundPlayerConsumer = new RestService();
        expect(RestService).toHaveBeenCalledTimes(1);
    });
    it('Verity the willSendRequest has been called', () => {
        // Show that mockClear() is working:
        expect(RestService).not.toHaveBeenCalled();

        const restService = new RestService();
        // Constructor should have been called again:
        expect(RestService).toHaveBeenCalledTimes(1);

        const request = {
            headers: {},
            params: {},
        };

        restService.willSendRequest(request);
        expect(restService.willSendRequest).toHaveBeenCalledTimes(1);
    });
    it('Verity the getPropertiesByCity has been called', () => {
        // Show that mockClear() is working:
        expect(RestService).not.toHaveBeenCalled();

        const restService = new RestService();

        restService.getPropertiesByCity('Huston');
        expect(restService.getPropertiesByCity).toHaveBeenCalledTimes(1);
    });
});