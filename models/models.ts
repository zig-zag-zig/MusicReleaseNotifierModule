export interface ArtistCredit extends ArtistMinimal {
  joinphrase: string | null;
}

export interface Release {
  id: string;
  title: string;
  artistId: string;
  date: string | null;
  disambiguation: string | null;
  date_for_display: string;
  "release-group": { "primary-type": string | null, id: string };
  "artist-credit": ArtistCredit[];
  media: Media[];
  cover_image: string | null;
}

export interface Media {
  "track-count": number;
  tracks: Track[] | null;
}

export interface Track {
  id: string;
  title: string;
  "artist-credit": ArtistCredit[];
  length: number | null;
  lyrics: string | null;
}

export interface ArtistMinimal {
  id: string;
  disambiguation: string | null;
  name: string;
  image: string | null;
  profile: string | null;
}

export interface Artist extends ArtistMinimal {
  aliases: { name: string }[];
  releases: Release[];
  relations: { url: { resource: string } }[];
}

export interface ArtistSearchResult {
  artists: Artist[];
  count: number;
}

export interface ReleaseResult {
  releases: Release[];
  "release-count": number;
}