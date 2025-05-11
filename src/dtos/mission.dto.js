export const bodyToMission = (body) => {
    return{
        shopId: body.shopId,
        content: body.content,
        point: body.point
    }
};

export const responseFromMission = (mission) => {
    return{
        shopId: mission.shopId,
        shopName: mission.shop.shopName,
        content: mission.content,
        point: mission.point
    }
};