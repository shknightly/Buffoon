import pino from 'pino';

export const logger = pino({
  name: 'buffoon',
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
      translateTime: 'SYS:standard'
    }
  }
});

export const logStructured = (message: string, context: Record<string, unknown> = {}) => {
  logger.info(context, message);
};
