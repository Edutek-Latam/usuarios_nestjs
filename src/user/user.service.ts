import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

constructor(
  @InjectRepository(User) 
  private _userRepository: Repository<User>  ){}
  async create(createUserDto: CreateUserDto) {
    try {
      const newUser = this._userRepository.create(createUserDto);
      const saveUser = await this._userRepository.save(newUser);
      return saveUser;
    } catch (error) {
      
      throw new BadRequestException(error.detail)
    }
    //return 'This action adds a new user';
  }

  async findAll() {
    return this._userRepository.find();
    //return `This action returns all user`;
  }

  async findOne(id: string) {
    try {
      const userExiste = await this._userRepository.findOneBy({id: id})
      console.log(userExiste);
      if(!userExiste) {
        throw new NotFoundException('Registro no existe');
      }
      console.log(userExiste)
      return userExiste;
    } catch (error) {
      throw new NotFoundException('Registro no existe');
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this._userRepository.preload({
      id,
      ...updateUserDto
    })

    try {
      await this._userRepository.save(user)
      return user;
    } catch (error) {

    }
    //return `This action updates a #${id} user`;
  }

  async remove(id: string) {
    const user = await this.findOne(id);
    const userRemove = await this._userRepository.remove(user)
    return userRemove
    //return `This action removes a #${id} user`;
  }
}
