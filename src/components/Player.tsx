import "./Player.css";
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
    <div className="container">
      <h2 className="header">
        <img className="flag" alt="country" src={country.picture.url} />{" "}
        {`${firstname} ${lastname} (${sex === "MAN" ? "homme" : "femme"})`}
      </h2>
      <div className="stats-container">
        <div>
          <img alt="player" src={picture.url} />
        </div>
        <div className="playerData">
          <div>
            Rank: {rank} ({points} points)
          </div>
          <div>Weight: {`${weight / 1000} kg`}</div>
          <div>Height: {`${height / 100}`.replace(/\./g, "m")}</div>
          <div>{`${age} years old`}</div>
          {last.map((win, index) =>
            win ? (
              <span key={index} className="win">
                W
              </span>
            ) : (
              <span key={index} className="loose">
                L
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
};
