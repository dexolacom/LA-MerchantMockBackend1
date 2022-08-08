import { createLogger, format, transports } from 'winston';

const { combine, printf, colorize } = format;

const buildDevLogger = () => {
  const logFormat = printf(({ level, message, timestamp }) => {
    return `${level}: ${message}`; // ${timestamp}
  });

  return createLogger({
    format: combine(colorize(), logFormat),
    transports: [new transports.Console()],
  });
};

export default buildDevLogger;
