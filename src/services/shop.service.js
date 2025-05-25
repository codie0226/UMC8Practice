import { 
    addShop,
    getShop,
    addReview,
    getReview,
    getMissionByShopId
} from "../repositories/shop.repository.js"

import {
    responseFromShop,
    responseFromReview
} from "../dtos/shop.dto.js"
import { 
    AreaNotFoundError,
    NoShopFoundError,
    MissionNotFoundError
} from "../errors/error.js";

export const serviceNewShop = async (newShop) => {
    const newShopId = await addShop(newShop);
    if(newShopId === null){
        throw new AreaNotFoundError(`해당 지역이 존재하지 않습니다. id=${newShop.areaId}`, newShop.areaId);
    }

    const newShopInfo = await getShop(newShopId);

    return responseFromShop(newShopInfo);
}

export const serviceNewReview = async (newReview) => {
    const newReviewId = await addReview(newReview);

    if(newReviewId === null){
        throw new NoShopFoundError(`해당 상점이 존재하지 않습니다. id=${newReview.shopId}`, newReview.shopId);
    }

    const newReviewInfo = await getReview(newReviewId);

    return responseFromReview(newReviewInfo);
}

export const serviceGetMissionByShopId = async (shopId) => {
    const missions = await getMissionByShopId(shopId);

    if(missions.length === 0){
        throw new MissionNotFoundError(`해당 상점에 미션이 존재하지 않습니다. shopId: ${shopId}`, { shopId });
    }

    return missions;
}