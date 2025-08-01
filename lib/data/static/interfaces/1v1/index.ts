import { User } from "../users";

export interface I1v1 {
    id: string;
    player1: User;
    player2: User;
    winner?: User;
    createdAt: Date;
    updatedAt: Date;
    status: "pending" | "in_progress" | "completed" | "cancelled";
    startTime?: Date;
    player1Score?: number;
    player2Score?: number;
    gameType: string; // e.g., "chess", "checkers"
}