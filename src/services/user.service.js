import { responseFromUser} from "../dtos/user.dto.js"

import {
    addUser,
    getUser,
    getUserPreferenceByUserId,
    setPreference
} from "../repositories/user.repository.js";

export const userSignUp = async (data) => {
    const joinUserId = await addUser({
        email: data.email,
        name: data.name,
        gender: data.gender,
        birth: data.birth,
        address: data.address,
        phone_number: data.phone_number
    });

    if (joinUserId === null){
        throw new Error("이미 존재하는 이메일입니다.");
    }

    for (const preference of data.preferences){
        await setPreference(joinUserId, preference);
    }

    const user = await getUser(joinUserId);
    const preference = await getUserPreferenceByUserId(joinUserId);

    return responseFromUser(user, preference);
};
