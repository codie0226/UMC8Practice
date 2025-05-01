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
        res.status(StatusCodes.OK).json({result});
    }catch(err){
        res.status(StatusCodes.BAD_REQUEST).json({error: err.message});
    }
};

export const handleAcceptMission = async(req, res, next) => {
    console.log("미션 수락");
    console.log("Mission: ", req.params.id);

    try{
        await serviceAcceptMission(req.params.id, 1);
        res.status(StatusCodes.OK).json({result: "success"});
    }catch(err){
        res.status(StatusCodes.BAD_REQUEST).json({error: err.message});
    }
};