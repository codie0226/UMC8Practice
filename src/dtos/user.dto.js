export const bodyToUser = (body) => {
    const birth = new Date(body.birth);

    return {
        email: body.email,
        name: body.name,
        gender: body.gender,
        birth,
        address: body.address || "",
        phoneNumber: body.phoneNumber,
        preferences: body.preferences
    };
};

export const responseFromUser = (user, preference) => {
    return {
        name: user.username,
        email: user.email,
        gender: user.gender,
        birth: user.birth,
        address: user.address,
        phone_number: user.phone_number,
        preferences: preference.map((pref) => pref.food)
    }
}


export const responseFromMyReview = (reviews) => {
    const result = reviews.map((review) => {
        return {
            id: review.id, 
            shopId: review.shopId, 
            reviewTitle: review.reviewTitle, 
            reviewContent: review.reviewContent, 
            reviewStars: review.reviewStars,
            createdAt: review.createdAt.toDateString(), 
            updatedAt: review.updatedAt
        }});
    return result;
}