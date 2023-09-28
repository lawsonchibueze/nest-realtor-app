import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Query,
  Body,
} from '@nestjs/common';
import { HomeService } from './home.service';
import { CreateHomeDto, HomeResponseDto } from './dto/home.dto';
import { PropertyType } from '@prisma/client';
import { User, UserInfo } from 'src/user/decorators/user.decorator';
import { userInfo } from 'os';

@Controller('home')
export class HomeController {
  constructor(private readonly homeService: HomeService) {}
  @Get()
  getHomes(
    @Query('city') city?: string,
    @Query('minPrice') minPrice?: string,
    @Query('maxPrice') maxPrice?: string,
    @Query('propertyType') PropertyType?: string,
  ): Promise<HomeResponseDto[]> {
    return this.homeService.getHomes();
  }

  @Get(':id')
  getHome() {
    return {};
  }

  //   @Post()
  //   createPost(@Body() body: CreateHomeDto, @User() user: UserInfo) {
  //     return this.homeService.createHome(body,);
  //   }

  @Put(':id')
  updateHome() {
    return {};
  }

  @Delete(':id')
  deleteHome() {
    return;
  }
}
