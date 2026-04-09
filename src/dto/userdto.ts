export interface UserDTO {
    id: string;
    email: string;
    name: string;
    age: number;
}
export interface CreateUserDTO {
    email: string;
    name: string;
    age: number;
}
export interface UpdateUserDTO {
    email?: string;
    name?: string;
    age?: number;
}
export interface UserResponseDTO {
    id: string;
    email: string;
    name: string;
    age: number;
}
export interface UserListResponseDTO {
    users: UserResponseDTO[];
    totals: number;
}
export interface UserFilterDTO {
    name?: string;
    email?: string;
    minAge?: number;
    maxAge?: number;
}   