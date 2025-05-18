import { StatusCodes } from "http-status-codes";
import { bodyToUser } from "../dtos/user.dto.js";
import { 
    getUserReview,
    serviceGetUserMission,
    userSignUp,
    serviceCompleteUserMission
} from "../services/user.service.js";

export const handleUserSignUp = async (req, res, next) => {
    console.log('회원가입 요청.');
    console.log("body: ", req.body);
    
    try{
        const user = await userSignUp(bodyToUser(req.body));
        res.status(StatusCodes.OK).success(user);
    }catch(err){
        next(err);
    }
};

export const handleGetUserReview = async (req, res, next) => {
    console.log('리뷰 조회 요청.');
    console.log("userId: ", req.params.id);

    try{
        const reviews = await getUserReview(parseInt(req.params.id));
        res.status(StatusCodes.OK).success(reviews);
    }catch(err){
        next(err);
    }
};

export const handleGetAcceptedUserMission = async (req, res, next) => {
    console.log('미션 조회 요청.');
    console.log("userId: ", req.params.id);
    
    try{
        const missions = await serviceGetUserMission(parseInt(req.params.id));
        res.status(StatusCodes.OK).success(missions);
    }catch(err){
        next(err);
    }
};

export const handleCompleteUserMission = async (req, res, next) => {
    console.log('미션 완료 요청.');
    console.log("userId: ", req.params.id);
    console.log("missionId: ", req.params.mid);

    try{
        await serviceCompleteUserMission(parseInt(req.params.id), parseInt(req.params.mid));
        res.status(StatusCodes.OK).success("success");
    }catch(err){
        next(err);
    }
}