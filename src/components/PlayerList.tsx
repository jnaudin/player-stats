import { ChangeEvent, useState } from "react";

import "./PlayerList.css"
import { Player as PlayerType, useHeadToHeadQuery } from "../generated/graphql";
import { Select } from "../ui/Select/Select";
import { Player } from "./Player";

const getPlayerFromLastname = (
  lastname: string,
  players: (PlayerType | undefined | null)[]
) => {
  return players.find((player) => player && player.lastname === lastname);
};

export const PlayerList = () => {
  const [displayedPlayer, setDisplayedPlayer] = useState<
    PlayerType["lastname"] | undefined
  >(undefined);
  const { loading, error, data } = useHeadToHeadQuery();

  if (loading) return <p>Loading...</p>;
  if (error || !data?.headToHead) return <p>Error :(</p>;

  const options = data.headToHead.map((player) => ({
    label: `${player?.firstname}${player?.lastname}`,
    value: player?.lastname || "",
  }));

  return (
    <div className="playerList__container">
      <div>
        <Select
          id="player"
          label="Choose a player"
          options={options}
          onChange={(event: ChangeEvent<HTMLSelectElement>) =>
            setDisplayedPlayer(event.target.value)
          }
        />
      </div>
      <div>
        {displayedPlayer && (
          <Player
            player={
              getPlayerFromLastname(
                displayedPlayer,
                data.headToHead
              ) as PlayerType
            }
          />
        )}
      </div>
    </div>
  );
};
