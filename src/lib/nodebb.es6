export function init () { console.log('a') }

export const db = require.main.require('./src/database')
export const Emailer = require.main.require('./src/emailer')
export const User = require.main.require('./src/user')
//export const Group = require.main.require('./src/groups')
export const Meta = require.main.require('./src/meta')
export const Plugins = require.main.require('./src/plugins')
export const SioPlugins = require.main.require('./src/socket.io/plugins')
export const async = require.main.require('async')
export const winston = require.main.require('winston')
export const nconf = require.main.require('nconf')
