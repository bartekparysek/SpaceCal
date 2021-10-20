import { rest } from "msw";

export const handlers = [
  // fetchUpcomingLaunches && fetchLaunchPads
  rest.get(
    "https://api.spacexdata.com/v4/launches/upcoming",
    (req, res, ctx) => {
      return res(
        ctx.json([
          //date_utc, name, launchpad, details ,
          {
            date_utc: "2021-08-29T06:30:00.000Z",
            details: null,
            id: "5fe3b11eb3467846b324216c",
            launchpad: "5e9e4502f509094188566f88",
            name: "CRS-23",
          },
          {
            date_utc: "2021-08-01T00:00:00.000Z",
            details: null,
            id: "60b3b843998a020e76e3284b",
            launchpad: "5e9e4501f509094ba4566f84",
            name: "Starlink-29 (v1.0)",
          },
          {
            date_utc: "2021-08-01T00:00:00.000Z",
            details: null,
            id: "60e3bf0d73359e1e20335c37",
            launchpad: "5e9e4502f509092b78566f87",
            name: "Polar Starlink-1",
          },
          {
            date_utc: "2021-08-01T00:00:00.000Z",
            details: null,
            id: "60b3b85a998a020e76e3284c",
            launchpad: "5e9e4501f509094ba4566f84",
            name: "Starlink-30 (v1.0)",
          },
          {
            date_utc: "2021-09-15T00:00:00.000Z",
            details:
              "Inspiration4 is the world’s first all-civilian mission to space. The mission will be commanded by Jared Isaacman, the 37-year-old founder and Chief Executive Officer of Shift4 Payments and an accomplished pilot and adventurer. Inspiration4 will leave Earth from Kennedy Space Center’s historic Launch Complex 39A, the embarkation point for Apollo and Space Shuttle missions",
            id: "607a37565a906a44023e0866",
            launchpad: "5e9e4502f509094188566f88",
            name: "Inspiration4",
          },
          {
            date_utc: "2021-10-31T00:00:00.000Z",
            details: null,
            id: "5fe3b15eb3467846b324216d",
            launchpad: "5e9e4502f509094188566f88",
            name: "Crew-3",
          },
        ])
      );
    }
  ),
  rest.get("https://api.spacexdata.com/v4/launchpads", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          region: "California",
          locality: "Vandenberg Space Force Base",
          id: "5e9e4501f5090910d4566f83",
          images: { large: ["https://i.imgur.com/7uXe1Kv.png"] },
        },
        {
          region: "Florida",
          locality: "Cape Canaveral",
          id: "5e9e4501f509094ba4566f84",
          images: { large: ["https://i.imgur.com/9oEMXwa.png"] },
        },
        {
          region: "Texas",
          locality: "Boca Chica Village",
          id: "5e9e4502f5090927f8566f85",
          images: { large: ["https://i.imgur.com/ZzTTC5p.png"] },
        },
        {
          region: "Marshall Islands",
          locality: "Omelek Island",
          id: "5e9e4502f5090995de566f86",
          images: { large: ["https://i.imgur.com/GGPgsVs.png"] },
        },
        {
          region: "California",
          locality: "Vandenberg Space Force Base",
          id: "5e9e4502f509092b78566f87",
          images: { large: ["https://i.imgur.com/asp5L08.png"] },
        },
        {
          region: "Florida",
          locality: "Cape Canaveral",
          id: "5e9e4501f509094ba4566f84",
          images: { large: ["https://i.imgur.com/1jwU0Pk.png"] },
        },
      ])
    );
  }),
];
