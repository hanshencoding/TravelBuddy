import { Injectable, NotFoundException, BadRequestException} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

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

    async loginUser(dataDariReact : any){
        const email = (dataDariReact?.email || '').trim();
        const password = (dataDariReact?.password || '').trim();

        const user = await this.prisma.user.findUnique({
            where : {email : email},
        });

        if(!user){
            throw new BadRequestException("Belum Terdaftar");
        }
        if(user.password !== password){
            throw new BadRequestException("Password salah");
        }

        return {
            id : user.id,
            userName : user.username,
            userAvatar : user.profilePicture,

        };
    }

}
