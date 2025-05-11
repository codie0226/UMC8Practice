import { prisma } from "../db.config.js";

export const addMission = async (newMission) => {
    try{
        const shopExists = await prisma.shop.findUnique({
            where: { id: newMission.shopId },
        });

        if(!shopExists){
            return null;
        }

        const createdMission = await prisma.mission.create({
            data: {
                shopId: newMission.shopId,
                content: newMission.content,
                point: newMission.point,
            },
        });

        return createdMission.id;
    }catch(err){
        throw new Error(
            `오류 발생. (${err})`
        );
    }
};

export const getMission = async (missionId) => {
    try{
        const mission = await prisma.mission.findUnique({
            where: { id: missionId },
            include: {
                shop: {
                    select: { shopName: true },
                },
            },
        });

        if (!mission) {
            return null;
        }

        console.log('추가성공: ', mission);

        return mission;
    }catch(err){
        throw new Error(
            `오류 발생. (${err})`
        );
    }
};

export const acceptMission = async (missionId, userId) => {
    try{
        const missionExists = await prisma.mission.findUnique({
            where: { id: parseInt(missionId) },
        });

        if(!missionExists){
            return null;
        }

        const newMissionLog = await prisma.missionLog.create({ 
            data: {
                missionId: missionId, 
                userId: userId,       
            },
        });

        return newMissionLog.id;
    }catch(err){
        throw new Error(
            `오류 발생. (${err})`
        );
    }
};