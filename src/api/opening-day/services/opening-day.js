'use strict';

/**
 * opening-day service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::opening-day.opening-day');
