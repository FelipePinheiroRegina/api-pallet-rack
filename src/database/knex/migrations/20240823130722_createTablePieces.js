const knex = require('knex')

exports.up = knex => knex.schema.createTable('pieces', table => {
    table.increments('id')
    table.text('name').notNullable()
    table.text('code').notNullable()
    table.text('pallet_rack').notNullable()
    table.enu('company', ["Patral", "Gtex"], {useNative: true}).notNullable()

    table.integer('amount').defaultTo(0)
    table.boolean('look').defaultTo(false)

    table.time('hours_down')

    table.timestamp('created_at').default(knex.fn.now())
    table.timestamp('updated_at').default(knex.fn.now())
})

exports.down = knex => knex.schema.dropTable('pieces')