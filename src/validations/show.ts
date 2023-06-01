const validateFields = ['title', 'premiere', 'language', 'mainGenre']

export const validateEntryStoreShow = (body) => {
    validateFields.forEach((field) => {
        if (!body[field]) {
            throw new Error("At least one mandatory field was not informed")
        }
    })
}