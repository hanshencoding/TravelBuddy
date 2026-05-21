import { Injectable, NotFoundException, BadRequestException} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class UserService {
    constructor(private prisma : PrismaService){}
    async getProfile(userId: string){
        const user = await this.prisma.user.findUnique({
           where: { 
                id: parseInt(userId)
            },
            select: {
                id: true,
                username: true,
                email: true,
                profilePicture: true,
            },
        });

        if (user == null) {
            throw new NotFoundException('User Not Found');
        }

        return user;
    }

    async createUser(dataDariReact : any){
        const {name, email, password } = dataDariReact;
        const userExist = await this.prisma.user.findUnique({
            where: {email : email},
        });

        if(userExist){
            throw new BadRequestException('Email ini udah dipake orang lain, Bree!');
        }
       
        const newUser = await this.prisma.user.create({
            data : {
                username : name,
                email : email,
                password : password,
            }
        });

        const {password : _, ...result} = newUser;
        return result;
    }

}
