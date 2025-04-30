import { StatusCodes } from "http-status-codes";
import { bodyToShop, bodyToReview } from "../dtos/shop.dto.js";
import { serviceNewShop, serviceNewReview } from "../services/shop.service.js";

export const handleNewShop = async (req, res, next) => {
    console.log("신규 상점 등록 API");
    console.log("Shop: ", req.body);

    const result = await serviceNewShop(bodyToShop(req.body));
    res.status(StatusCodes.OK).json({result});
}

export const handleNewReview = async (req, res, next) => {
    console.log("신규 리뷰 등록 API");
    console.log("Review: ", req.body);

    const result = await serviceNewReview(bodyToReview(req.body));
    res.status(StatusCodes.OK).json({result});
}