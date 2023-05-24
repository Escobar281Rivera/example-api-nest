import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Rol } from './rol.entity';
import {Repository}  from  'typeorm'
import { createRolDto } from './dto/createRol.dto';
import { UpdateRolDto } from './dto/updateRol.dto';

@Injectable()
export class RolService {
    constructor(@InjectRepository(Rol)private rolRepository: Repository<Rol>){}
    //Save
     async createRol(rol: createRolDto){
        const rolFound = await this.rolRepository.findOne({
            where: {rol: rol.rol}
        })
        if(rolFound){
            return new HttpException('Rol already exist', HttpStatus.CONFLICT)
        }
        const newRol = this.rolRepository.create(rol)
        return this.rolRepository.save(newRol)
    }
    //list
    listRoles(){
        return this.rolRepository.find()
    }
    //byId
    async byIdRol(id: number){
        const rolFound = await this.rolRepository.findOne({
            where: {id, isActive: true}
        })
        if(!rolFound){
            return new HttpException(`Rol with this id ${id} not found`, HttpStatus.NOT_FOUND)
        }
        return rolFound;
    }
    //delete
    async deleteRol(id: number){
        const rol = await this.rolRepository.delete ({id})

        if(rol.affected === 0){
            return new HttpException('Rol not found', HttpStatus.NOT_FOUND)
        }
        return rol;
    }
    //update
    async updateRol( id: number, rol: UpdateRolDto){
        const rolFound = await this.rolRepository.findOne({
            where: {id},
        })
        if(!rolFound){
            return new HttpException('Data not found', HttpStatus.NOT_FOUND)
        }

        const updateRole = Object.assign(rolFound, rol)
        return this.rolRepository.save(updateRole)
    }

}
