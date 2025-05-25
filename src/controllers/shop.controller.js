import { StatusCodes } from "http-status-codes";
import { bodyToShop, bodyToReview } from "../dtos/shop.dto.js";
import { serviceNewShop, serviceNewReview, serviceGetMissionByShopId } from "../services/shop.service.js";

export const handleNewShop = async (req, res, next) => {
    /*
    #swagger.tags = ['Shop']
    #swagger.summary = '신규 상점 등록 API'
    #swagger.description = '새로운 상점을 시스템에 등록합니다. 요청 시 지역 ID(areaId)가 유효해야 합니다.'
    #swagger.requestBody = {
        required: true,
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        name: { type: "string", example: "맛있는 분식집" },
                        address: { type: "string", example: "서울시 강남구 테헤란로 123" },
                        areaId: { type: "number", example: 1 }
                    }
                }
            }
        }
    }
    #swagger.responses[200] = {
        description: "상점 등록 성공 응답",
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
                                name: { type: "string" },
                                address: { type: "string" },
                                areaId: { type: "number" },
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
        description: "상점 등록 실패 응답 (예: 지역 ID를 찾을 수 없음)",
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        resultType: { type: "string", example: "error" },
                        error: {
                            type: "object",
                            properties: {
                                errorCode: { type: "string", example: "E004" },
                                reason: { type: "string", example: "해당 지역이 존재하지 않습니다. id=1" },
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
    console.log("신규 상점 등록 API");
    console.log("Shop: ", req.body);

    try{
        const result = await serviceNewShop(bodyToShop(req.body));
        res.status(StatusCodes.OK).success(result);
    }catch(err){
        next(err);
    }
};

export const handleNewReview = async (req, res, next) => {
    /*
    #swagger.tags = ['Shop']
    #swagger.summary = '신규 리뷰 등록 API'
    #swagger.description = '특정 상점에 대한 새로운 리뷰를 등록합니다. 요청 시 상점 ID(shopId)가 유효해야 합니다.'
    #swagger.requestBody = {
        required: true,
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        shopId: { type: "number", example: 1 },
                        userId: { type: "number", example: 1 },
                        reviewTitle: { type: "string", example: "최고의 맛집!" },
                        reviewContent: { type: "string", example: "정말 맛있었어요. 또 방문할 거예요." },
                        reviewStars: { type: "number", example: 5, minimum: 0, maximum: 5 }
                    }
                }
            }
        }
    }
    #swagger.responses[200] = {
        description: "리뷰 등록 성공 응답",
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
                                userId: { type: "number" },
                                reviewTitle: { type: "string" },
                                reviewContent: { type: "string" },
                                reviewStars: { type: "number" },
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
        description: "리뷰 등록 실패 응답 (예: 상점 ID를 찾을 수 없음)",
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
    console.log("신규 리뷰 등록 API");
    console.log("Review: ", req.body);

    try{
        const result = await serviceNewReview(bodyToReview(req.body));
        res.status(StatusCodes.OK).success(result);
    }catch(err){
        next(err);
    }
};

export const handleGetMissionByShopId = async (req, res, next) => {
    /*
    #swagger.tags = ['Shop']
    #swagger.summary = '특정 상점의 미션 목록 조회 API'
    #swagger.description = '주어진 상점 ID에 해당하는 모든 미션 목록을 조회합니다.'
    #swagger.parameters['id'] = {
        in: 'path',
        description: '상점 ID',
        required: true,
        type: 'number',
        example: 1
    }
    #swagger.responses[200] = {
        description: "상점 미션 목록 조회 성공 응답",
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        resultType: { type: "string", example: "success" },
                        error: { type: "object", nullable: true, example: null },
                        result: {
                            type: "array",
                            items: {
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
    }
    #swagger.responses[404] = {
        description: "미션 조회 실패 응답 (예: 해당 상점에 미션이 없음)",
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
                                reason: { type: "string", example: "해당 상점에 미션이 존재하지 않습니다. shopId: 1" },
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
    console.log("상점의 미션 조회 API");
    console.log("ShopId: ", req.params.id);

    try{
        const result = await serviceGetMissionByShopId(parseInt(req.params.id));
        res.status(StatusCodes.OK).success(result);
    }catch(err){
        next(err);
    }
};