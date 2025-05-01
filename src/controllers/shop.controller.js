import { StatusCodes } from "http-status-codes";
import { bodyToShop, bodyToReview } from "../dtos/shop.dto.js";
import { serviceNewShop, serviceNewReview } from "../services/shop.service.js";

export const handleNewShop = async (req, res, next) => {
    console.log("신규 상점 등록 API");
    console.log("Shop: ", req.body);

    try{
        const result = await serviceNewShop(bodyToShop(req.body));
        res.status(StatusCodes.OK).json({result});
    }catch(err){
        res.status(StatusCodes.BAD_REQUEST).json({error: err.message});
    }
};

export const handleNewReview = async (req, res, next) => {
    console.log("신규 리뷰 등록 API");
    console.log("Review: ", req.body);

    try{
        const result = await serviceNewReview(bodyToReview(req.body));
        res.status(StatusCodes.OK).json({result});
    }catch(err){
        res.status(StatusCodes.BAD_REQUEST).json({error: err.message});
    }
};