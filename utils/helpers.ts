export const nameWithDisambiguation = (disambiguation: string | null, name: string) => disambiguation ? name + ' (' + disambiguation + ')' : name;

export const getReleaseTypes = (): string[] => {
    return [
        'Album',
        'Single',
        'EP',
        'Appearance',
        'Other',
        'Compilation',
        'Soundtrack',
        'Broadcast',
        'Spokenword',
        'Interview',
        'Audiobook',
        'Live',
        'Remix',
        'DJ-Mix',
        'Mixtape/Street'
    ];
}