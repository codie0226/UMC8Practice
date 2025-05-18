import { StatusCodes } from "http-status-codes";
import {
    serviceNewMission,
    serviceAcceptMission
} from "../services/mission.service.js";
import {
    bodyToMission
} from "../dtos/mission.dto.js";

export const handleNewMission = async(req, res, next) => {
    console.log("새 미션 생성");
    console.log("Mission: ", req.body);

    try{
        const result = await serviceNewMission(bodyToMission(req.body));
        res.status(StatusCodes.OK).success(result);
    }catch(err){
        next(err);
    }
};

export const handleAcceptMission = async(req, res, next) => {
    console.log("미션 수락");
    console.log("Mission: ", req.params.id);

    try{
        await serviceAcceptMission(req.params.id, 1);
        res.status(StatusCodes.OK).success("success");
    }catch(err){
        next(err);
    }
};