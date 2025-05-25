import { StatusCodes } from "http-status-codes";
import { bodyToUser } from "../dtos/user.dto.js";
import { 
    getUserReview,
    serviceGetUserMission,
    userSignUp,
    serviceCompleteUserMission
} from "../services/user.service.js";

export const handleUserSignUp = async (req, res, next) => {
    /*
    #swagger.tags = ['User'];
    #swagger.summary = '회원가입 요청 api';
    #swagger.requestBody = {
        required: true,
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        email: { type: "string" },
                        name: { type: "string" },
                        gender: { type: "number" },
                        birth: { type: "string", format: "date" },
                        address: { type: "string" },
                        phoneNumber: { type: "string" },
                        preferences: { type: "array", items: { type: "number"} }
                    }
                }
            }
        }
    };
    #swagger.responses[200] = {
        description: "회원가입 요청 성공 응답",
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        resultType: { type: "string" },
                        error: { type: "object", nullable: true, example: null },
                        result : {
                            type: "object",
                            properties: {
                                name: { type: "string" },
                                email: { type: "string" },
                                gender: { type: "number" },
                                birth: { type: "string", format: "date" },
                                address: { type: "string" },
                                preferences: {
                                    type: "array",
                                    items: { type: "string" }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    #swagger.responses[400] = {
        description: "회원가입 요청 실패 응답",
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        resultType: { type: "string", example: "error" },
                        error: {
                            type: "object",
                            properties: {
                                errorCode: { type: "string" },
                                reason: { type: "string", example: "이미 존재하는 ~" },
                                data: { type: "string", example: "중복된 데이터 ~" },
                            }
                        },
                        result: {
                            type: "object", nullable: true, example: null
                        }
                    }
                }
            }
        }
    };
    #swagger.responses[500] = {
        description: "서버 에러",
        content: {
            "application/json": {
                schema: {
                    $ref: "#/components/schemas/err500"
                }
            }
        }
    };
    */
    console.log('회원가입 요청.');
    console.log("body: ", req.body);
    
    try{
        const user = await userSignUp(bodyToUser(req.body));
        res.status(StatusCodes.OK).success(user);
    }catch(err){
        next(err);
    }
};

export const handleGetUserReview = async (req, res, next) => {
    /*
    #swagger.tags = ['User']
    #swagger.summary = '유저 리뷰 조회 api';
    #swagger.parameters['id'] = {
        in: 'path',
        description: '유저 id',
        required: true,
        type: 'number'
    }
    #swagger.responses[200] = {
        description: "유저 리뷰 조회 요청 성공 응답",
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
                                reviewTitle: { type: "string" },
                                reviewContent: { type: "string" },
                                reviewStars: { type: "number" },
                                createdAt: { type: "string", format: "date" },
                                updatedAt: { type: "string", nullable: true, example: null }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    #swagger.responses[404] = {
        description: "리뷰 조회 요청 실패 응답",
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        resultType: { type: "string", example: "error" },
                        error: {
                            type: "object",
                            properties: {
                                errorCode: { type: "string" },
                                reason: { type: "string", example: "존재하지 않는 ~" },
                                data: { type: "string", example: "요청한 id ~" },
                            }
                        },
                        result: {
                            type: "object", nullable: true, example: null
                        }
                    }
                }
            }
        }
    };
    #swagger.responses[500] = {
        description: "서버 에러",
        content: {
            "application/json": {
                schema: {
                    $ref: "#/components/schemas/err500"
                }
            }
        }
    };
    */
    console.log('리뷰 조회 요청.');
    console.log("userId: ", req.params.id);

    try{
        const reviews = await getUserReview(parseInt(req.params.id));
        res.status(StatusCodes.OK).success(reviews);
    }catch(err){
        next(err);
    }
};

export const handleGetAcceptedUserMission = async (req, res, next) => {
    /*
    #swagger.tags = ['User']
    #swagger.summary = '유저 미션 수락 목록 조회 api';
    #swagger.parameters['id'] = {
        in: 'path',
        description: '유저 id',
        required: true,
        type: 'number'
    }
    #swagger.responses[200] = {
        description: "유저 미션 수락 목록 조회 응답",
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
                                    missionId: { type: "number" },
                                    userId: { type: "number" },
                                    success: { type: "number" },
                                    mission:{
                                        type: "object",
                                        properties: {
                                            content: { type: "string" },
                                            point: { type: "number" },
                                            shop: {
                                                type: "object",
                                                properties: {
                                                    shopName: { type: "string" }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    #swagger.responses[404] = {
        description: "리뷰 조회 요청 실패 응답",
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        resultType: { type: "string", example: "error" },
                        error: {
                            type: "object",
                            properties: {
                                errorCode: { type: "string" },
                                reason: { type: "string", example: "존재하지 않는 ~" },
                                data: { type: "string", example: "요청한 id ~" },
                            }
                        },
                        result: {
                            type: "object", nullable: true, example: null
                        }
                    }
                }
            }
        }
    };
    #swagger.responses[500] = {
        description: "서버 에러",
        content: {
            "application/json": {
                schema: {
                    $ref: "#/components/schemas/err500"
                }
            }
        }
    };
    */
    console.log('미션 조회 요청.');
    console.log("userId: ", req.params.id);
    
    try{
        const missions = await serviceGetUserMission(parseInt(req.params.id));
        res.status(StatusCodes.OK).success(missions);
    }catch(err){
        next(err);
    }
};

export const handleCompleteUserMission = async (req, res, next) => {
    /*
    #swagger.tags = ['User']
    #swagger.summary = '유저 미션 성공 api';
    #swagger.parameters['id'] = {
        in: 'path',
        description: '유저 id',
        required: true,
        type: 'number'
    };
    #swagger.parameters['mid'] = {
        in: 'path',
        description: '미션 id',
        required: true
    }
    #swagger.responses[200] = {
        description: "미션 성공 응답",
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
    };
    #swagger.responses[404] = {
        description: "리뷰 조회 요청 실패 응답",
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        resultType: { type: "string", example: "error" },
                        error: {
                            type: "object",
                            properties: {
                                errorCode: { type: "string" },
                                reason: { type: "string", example: "존재하지 않는 ~" },
                                data: { type: "string", example: "요청한 id ~" },
                            }
                        },
                        result: {
                            type: "object", nullable: true, example: null
                        }
                    }
                }
            }
        }
    };
    #swagger.responses[500] = {
        description: "서버 에러",
        content: {
            "application/json": {
                schema: {
                    $ref: "#/components/schemas/err500"
                }
            }
        }
    };
    */
    console.log('미션 완료 요청.');
    console.log("userId: ", req.params.id);
    console.log("missionId: ", req.params.mid);

    try{
        await serviceCompleteUserMission(parseInt(req.params.id), parseInt(req.params.mid));
        res.status(StatusCodes.OK).success("success");
    }catch(err){
        next(err);
    }
}