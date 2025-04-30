import { StatusCodes } from "http-status-codes";
import {
    serviceNewMission
} from "../services/mission.service.js";
import {
    bodyToMission
} from "../models/mission.dto.js";

export const handleNewMission = async(req, res, next) => {
    console.log("새 미션 생성");
    console.log("Mission: ", req.body);

    const result = await serviceNewMission(bodyToMission(req.body));
    res.status(StatusCodes.OK).json({result});
}