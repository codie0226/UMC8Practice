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
        shopName: shop.shop_name,
        areaId: shop.area_id,
        shopAddress: shop.shop_address,
        shopCategory: shop.shop_category
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
        reviewTitle: review.review_title,
        reviewContent: review.review_content,
        reviewStars: review.review_stars
    }
}