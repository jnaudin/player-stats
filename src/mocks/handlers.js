import { graphql } from "msw";
export const handlers = [
  graphql.query("headToHead", (req, res, ctx) => {
    return res(
      ctx.data({
        headToHead: [
          {
            firstname: "Stan",
            lastname: "Wawrinka",
            sex: "MAN",
            picture: {
              url:
                "https://i.eurosport.com/_iss_/person/pp_clubteam/large/325225.jpg",
              __typename: "Picture",
            },
            country: {
              picture: {
                url:
                  "https://i.eurosport.com/_iss_/geo/country/flag/large/2213.png",
                __typename: "Picture",
              },
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
          },
          {
            firstname: "Rafael",
            lastname: "Nadal",
            sex: "MAN",
            picture: {
              url:
                "https://i.eurosport.com/_iss_/person/pp_clubteam/large/435121.jpg",
              __typename: "Picture",
            },
            country: {
              picture: {
                url:
                  "https://i.eurosport.com/_iss_/geo/country/flag/large/2203.png",
                __typename: "Picture",
              },
              __typename: "Country",
            },
            stats: {
              rank: 1,
              points: 1982,
              weight: 85000,
              height: 185,
              age: 33,
              last: [true, false, false, false, true],
              __typename: "Stats",
            },
            __typename: "Player",
          },
        ],
      })
    );
  }),
];
