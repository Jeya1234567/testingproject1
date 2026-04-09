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