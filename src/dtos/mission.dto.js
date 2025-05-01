export const bodyToMission = (body) => {
    return{
        shopId: body.shopId,
        content: body.content,
        point: body.point
    }
};

export const responseFromMission = (mission) => {
    return{
        shopId: mission.shop_id,
        shopName: mission.shop_name,
        content: mission.content,
        point: mission.point
    }
};