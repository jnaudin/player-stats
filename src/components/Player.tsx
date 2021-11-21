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
    <div className="player__container">
      <h2 className="player__header">
        <img className="player__flag" alt="country" src={country.picture.url} />{" "}
        {`${firstname} ${lastname} (${sex === "MAN" ? "homme" : "femme"})`}
      </h2>
      <div className="player__stats-container">
        <div>
          <img alt="player" src={picture.url} />
        </div>
        <div className="player__playerData">
          <div>
            Rank: {rank} ({points} points)
          </div>
          <div>Weight: {`${weight / 1000} kg`}</div>
          <div>Height: {`${height / 100}`.replace(/\./g, "m")}</div>
          <div>{`${age} years old`}</div>
          {last.map((win, index) =>
            win ? (
              <span key={index} className="player__win">
                W
              </span>
            ) : (
              <span key={index} className="player__loose">
                L
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
};
