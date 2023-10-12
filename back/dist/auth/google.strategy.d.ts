import { UserService } from '../user/user.service';
declare const GoogleStrategy_base: new (...args: any[]) => any;
export declare class GoogleStrategy extends GoogleStrategy_base {
    private readonly userService;
    constructor(userService: UserService);
    validate(accessToken: string, refreshToken: string, profile: any, done: Function): Promise<void>;
}
export {};
