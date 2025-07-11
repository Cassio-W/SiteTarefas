import { Injectable, UnauthorizedException } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly jwtService: JwtService
  ) {}

  async login(loginDto) {
    const matchUser = await this.databaseService.user.findUnique({
      where: {
        email: loginDto.email
      }
    })

    if(!matchUser) {
      throw new UnauthorizedException('Invalid Credentials');
    }

    const matchPassword = await bcrypt.compare(loginDto.password, matchUser.password)
    if (!matchPassword) {
      throw new UnauthorizedException('Invalid Credentials');
    }

    const payload = {
      sub: matchUser.id,
      username: matchUser.username
    }

    const jwtToken = await this.jwtService.signAsync(payload)

    return jwtToken;
  }
}
