import React from 'react'

const Setup = () => {
  return (
    <ul>
      <li>Clone down this repo: <code>git clone git@github.com:jude-lawson/quantified-self-express.git</code></li>
      <li>Install dependencies: <code>yarn install</code> or <code>npm install</code></li>
      <li>Install the postgresql package globally: <code>yarn global add pg</code> or <code>npm install -g pg</code></li>
      <li>
        Open the postgresql cli in your terminal: <code>psql</code>
        <li>You may receive a message about a missing database and your username. Use the command below to create that database and continue using psql:
          <code>createdb '&lt;your_username_cited_from_the_error&gt;'</code>
        </li>
      </li>
      <li>After successfully accessing psql, create your development database: <code>CREATE DATABASE &lt;your_development_database_name&gt;</code>
      </lI.
    </ul> 

    Initialize knex: knex init

    Open the created knexfile.js and configure it for development using something like what's below:

NOTE: The file should already be setup properly, but you may have to update the database connection name in the development and test environments

  module.exports = {
    development: {
      client: 'pg',
      connection:  'postgres://localhost/quantified_self_express_development',
      migrations: {
        directory: './db/migrations'
      },
      userNullAsDefault: true
    },
    ...
  };

    Run all existing migrations: knex migrate:latest
    Run all tests to ensure that they are passing: yarn test
    Run the app locally to make sure there are no server-side errors: yarn start

  );
}

export default Setup;
