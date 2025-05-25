import { StatusCodes } from "http-status-codes";
import {
    serviceNewMission,
    serviceAcceptMission
} from "../services/mission.service.js";
import {
    bodyToMission
} from "../dtos/mission.dto.js";

export const handleNewMission = async(req, res, next) => {
    /*
    #swagger.tags = ['Mission']
    #swagger.summary = '새 미션 생성 API'
    #swagger.description = '새로운 미션을 시스템에 등록합니다. 요청 시 상점 ID(shopId)가 유효해야 합니다.'
    #swagger.requestBody = {
        required: true,
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        shopId: { type: "number", example: 1 },
                        content: { type: "string", example: "리뷰 작성하고 100포인트 받기" },
                        point: { type: "number", example: 100 },
                        deadline: { type: "string", format: "date-time", example: "2024-12-31T23:59:59" }
                    }
                }
            }
        }
    }
    #swagger.responses[200] = {
        description: "미션 등록 성공 응답",
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        resultType: { type: "string", example: "success" },
                        error: { type: "object", nullable: true, example: null },
                        result: {
                            type: "object",
                            properties: {
                                id: { type: "number" },
                                shopId: { type: "number" },
                                content: { type: "string" },
                                point: { type: "number" },
                                deadline: { type: "string", format: "date-time" },
                                createdAt: { type: "string", format: "date-time" },
                                updatedAt: { type: "string", format: "date-time", nullable: true }
                            }
                        }
                    }
                }
            }
        }
    }
    #swagger.responses[404] = {
        description: "미션 등록 실패 응답 (예: 상점 ID를 찾을 수 없음)",
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        resultType: { type: "string", example: "error" },
                        error: {
                            type: "object",
                            properties: {
                                errorCode: { type: "string", example: "E003" },
                                reason: { type: "string", example: "해당 상점이 존재하지 않습니다. id=1" },
                                data: { type: "string", example: "요청한 ID 또는 관련 정보" }
                            }
                        },
                        result: { type: "object", nullable: true, example: null }
                    }
                }
            }
        }
    }
    #swagger.responses[500] = {
        description: "서버 에러",
        content: {
            "application/json": {
                schema: {
                    $ref: "#/components/schemas/err500"
                }
            }
        }
    }
    */
    console.log("새 미션 생성");
    console.log("Mission: ", req.body);

    try{
        const result = await serviceNewMission(bodyToMission(req.body));
        res.status(StatusCodes.OK).success(result);
    }catch(err){
        next(err);
    }
};

export const handleAcceptMission = async(req, res, next) => {
    /*
    #swagger.tags = ['Mission']
    #swagger.summary = '유저 미션 수락 API'
    #swagger.description = '사용자가 특정 미션을 수락합니다. (현재 userId는 1로 고정되어 있습니다)'
    #swagger.parameters['id'] = {
        in: 'path',
        description: '미션 ID',
        required: true,
        type: 'number',
        example: 1
    }
    #swagger.responses[200] = {
        description: "미션 수락 성공 응답",
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        resultType: { type: "string", example: "success" },
                        error: { type: "object", nullable: true, example: null },
                        result: { type: "string", example: "success" }
                    }
                }
            }
        }
    }
    #swagger.responses[404] = {
        description: "미션 수락 실패 응답 (예: 미션 ID를 찾을 수 없음)",
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        resultType: { type: "string", example: "error" },
                        error: {
                            type: "object",
                            properties: {
                                errorCode: { type: "string", example: "E005" },
                                reason: { type: "string", example: "해당 미션이 존재하지 않습니다. id=1" },
                                data: { type: "string", example: "요청한 ID 또는 관련 정보" }
                            }
                        },
                        result: { type: "object", nullable: true, example: null }
                    }
                }
            }
        }
    }
    #swagger.responses[500] = {
        description: "서버 에러",
        content: {
            "application/json": {
                schema: {
                    $ref: "#/components/schemas/err500"
                }
            }
        }
    }
    */
    console.log("미션 수락");
    console.log("Mission: ", req.params.id);

    try{
        await serviceAcceptMission(req.params.id, 1);
        res.status(StatusCodes.OK).success("success");
    }catch(err){
        next(err);
    }
};