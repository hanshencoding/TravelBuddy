import { Injectable, NotFoundException} from '@nestjs/common';
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
}
