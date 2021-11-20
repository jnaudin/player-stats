import { Player as PlayerType } from "../generated/graphql";

export const Player = ({
  player: {
    firstname,
    lastname,
    sex,
    picture,
    country,
    stats: { rank, points, weight, height, age, last },
  },
}: {
  player: PlayerType;
}) => {
  return (
    <div>
      <h2>
        <img alt="country" src={country.picture.url} />{" "}
        {`${firstname} ${lastname} (${sex === "MAN" ? "homme" : "femme"})`}
      </h2>
      <div>
        <div>
          <img alt="player" src={picture.url} />
        </div>
        <div>
          {rank} - {points} - {weight / 1000} - {height / 1000} - {age} -{" "}
          {last.map((win) => (win ? "W" : "L"))}
        </div>
      </div>
    </div>
  );
};
