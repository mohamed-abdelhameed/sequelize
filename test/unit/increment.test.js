'use strict';

const chai = require('chai');

const expect = chai.expect;
const Support   = require('../support');

const current   = Support.sequelize;
const Sequelize = Support.Sequelize;

describe(Support.getTestDialectTeaser('Model'), () => {
  describe('increment', () => {
    describe('options tests', () => {
      const Model = current.define('User', {
        id: {
          type: Sequelize.BIGINT,
          primaryKey: true,
          autoIncrement: true,
        },
        count: Sequelize.BIGINT,
      });

      it('should reject if options are missing', async () => {
        await expect(Model.increment(['id', 'count']))
          .to.be.rejectedWith('Missing where attribute in the options parameter');
      });

      it('should reject if options.where are missing', async () => {
        await expect(Model.increment(['id', 'count'], { by: 10 }))
          .to.be.rejectedWith('Missing where attribute in the options parameter');
      });
    });
  });
});
