const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLBoolean
  } = require('graphql');

const queryObj = new GraphQLObjectType({
  name: 'myFirstQuery',
  description: 'a hello world demo',
  fields: {
      hello: {
          name: 'a hello world query',
          description: 'a hello world demo',
          type: GraphQLString,
          args: {
              name: {  // 这里定义参数，包括参数类型和默认值
                  type: GraphQLString,
                  defaultValue: 'Brian'
              }
          },
          resolve(parentValue, args, request) { // 这里演示如何获取参数，以及处理
              return 'hello world ' + args.name + '!';
          }
      },
      person: {
          name: 'personQuery',
          description: 'query a person',
          type: new GraphQLObjectType({ // 这里定义查询结果包含name,age,sex三个字段，并且都是不同的类型。
              name: 'person',
              fields: {
                name: {
                  type: GraphQLString
                },
                age: {
                  type: GraphQLInt
                },
                sex: {
                  type: GraphQLBoolean
                }
              }
          }),
          args: {
              name: {
                  type: GraphQLString,
                  defaultValue: 'Charming'
              }
          },
          resolve(parentValue, args, request) {
              return {
                  name: args.name,
                  age: args.name.length,
                  sex: Math.random() > 0.5
              };
          }
      }
  }
});

module.exports = new GraphQLSchema({
query: queryObj 
});
