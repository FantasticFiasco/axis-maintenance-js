import { UnknownError } from '../errors';
import { Response } from './Response';

export class RestartResponse extends Response {
    private static readonly SuccessResponse = /restartMessage\.shtml/i;

    constructor(response: string) {
        super(response);
    }

    public assertSuccess() {
        if (!RestartResponse.SuccessResponse.test(this.response)) {
            throw new UnknownError('Request to restart device was not successful');
        }
    }
}
