export const bodyToShop = (body) => {
    return {
        shopCategory: body.shopCategory,
        areaId: body.areaId,
        shopName: body.shopName,
        shopAddress: body.shopAddress
    }
}

export const responseFromShop = (shop) => {
    return {
        shopName: shop.shopName,
        areaId: shop.areaId,
        shopAddress: shop.shopAddress,
        shopCategory: shop.shopCategory
    }
}

export const bodyToReview = (body) => {
    return {
        userId: body.userId,
        shopId: body.shopId,
        reviewTitle: body.reviewTitle,
        reviewContent: body.reviewContent,
        reviewStars: body.reviewStars
    }
}

export const responseFromReview = (review) => {
    return{
        reviewTitle: review.reviewTitle,
        reviewContent: review.reviewContent,
        reviewStars: review.reviewStars
    }
}