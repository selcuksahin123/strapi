'use strict';

/**
 * shares-table service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::shares-table.shares-table');
