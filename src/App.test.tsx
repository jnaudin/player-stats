import { render, screen } from "@testing-library/react";
import App from "./App";
import { ApolloProvider } from "@apollo/client";
import { client } from "./apolloClient";

test("renders application title", () => {
  render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
  const linkElement = screen.getByText(/Player stats/i);
  expect(linkElement).toBeInTheDocument();
});
