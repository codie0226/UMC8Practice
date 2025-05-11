import { prisma } from "../db.config.js";

export const addShop = async (shopInfo) => {
    try{
        const areaExists = await prisma.area.findUnique({
            where: { id: shopInfo.areaId },
        });

        if(!areaExists){
            return null;
        }

        const newShop = await prisma.shop.create({
            data: {
                shopName: shopInfo.shopName,         
                areaId: shopInfo.areaId,             
                shopAddress: shopInfo.shopAddress,   
                shopCategory: shopInfo.shopCategory, 
            },
        });

        return newShop.id;
    } catch(err){
        throw new Error(
            `오류 발생. (${err})`
        );
    }
};

export const getShop = async (shopId) => {
    try{
        const shop = await prisma.shop.findUnique({
            where: { id: parseInt(shopId) },
        });

        return shop; // findUnique returns the object or null
    } catch(err){
        throw new Error(
            `오류 발생. (${err})`
        );
    }
};

export const addReview = async (reviewInfo) => {
    try{
        const shopExists = await prisma.shop.findUnique({
            where: { id: reviewInfo.shopId },
        });

        if(!shopExists){
            return null;
        }

        const newReview = await prisma.review.create({
            data: {
                userId: reviewInfo.userId,                
                shopId: reviewInfo.shopId,                
                reviewTitle: reviewInfo.reviewTitle,      
                reviewContent: reviewInfo.reviewContent,  
                reviewStars: reviewInfo.reviewStars,      
            },
        });

        return newReview.id;
    } catch(err){
        throw new Error(
            `오류 발생. (${err})`
        );
    }
};

export const getReview = async (reviewId) => {
    try{
        const review = await prisma.review.findUnique({
            where: { id: parseInt(reviewId) },
        });

        return review;
    } catch(err){
        throw new Error(
            `오류 발생. (${err})`
        );
    }
}; 

export const getMissionByShopId = async (shopId) => {
    try{
        const missions = await prisma.mission.findMany({
            where: { shopId: shopId },
        });

        return missions
    } catch(err){
        throw new Error(
            `오류 발생. (${err})`
        );
    }
};