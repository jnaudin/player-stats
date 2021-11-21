import { render, waitFor } from "@testing-library/react";
import { PlayerList } from "./PlayerList";
import { ApolloProvider } from "@apollo/client";
import { client } from "../apolloClient";

test("renders player choice", async () => {
  const { getByText } = render(
    <ApolloProvider client={client}>
      <PlayerList />
    </ApolloProvider>
  );
  await waitFor(() => {
    expect(getByText(/Choose a player/i)).toBeInTheDocument();
  });
});
