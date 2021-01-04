import React, { useState } from "react";
import { fetchIntroFromPrismic } from "../helpers";

export function Intro(props) {
  const [intro, setIntro] = useState([]);
  (async () => {
    const results = await fetchIntroFromPrismic();
    setIntro(results[0].data);
  })();

  return (
    intro && (
      <div className="intro">
        <h3 className="text">
          I'm <b>Flavio Bernasconi</b> a <b>frontend developer</b> based in
          Como, Italy.
          <br />
          You can check all my code on my
          {intro?.linkwork?.url && (
            <a target="_blanck" href={intro?.linkwork?.url}>
              {intro?.name[0].text}.
            </a>
          )}
        </h3>
      </div>
    )
  );
}
