import {pool} from "../db.config.js"

export const addShop = async (shopInfo) => {
    const conn = await pool.getConnection();

    try{
        const [confirm] = await pool.query(
            `SELECT EXISTS(SELECT 1 FROM area WHERE id = ?) as isExistArea;`,
            shopInfo.areaId
        );

        if(!confirm[0].isExistArea){
            return null;
        }

        const [result] = await pool.query(
            `INSERT INTO shop (shop_name, area_id, shop_address, shop_category) VALUES (?, ?, ?, ?);`,
            [shopInfo.shopName, shopInfo.areaId, shopInfo.shopAddress, shopInfo.shopCategory]
        );

        return result.insertId;
    } catch(err){
        throw new Error(
            `오류 발생. (${err})`
        );
    } finally{
        conn.release();
    }
};

export const getShop = async (shopId) => {
    const conn = await pool.getConnection();

    try{
        const [shop] = await pool.query(`SELECT * FROM shop WHERE id = ?;`, shopId);

        if(shop.length === 0){
            return null;
        }

        return shop[0];
    } catch(err){
        throw new Error(
            `오류 발생. (${err})`
        );
    } finally{
        conn.release();
    }
};

export const addReview = async (reviewInfo) => {
    const conn = await pool.getConnection();

    try{
        const [confirm] = await pool.query(
            `SELECT EXISTS(SELECT 1 FROM shop WHERE id = ?) as isExistShop;`,
            reviewInfo.shopId
        );

        if(!confirm[0].isExistShop){
            return null;
        }

        const [result] = await pool.query(
            `INSERT INTO review (user_id, shop_id, review_title, review_content, review_stars) VALUES (?, ?, ?, ?, ?);`,
            [reviewInfo.userId, reviewInfo.shopId, reviewInfo.reviewTitle, reviewInfo.reviewContent, reviewInfo.reviewStars]
        );

        return result.insertId;
    } catch(err){
        throw new Error(
            `오류 발생. (${err})`
        );
    } finally{
        conn.release();
    }
};

export const getReview = async (reviewId) => {
    const conn = await pool.getConnection();

    try{
        const [review] = await pool.query(`SELECT * FROM review WHERE id = ?;`, reviewId);

        if(review.length === 0){
            return null;
        }

        return review[0];
    } catch(err){
        throw new Error(
            `오류 발생. (${err})`
        );
    } finally{
        conn.release();
    }
}; 

