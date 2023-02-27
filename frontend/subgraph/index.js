import { createClient, gql } from "@urql/core";

const streamReceivedQuery = gql`
query ($receiver: String) {
streams(where: {receiver: $receiver}) {
currentFlowRate
receiver {
  id
}
sender {
  id
}
createdAtTimestamp
streamedUntilUpdatedAt
}
}
`;


export const getStreams = async (receiver) => {

    const client = createClient({
        url: "https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-mumbai",
    });

    const result = await client.query(streamReceivedQuery, {receiver: receiver}).toPromise();

    return result;
}