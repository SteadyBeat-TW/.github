const { graphql } = require("@octokit/graphql");

const PROJECT_ID = "PVT_kwDOCkvOh84A5JVQ"; // 換成你的 Project v2 node_id

async function main() {
  const graphqlWithAuth = graphql.defaults({
    headers: { authorization: `token ${process.env.GH_TOKEN}` },
  });

  const project = await graphqlWithAuth(`
    query {
      node(id: "${PROJECT_ID}") {
        __typename
        ... on ProjectV2 {
          fields(first: 20) {
            nodes {
              __typename
              ... on ProjectV2FieldCommon {
                id
                name
                dataType
              }
              ... on ProjectV2SingleSelectField {
                id
                name
                options { id name }
              }
              ... on ProjectV2IterationField {
                id
                name
              }
            }
          }
          items(first: 5) {
            nodes {
              id
              content {
                __typename
                ... on Issue { id title }
              }
              fieldValues(first: 10) {
                nodes {
                  __typename
                }
              }
            }
          }
        }
      }
    }
  `);

  console.log("=== Fields ===");
  console.log(JSON.stringify(project.node.fields.nodes, null, 2));

  console.log("=== Items ===");
  console.log(JSON.stringify(project.node.items.nodes, null, 2));
}

main().catch(e => { console.error(e); process.exit(1); });
