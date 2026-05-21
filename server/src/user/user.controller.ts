import { Body, Controller, Get, Param , Post} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}


        @Post('signup')
        async signUp(@Body() dataDariReact: any){
            const newUser = await this.userService.createUser(dataDariReact);
            return newUser;
        }
}
