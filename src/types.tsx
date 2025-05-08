export interface PostType {
    id: number,
    title: string,
    content?: string,
    tags?: string[]
}

export interface CategoryType {
    id: number, 
    name: string
}

export interface ItemType {
    id: number,
    name: string,
    category: string,
    rating?: number,
    content?: string
}