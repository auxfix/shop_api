
import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Post,
    Request,
    UseGuards
  } from '@nestjs/common';
  import { AuthUserGuard } from './authUser.guard';
  import { AuthAdminGuard } from './authAdmin.guard';
  import { AuthService } from './auth.service';
  
  @Controller('auth')
  export class AuthController {
    constructor(private authService: AuthService) {}
  
    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(@Body() signInDto: Record<string, any>) {
      return this.authService.signIn(signInDto.username, signInDto.password);
    }
  
    @UseGuards(AuthUserGuard)
    @Get('user-profile')
    getUserProfile(@Request() req) {
      return req.user;
    }

    @UseGuards(AuthAdminGuard)
    @Get('admin-profile')
    getAdminProfile(@Request() req) {
      return req.user;
    }
  }
