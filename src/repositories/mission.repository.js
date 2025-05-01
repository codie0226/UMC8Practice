import { pool } from "../db.config.js";

export const addMission = async (newMission) => {
    const conn = await pool.getConnection();

    try{
        const [confirm] = await conn.query('SELECT EXISTS(SELECT 1 FROM shop WHERE id = ?) as isExistShop',
            [newMission.shopId]
        );

        if(!confirm[0].isExistShop){
            return null;
        }

        const [result] = await conn.query('INSERT INTO mission(shop_id, content, point) VALUES(?, ?, ?)',
            [newMission.shopId, newMission.content, newMission.point]
        );

        return result.insertId;
    }catch(err){
        throw new Error(
            `오류 발생. (${err})`
        );
    } finally{
        conn.release();
    }
};

export const getMission = async (missionId) => {
    const conn = await pool.getConnection();

    try{
        const [result] = await conn.query('SELECT mission.*, shop.shop_name FROM mission JOIN shop ON mission.shop_id = shop.id WHERE mission.id = ?',
            [missionId]
        );

        return result[0];
    }catch(err){
        throw new Error(
            `오류 발생. (${err})`
        );
    } finally{
        conn.release();
    }
};

export const acceptMission = async (missionId, userId) => {
    const conn = await pool.getConnection();

    try{
        const [confirm] = await conn.query('SELECT EXISTS(SELECT 1 FROM mission WHERE id = ?) as isExistMission',
            [missionId]
        );

        if(!confirm[0].isExistMission){
            return null;
        }

        const [confirm2] = await conn.query('SELECT EXISTS(SELECT 1 FROM mission_log WHERE mission_id = ? AND user_id = ?) as alreadyAccepted',
            [missionId, userId]
        );

        const [result] = await conn.query('INSERT INTO mission_log(mission_id, user_id) VALUES(?, ?)',
            [missionId, userId]
        );

        return result.insertId;
    }catch(err){
        throw new Error(
            `오류 발생. (${err})`
        );
    } finally{
        conn.release();
    }
};