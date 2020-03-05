import { Connection } from './Connection';
import { RestartRequest } from './request-response';

/**
 * Class responsible for running maintenance tasks on cameras from Axis Communication.
 */
export class Maintenance {
    /**
     * Initializes a new instance of the class.
     * @param connection The connection to the device.
     */
    constructor(private readonly connection: Connection) {
    }

    /**
     * TODO: Write
     * @throws {UnauthorizedError} User is not authorized to perform operation.
     * @throws {RequestError} Request failed.
     * @throws {UnknownError} Error cause is unknown.
     */
    public async add(): Promise<void> {
        const request = new RestartRequest(this.connection);
        const response = await request.send();

        response.assertSuccess();
    }
}
