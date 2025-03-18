export interface ArtistCredit extends ArtistMinimal {
  joinphrase: string | null;
}

export interface ReleaseMinimal {
  id: string;
  title: string;
  date: string | null;
  disambiguation: string | null;
  cover_image: string | null;
  "artist-credit": ArtistCredit[];
}

export interface ReleaseGroup extends ReleaseMinimal {
  "primary-type": string | null;
}

export interface Release extends ReleaseMinimal {
  artistId: string;
  date_for_display: string;
  "release-group": ReleaseGroup | null;
  media: Media[];
}

export interface GroupedReleases {
  [releaseGroupId: string]: Release[];
};

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
}

export interface Artist extends ArtistMinimal {
  type: "Person" | "Group";
  aliases: { name: string }[];
  members: Member[];
  lifeSpan: {
    begin: string | null;
    end: string | null;
    ended: boolean;
  };
  beginArea: {
    name: string | null;
  };
}

export interface Member {
  id: string;
  name: string;
  begin: string | null;
  end: string | null;
}

export interface ArtistSearchResult {
  artists: Artist[];
  count: number;
}

export interface ReleaseResult {
  releases: Release[];
  "release-count": number;
}