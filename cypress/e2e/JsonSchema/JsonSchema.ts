import { Then } from '@badeball/cypress-cucumber-preprocessor'

let Schema = {
  title: 'my Schema',
  type: 'object',
  required: ['id', 'name', 'email'],
  properties: {
    id: {
      type: 'integer',
    },
    email: {
      type: 'string',
    },
    body: {
      type: 'string',
    },
  },
}

Then('JsonSchema testing OK', () => {
  let JsonDataOK = {
    id: 10,
    name: 'cypress',
    email: 'hello@cypress.io',
  }

  expect(JsonDataOK).to.be.jsonSchema(Schema)
})

Then('JsonSchema testing NG', () => {
  let JsonDataNG = {
    name: 'cypress',
    email: 'hello@cypress.io',
  }
  expect(JsonDataNG).to.be.jsonSchema(Schema)
})
