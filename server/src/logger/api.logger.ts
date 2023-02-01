import { Logger, createLogger, transports } from 'winston';

export class APILogger {
    private logger: Logger;

    constructor() {
        this.logger = createLogger({
            transports: [
                new (transports.Console)(),
                new (transports.File)({ filename: './src/logger/combined.log' }),
            ]
        });
    }

    info(message: any, data: any) {
        const dataText = (undefined != data) ? `${JSON.stringify(data)}` : '';
        this.logger.info(`${message}` + dataText);
    }

    error(message: any) {
        this.logger.error(message);
    }

}