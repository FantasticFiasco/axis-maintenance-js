import { Response } from './Response';

export class RestartResponse extends Response {

    constructor(response: string) {
        super(response);
    }

    public assertSuccess() {
        // TODO: Implement
    }
}
