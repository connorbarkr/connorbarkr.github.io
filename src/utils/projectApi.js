import _ from 'lodash';

import { PROJECTS } from './constants';

export const getProjectIndex = (title) => {
  let index = 0;

  _.forEach(PROJECTS, (project, i) => {
    if (project.title === title) {
      index = i;
    }
  });
  return index;
};
