import { prisma } from "../db.config.js";

export const addUser = async (data) => {
    try {
        const existingUser = await prisma.user.findUnique({
            where: { email: data.email },
        });

        if (existingUser) {
            return null;
        }

        const newUser = await prisma.user.create({
            data: {
                email: data.email,
                address: data.address,
                username: data.name,
                gender: data.gender,
                birth: data.birth,
                phoneNumber: data.phoneNumber,
            },
        });

        return newUser.id;
    } catch (err) {
        throw new Error(
            `오류 발생. (${err})`
        );
    }
};

export const getUser = async (userId) => {
    try {
        const user = await prisma.user.findUnique({
            where: { id: userId },
        });

        console.log(user);

        return user;
    } catch (err) {
        throw new Error(
            `오류가 발생했어요. 요청 파라미터를 확인해주세요. (${err})`
        );
    }
};

export const setPreference = async (userId, foodCategoryId) => {
    try {
        await prisma.userFoodCategory.create({
            data: {
                user: {
                    connect: { id: parseInt(userId) }
                },
                foodCategory: { 
                    connect: { id: parseInt(foodCategoryId) }
                }
            },
        });
        
        return; 
    } catch (err) {
        throw new Error(
            `오류가 발생했어요. 요청 파라미터를 확인해주세요. (${err})`
        );
    }
};

export const getUserPreferenceByUserId = async (userId) => {
    try {
        const preferences = await prisma.userFoodCategory.findMany({
            where: { userId: parseInt(userId) },
            include: {
                foodCategory: { 
                    select: {
                        food: true,
                    },
                },
            },
            orderBy: {
                foodCategoryId: 'asc',
            },
        });

        return preferences.map(p => ({
            food_id: p.foodId,
            user_id: p.userId,
            food: p.foodCategory.food
        }));
    } catch (err) {
        throw new Error(
            `오류가 발생했어요. 요청 파라미터를 확인해주세요. (${err})`
        );
    }
};

export const getUserReviewById = async (userId) => {
    try {
        const reviews = await prisma.review.findMany({
            where: { userId: userId },
        });

        console.log(reviews);

        return reviews;    
    } catch (err) {
        throw new Error(
            `오류가 발생했어요. 요청 파라미터를 확인해주세요. (${err})`
        );
    }
}

export const getUserMissionById = async (userId) => {
    try {
        const missions = await prisma.mission.findMany({
            where: { userId: userId },
        });

        console.log(missions);

        return missions;    
    }catch (err) {
        throw new Error(
            `오류가 발생했어요. 요청 파라미터를 확인해주세요. (${err})`
        );
    }
}

export const getAcceptedUserMission = async (userId) => {
    try{
        const missions = await prisma.missionLog.findMany({
            where: { userId: userId, success: 0 },
            include: {
                mission: {
                    select: {
                        content: true,
                        point: true,
                        shop: {
                            select: {
                                shopName: true,
                            }
                        }
                    }
                },
            },
            orderBy: {
                missionId: 'asc',
            },
        });

        console.log(missions);

        return missions;
    }catch(err){
        throw new Error(
            `오류가 발생했어요. 요청 파라미터를 확인해주세요. (${err})`
        );
    }
}

export const completeUserMission = async (userId, missionId) => {
    try{
        const missionExists = await prisma.missionLog.findUnique({
            where: { missionId_userId: { missionId: missionId, userId: userId } },
        });

        if(missionExists === null){
            throw new Error(`해당 미션이 수락된 목록에 없습니다. ${missionId}`);
        }

        const mission = await prisma.missionLog.update({
            where: {
                missionId_userId: { missionId: missionId, userId: userId }
            },
            data: {
                success: 1,
            }
        })

        return mission;
    }catch(err){
        throw new Error(
            `오류가 발생했어요. 요청 파라미터를 확인해주세요. (${err})`
        );
    }
}