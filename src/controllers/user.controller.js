import { StatusCodes } from "http-status-codes";
import { bodyToUser } from "../dtos/user.dto.js";
import { userSignUp } from "../services/user.service.js";

export const handleUserSignUp = async (req, res, next) => {
    console.log('회원가입 요청.');
    console.log("body: ", req.body);
    
    try{
        const user = await userSignUp(bodyToUser(req.body));
        res.status(StatusCodes.OK).json({result: user});
    }catch(err){
        res.status(StatusCodes.BAD_REQUEST).json({error: err.message});
    }
};