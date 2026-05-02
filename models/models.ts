export type RemoteValueState = string | null | undefined;

export interface ArtistCredit extends ArtistMinimal {
  joinphrase: string | null;
}

export interface ReleaseMinimal {
  id: string;
  title: string;
  date: string | null;
  disambiguation: string | null;
  releaseGroupId: string | null;
  cover_url: RemoteValueState;
}

export interface ReleaseGroup {
  id: string;
  title: string;
  date: string | null;
  disambiguation: string | null;
  "primary-type": string | null;
}

export interface ArtistReleaseGroup extends ReleaseGroup {
  releaseIds: string[];
}

export interface Release extends ReleaseMinimal {
  artistId: string;
  date_for_display: string;
  "release-group": ReleaseGroup | null;
  "artist-credit": ArtistCredit[];
  media: Media[];
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
}

export interface ArtistMinimal {
  id: string;
  disambiguation: string | null;
  name: string;
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
  artistType: "Person" | "Group";
  type: "member of band" | "subgroup";
  direction: "forward" | "backward"
}

export interface ArtistSearchResult {
  artists: Artist[];
  count: number;
}

export interface ReleaseResult {
  releases: Release[];
  "release-count": number;
}

export type NewReleasesResult = {
  releases: Release[];
  releaseCoverTaskId: string;
};

export type ReleaseGroupCoverTaskResult = {
  artistId: string;
  covers: { [releaseGroupId: string]: RemoteValueState };
};

export type ReleaseGroupReleaseCoverTaskResult = {
  releaseGroupId: string;
  covers: { [releaseId: string]: RemoteValueState };
};

export type NewReleaseCoverTaskResult = {
  covers: { [releaseId: string]: RemoteValueState };
};

export type TrackLyricsTaskResult = {
  releaseId: string;
  tracks: { [trackId: string]: RemoteValueState };
};

export type ArtistProfileImageTaskResult = {
  artists: { [artistId: string]: RemoteValueState };
};

export type ReleaseGroupReleaseListItem = {
  id: string;
  title: string;
};
