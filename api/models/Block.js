/**
 * Block.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  
  primaryKey: 'hash',

  attributes: {

    id: {
      type: 'number',
      required: true,
      unique: true,
    },

    hash: {
      type: 'string',
      required: true,
      unique: true,
      maxLength: 64
    },

    previousHash: {
      type: 'string',
      unique: true,
      maxLength: 64
    },

    dataHash: {
      type: 'string',
      required: true,
      unique: true,
      maxLength: 64
    },

    timestamp: {
      type: 'number',
      required: true,
    },
    
    // reference to transactions
    transactions: {
      collection: 'transaction',
      via: 'block'
    }

  },

};

