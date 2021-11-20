import { render, waitFor } from "@testing-library/react";
import { Player } from "./Player";
import { Player as PlayerType } from "../generated/graphql";

const PLAYER = {
  firstname: "Stan",
  lastname: "Wawrinka",
  shortname: "S.WAW",
  sex: "MAN",
  picture: {
    url: "https://i.eurosport.com/_iss_/person/pp_clubteam/large/325225.jpg",
    __typename: "Picture",
  },
  country: {
    picture: {
      url: "https://i.eurosport.com/_iss_/geo/country/flag/large/2213.png",
      __typename: "Picture",
    },
    code: "SUI",
    __typename: "Country",
  },
  stats: {
    rank: 21,
    points: 1784,
    weight: 81000,
    height: 183,
    age: 33,
    last: [true, true, true, false, true],
    __typename: "Stats",
  },
  __typename: "Player",
};

test("renders a player", async () => {
  const { getByText } = render(<Player player={PLAYER as PlayerType} />);
    expect(getByText(/Stan Wawrinka/i)).toBeInTheDocument();
    expect(getByText(/Homme/i)).toBeInTheDocument();
    expect(getByText(/Rank: 21/i)).toBeInTheDocument();
    expect(getByText(/1784 points/i)).toBeInTheDocument();
    expect(getByText(/Weight: 81 kg/i)).toBeInTheDocument();
    expect(getByText(/Height: 1m83/i)).toBeInTheDocument();
    expect(getByText(/33 years old/i)).toBeInTheDocument();
});
