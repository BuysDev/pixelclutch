import { Notification } from '../notifications'

export interface User {
    id: string;
    username: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    isActive: boolean;
    lastLogin?: Date;
    profilePictureUrl?: string;
    password: string;
    roles: string[];
    // games: Game[]
    notifications?: Notification[];
}