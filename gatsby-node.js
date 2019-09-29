/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { introspectionQuery, graphql, printSchema } = require("gatsby/graphql");
const write = require("write");

/**
 * Generate GraphQL schema.json file to be read by tslint
 * Thanks: https://gist.github.com/kkemple/6169e8dc16369b7c01ad7408fc7917a9
 */
exports.onPostBootstrap = async ({ store }) => {
    try {
        const { schema } = store.getState()
        const jsonSchema = await graphql(schema, introspectionQuery)
        const sdlSchema = printSchema(schema)

        write.sync("schema.json", JSON.stringify(jsonSchema.data), {})
        write.sync("schema.graphql", sdlSchema, {})

        console.log("\n\n[gatsby-plugin-extract-schema] Wrote schema\n") // eslint-disable-line
    } catch (error) {
        console.error(
            "\n\n[gatsby-plugin-extract-schema] Failed to write schema: ",
            error,
            "\n"
        )
    }
}
