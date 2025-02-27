import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';


@Controller('auth')
export class AuthController {

    constructor (private authService:AuthService){}
    
    @Post('signup')
    async signup(@Body() body:{name:string,email:string,password:string}){

        return this.authService.signup(body.name,body.email,body.password)
    }

    @Post('login')
    async login(@Body() body:{username:string,password:string}){
        return this.authService.login(body.username,body.password)
    }
}
