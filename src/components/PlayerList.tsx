import { useState } from "react";
import { Player as PlayerType, useHeadToHeadQuery } from "../generated/graphql";
import { Player } from "./Player";

export const PlayerList = () => {
  const [displayedPlayer, setDisplayedPlayer] = useState<
    PlayerType | undefined
  >(undefined);
  const { loading, error, data } = useHeadToHeadQuery();

  if (loading) return <p>Loading...</p>;
  if (error || !data?.headToHead) return <p>Error :(</p>;

  return (
    <div>
      <div>
        Choose a player:{" "}
        {data.headToHead.map((player: PlayerType | undefined | null) => (
          <span
            key={`${player?.firstname}-${player?.firstname}`}
            onClick={() => player && setDisplayedPlayer(player)}
          >{`${player?.firstname} ${player?.lastname}`}</span>
        ))}
      </div>
      <div>{displayedPlayer && <Player player={displayedPlayer} />}</div>
    </div>
  );
};
