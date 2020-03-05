export abstract class Response {

    protected constructor(protected readonly response: string) {
    }

    public abstract assertSuccess(): void;
}
