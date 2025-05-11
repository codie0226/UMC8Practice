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

export const serviceNewShop = async (newShop) => {
    const newShopId = await addShop(newShop);

    if(newShopId === null){
        throw new Error(`해당 지역이 존재하지 않습니다. id=${newShop.areaId}}`);
    }

    const newShopInfo = await getShop(newShopId);

    return responseFromShop(newShopInfo);
}

export const serviceNewReview = async (newReview) => {
    const newReviewId = await addReview(newReview);

    if(newReviewId === null){
        throw new Error(`해당 상점이 존재하지 않습니다. id=${newReview.shopId}}`);
    }

    const newReviewInfo = await getReview(newReviewId);

    return responseFromReview(newReviewInfo);
}

export const serviceGetMissionByShopId = async (shopId) => {
    const missions = await getMissionByShopId(shopId);

    if(missions.length === 0){
        throw new Error(`미션이 존재하지 않습니다. shopId: ${shopId}`);
    }

    return missions;
}