import { useHeadToHeadQuery } from "../generated/graphql";

export const PlayerList = () => {
  const { loading, error, data } = useHeadToHeadQuery();

  if (loading) return <p>Loading...</p>;
  if (error || !data?.headToHead) return <p>Error :(</p>;

  return (
    <div>
      query success Choose a player:{" "}
      {data.headToHead.map(
        (player) => `${player?.firstname} ${player?.lastname}`
      )}
    </div>
  );
};
