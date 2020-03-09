import { RestartRequest } from './restart/RestartRequest';
import { Connection } from './shared';

/**
 * Class responsible for running maintenance operations on devices from Axis Communication.
 */
export class Maintenance {
    /**
     * Initializes a new instance of the class.
     * @param connection The connection to the device.
     */
    constructor(private readonly connection: Connection) {
    }

    /**
     * Restarts the Axis device.
     *
     * The returned promise is resolved when the device accepts the restart request, before
     * disconnecting from the network.
     * @throws {UnauthorizedError} User is not authorized to perform operation.
     * @throws {RequestError} Request failed.
     * @throws {UnknownError} Error cause is unknown.
     */
    public async restart(): Promise<void> {
        const request = new RestartRequest(this.connection);
        const response = await request.send();

        response.assertSuccess();
    }

    /**
     * Reset the Axis device to factory default. All settings are set to their factory default
     * values except:
     *
     * - The boot protocol (Network.BootProto)
     * - The static IP address (Network.IPAddress)
     * - The default router (Network.DefaultRouter)
     * - The subnet mask (Network.SubnetMask)
     * - The broadcast IP address (Network.Broadcast)
     * - The system time
     * - The IEEE 802.1X settings
     *
     * Since these parameters are not reset the Axis product can be accessed on the same address.
     * This is especially important when using NAT router. After the Axis product has been reset to
     * factory default it is restarted as part of this function.
     *
     * The returned promise is resolved when the device accepts the restart request, before
     * disconnecting from the network.
     * @throws {UnauthorizedError} User is not authorized to perform operation.
     * @throws {RequestError} Request failed.
     * @throws {UnknownError} Error cause is unknown.
     */
    public async factoryDefault(): Promise<void> {
        const request = new FactoryDefaultRequest(this.connection);
        const response = await request.send();

        response.assertSuccess();
    }
}
