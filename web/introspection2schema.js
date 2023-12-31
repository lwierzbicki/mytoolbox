/*
npm install yargs
npm install graphql
node introspection2schema.js --path file_path_of_introspection_json 
node introspection2schema.js --path $PWD/schema.json
*/
const yargs = require('yargs');
const graphql = require('graphql');
const fs = require('fs');

const argv = yargs
  .option('path',{
    alias: 'p',
    description: 'Path to introspection json file',
    type: 'String'
  })
  .help()
  .alias('help','h').argv;

const introspection = require(argv.path);

const clientSchema = graphql.buildClientSchema(introspection.data);
const schemaString = graphql.printSchema(clientSchema);


fs.writeFile('schema.graphql', schemaString, err => {
  if (err) {
    console.error(err);
    return;
  }
});

//console.log(schemaString)
