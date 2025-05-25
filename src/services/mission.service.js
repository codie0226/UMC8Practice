import { responseFromMission } from "../dtos/mission.dto.js";
import { 
    getMission,
    addMission,
    acceptMission
 } from "../repositories/mission.repository.js";
 import { NoShopFoundError, MissionNotFoundError } from "../errors/error.js";

export const serviceNewMission = async (newMission) => {
    const newMissionId = await addMission(newMission);
    if(newMissionId === null){
        throw new NoShopFoundError(`해당 상점이 존재하지 않습니다. id=${newMission.shopId}`, newMission.shopId);
    }

    const result = await getMission(newMissionId);

    return responseFromMission(result);
};

export const serviceAcceptMission = async (missionId, userId) => {
    const result = await acceptMission(missionId, userId);
    
    if(result === null){
        throw new MissionNotFoundError(`해당 미션이 존재하지 않습니다. id=${missionId}`, missionId);
    }

    return;
};