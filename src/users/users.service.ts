import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../ent/users/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOneByName(username: string): Promise<User | undefined> {
    return this.usersRepository.findOne({where:{
        username: username,
    }});
  }

  findOneById(id: number): Promise<User | undefined> {
    return this.usersRepository.findOne({where:{
        id: id,
    }});
  }

  async create(user: User): Promise<User> {
    return this.usersRepository.save(user);
  }

  async update(id: number, user: User): Promise<User | undefined> {
    await this.usersRepository.update(id, user);
    return this.usersRepository.findOne({where:{
        id: id
    }});
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
