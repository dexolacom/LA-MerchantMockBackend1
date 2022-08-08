// @ts-nocheck
import devLogger from './dev.logger';
import prodLogger from './prod.logger';
import * as _cl from './logMargins';

export const cl = _cl;

export let log =
  process.env.NODE_ENV === 'develop' ? devLogger() : prodLogger();

export const create = data => {
  // cl.mt('winston create data:', data);
  logService.create(data);
};

export const update = data => {
  // cl.mt('winston update data:', data);
  logService.update(data);
};
