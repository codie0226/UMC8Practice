import { 
    responseFromUser,
    responseFromMyReview
} from "../dtos/user.dto.js"

import {
    addUser,
    getUser,
    getUserPreferenceByUserId,
    setPreference,
    getUserReviewById,
    getAcceptedUserMission,
    completeUserMission
} from "../repositories/user.repository.js";

export const userSignUp = async (data) => {
    const joinUserId = await addUser(data);

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

export const getUserReview = async(userId) => {
    const reviews = await getUserReviewById(userId);

    if(reviews.length === 0){
        throw new Error(`리뷰가 존재하지 않습니다. userId: ${userId}`);
    }

    return responseFromMyReview(reviews);
}

export const serviceGetUserMission = async(userId) => {
    const missions = await getAcceptedUserMission(userId);

    if(missions.length === 0){
        throw new Error(`미션이 존재하지 않습니다. userId: ${userId}`);
    }

    return missions;
}

export const serviceCompleteUserMission = async(userId, missionId) => {
    const result = await completeUserMission(userId, missionId);

    if(result === null){
        throw new Error(`미션이 존재하지 않습니다. userId: ${userId}, missionId: ${missionId}`);
    }

    return;
}