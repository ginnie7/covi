import React from "react";
import styled from "styled-components";
import useStats from "../utils/useStats";

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
`;

const StatBlock = styled.div`
  background: #ededed;
  font-size: 2rem;
  text-align: center;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 1px 3px 6px 1px #80808059;
`;

export default function Stats({ url }) {
  const { stats, loading, error } = useStats(url);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error.</p>;
  const recoveryRate = Math.floor(
    (stats.recovered.value / stats.confirmed.value) * 100
  );
  const deathRate = Math.floor(
    (stats.deaths.value / stats.confirmed.value) * 100
  );
  const lastUpd = new Date(stats.lastUpdate).toLocaleString("es-ES");

  return (
    <StatGrid>
      <StatBlock>
        <h3>Confirmed:</h3>
        <span>{stats.confirmed.value}</span>
      </StatBlock>
      <StatBlock>
        <h3>Deaths:</h3>
        <span>{stats.deaths.value}</span>
      </StatBlock>
      <StatBlock>
        <h3>Recovered:</h3>
        <span>{stats.recovered.value}</span>
      </StatBlock>
      <StatBlock>
        <h3>Recovery Rate:</h3>
        <span>{recoveryRate}%</span>
      </StatBlock>
      <StatBlock>
        <h3>Death Rate:</h3>
        <span>{deathRate}%</span>
      </StatBlock>
      <StatBlock>
        <h3>Last update:</h3>
        <span>{lastUpd}</span>
      </StatBlock>
    </StatGrid>
  );
}
