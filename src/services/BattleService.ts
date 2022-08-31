import { createNewUser, gatterUserInfo } from "../repositories/BattleRepository.js";

export async function createNewBattle(firstUserInfo: object[], secondUserInfo: object[], names: object[]) {
    const firstUserStars = getStarsCount(firstUserInfo);
    const secondUserStars = getStarsCount(secondUserInfo);
    const [firstUser, secondUser] = names;

    const { rows: firstUserRows } = await gatterUserInfo(firstUser);
    const { rows: secondUserRows } = await gatterUserInfo(secondUser);

    if(!firstUserRows[0]) await createNewUser(firstUser);
    if(!secondUserRows[0]) await createNewUser(secondUser);

    if (firstUserStars > secondUserStars) {
        

        return { "winner": firstUser, "loser": secondUser, draw: false }
    } else if (secondUserStars > firstUserStars) {

        return { "winner": secondUser, "loser": firstUser, draw: false }
    } else {

        return { "winner": null, "loser": null, draw: true }
    }
}

function getStarsCount(userDirs): number {
    let starsCount = 0;

    for (const dir of userDirs) {
        starsCount += dir.stargazers_count;
    }

    return starsCount;
}