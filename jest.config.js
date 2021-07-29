const { getJestProjects } = require('@nrwl/jest');

module.exports = {
  projects: [
    ...getJestProjects(),
    '<rootDir>/apps/shell',
    '<rootDir>/libs/book/domain',
  ],
};
