'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TarefasSchema extends Schema {
  up () {
    this.create('tarefas', (table) => {
      table.string('descricao')
      table.boolean('done')
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('tarefas')
  }
}

module.exports = TarefasSchema
