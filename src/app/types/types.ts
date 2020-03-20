export type PipeLifetime = {
    id: Number
    platform: String
    well: String
    riserSetNumber: String
    supplier: String
    section: String
    func: String
    lifeLength: Number
    reference: String
    pshh: String
}

export type Query = {
    getAll: PipeLifetime[];
    getAllByLimit(count: Number): PipeLifetime[];
}