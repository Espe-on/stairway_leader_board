export async function getCurrentLeaderboard(){
    const apiUrl: string = "https://www.stairwaylearning.com/api/v1/stub";
    const request: string = "leaderboard";
    const apiResponse = await fetch(`${apiUrl}/${request}`);
    if (!apiResponse.ok) {
        throw Error;
    }
    return await apiResponse.json();
}