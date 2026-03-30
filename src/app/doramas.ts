export type Review = {
  icon: string;
  reviewerName: string;
  rate: number;
  final: number;
};

export type Dorama = {
  id: string;
  name: string;
  originalName: string;
  year: number;
  genre: string;
  description: string;
  video: string;
  poster: string;
  reviews: Review[];
  spotifyTracks: string[];
};

export const doramas: Dorama[] = [
  {
    id: "alice",
    name: "Alice in Borderlands",
    originalName: "今際の国のアリス",
    year: 2020,
    genre: "Thriller · Survival · Sci-Fi",
    description: "Un grupo de jóvenes es transportado a una versión alternativa de Tokio donde deben jugar peligrosos juegos para sobrevivir.",
    video: "https://res.cloudinary.com/dwahppn3p/video/upload/v1774846187/AIBVID_uu8kyr.mp4",
    poster: "/AIB.png",
    reviews: [
      { icon: "/ico1.png", reviewerName: "Jhosabeth", rate: 4, final: 5 },
      { icon: "/ico2.png", reviewerName: "Sebastian", rate: 4, final: 5 },
    ],
    spotifyTracks: [
      "https://open.spotify.com/embed/track/70LcF31zb1H0PyJoS1Sx1r?utm_source=generator",
    ],
  },
  {
    id: "bonapetit",
    name: "Bon Appétit, Your Majesty",
    originalName: "대군-왕의 사랑",
    year: 2025,
    genre: "Romance · Historical · Comedy",
    description: "Un rey que solo come comida sencilla conoce a una cocinera plebeya con un talento extraordinario. Entre platos y secretos palaciegos, ambos descubren que el camino al corazón pasa por la cocina.",
    video: "https://res.cloudinary.com/dwahppn3p/video/upload/v1774846215/bonVID_dmrwiv.mp4",
    poster: "/BAYM.png",
    reviews: [
      { icon: "/ico1.png", reviewerName: "Jhosabeth", rate: 5, final: 5 },
      { icon: "/ico2.png", reviewerName: "Sebastian", rate: 4, final: 4 },
    ],
    spotifyTracks: [
      "https://open.spotify.com/embed/track/3BFyF2M5Gh3A4X9m5PkKJ5?utm_source=generator",
    ],
  },
  {
    id: "badmother",
    name: "Bad Mother",
    originalName: "나쁜 엄마",
    year: 2023,
    genre: "Drama · Family · Emotional",
    description: "Una madre que sacrificó todo por su hijo lo ve convertirse en un fiscal corrupto. Cuando él pierde la memoria en un accidente, ella tiene una segunda oportunidad para ser la madre que nunca fue.",
    video: "https://res.cloudinary.com/dwahppn3p/video/upload/v1774846254/BMadreVid_gdk9em.mp4",
    poster: "/BMM.png",
    reviews: [
      { icon: "/ico1.png", reviewerName: "Jhosabeth", rate: 5, final: 5 },
      { icon: "/ico2.png", reviewerName: "Sebastian", rate: 4, final: 5 },
    ],
    spotifyTracks: [
      "https://open.spotify.com/embed/track/1UBKXAzmO6NlBINXjTTYS4?utm_source=generator",
    ],
  },
  {
    id: "chacha",
    name: "Love is Like a Cha-Cha",
    originalName: "사랑은 체체체",
    year: 2021,
    genre: "Romance · Comedy · Music",
    description: "Dos personas con personalidades completamente opuestas se ven obligadas a trabajar juntas en una competición de baile. Lo que comienza como una rivalidad se convierte poco a poco en un ritmo que ninguno de los dos esperaba.",
    video: "https://res.cloudinary.com/dwahppn3p/video/upload/v1774846219/ChachaVid_flw29z.mp4",
    poster: "/chacha.png",
    reviews: [
      { icon: "/ico1.png", reviewerName: "Jhosabeth", rate: 4, final: 4 },
      { icon: "/ico2.png", reviewerName: "Sebastian", rate: 3, final: 4 },
    ],
    spotifyTracks: [
      "https://open.spotify.com/embed/track/4Xz6vXBjA79DA0lgPm9Mfl?utm_source=generator",
    ],
  },
  {
    id: "plankton",
    name: "Mr. Plankton",
    originalName: "미스터 플랑크톤",
    year: 2024,
    genre: "Romance · Drama · Bittersweet",
    description: "Un hombre con una enfermedad terminal y una mujer que huye de su propia boda se encuentran por casualidad. Juntos, la vida los arrastra como el plancton: pequeños, frágiles y llevados por la corriente.",
    video: "https://res.cloudinary.com/dwahppn3p/video/upload/v1774846216/PlanktonVid_eaychc.mp4",
    poster: "/plankton.png",
    reviews: [
      { icon: "/ico1.png", reviewerName: "Jhosabeth", rate: 5, final: 5 },
      { icon: "/ico2.png", reviewerName: "Sebastian", rate: 5, final: 5 },
    ],
    spotifyTracks: [
      "https://open.spotify.com/embed/track/09K785cBEzPp4sGYqGyrpI?utm_source=generator",
    ],
  },
  {
    id: "queenoftears",
    name: "Queen of Tears",
    originalName: "눈물의 여왕",
    year: 2024,
    genre: "Romance · Drama · Melodrama",
    description: "La heredera de un conglomerado empresarial y su marido han dejado de amarse tras tres años de matrimonio. Cuando a ella le diagnostican una enfermedad terminal, deben redescubrir lo que significaban el uno para el otro antes de que sea demasiado tarde.",
    video: "https://res.cloudinary.com/dwahppn3p/video/upload/v1774846219/QOTVID_bfkacg.mp4",
    poster: "/QOT.png",
    reviews: [
      { icon: "/ico1.png", reviewerName: "Jhosabeth", rate: 5, final: 5 },
      { icon: "/ico2.png", reviewerName: "Sebastian", rate: 5, final: 5 },
    ],
    spotifyTracks: [
      "https://open.spotify.com/embed/track/5F3032rq3MJG7cDjRtj0wo?utm_source=generator",
    ],
  },
];