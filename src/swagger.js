const doc = {
    components: {
        schemas: {
            err500: {
                type: "object",
                properties: {
                    resultType: { type: "string" },
                    error: { 
                        type: "object",
                        properties: {
                            errorCode: { type: "string" },
                            reason: { type: "string" },
                            data: { type: "any" }
                        },
                    },
                    result: {
                        type: "object", nullable: true, example: null
                    }
                }
            }
        }
    }
};