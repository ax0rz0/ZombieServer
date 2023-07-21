const randomUsernames = [
  "AngelsGrim",
  "Articleadfa",
  "Beheer",
  "Broadwayer",
  "Bulletinges",
  "Chellield",
  "Cookiets",
  "CoverageSlim",
  "DipityZero",
  "Fastba",
  "Freakon",
  "Gatheally",
  "HannahWitty",
  "LessChampion",
  "Mosinoti",
  "ProudSports",
  "Rodeone",
  "Shardinwe",
  "Sizzlingsmy",
  "TaleBorn",
  "Therlete",
  "Tiffeyer",
  "TinnyRay",
  "Updatesseed",
  "VampireMine",
  "Vintagic",
  "Vitytr",
  "WasFinest",
  "WelXcaptain",
  "Willobb",
];

export const randomString = (length: number) => {
  const chars = ["abcdefghijklmnopqrstuvwxyz1234567890"];
  const output = [];
  for (let i = 0; i < length; i++) {
    output.push(chars[0][Math.floor(Math.random() * chars[0].length)]);
  }
  return output.join("");
};

export const randomUsername = () => {
  return randomUsernames[Math.floor(Math.random() * randomUsernames.length)];
};
