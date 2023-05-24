import { Controller, Post, Get, Param, Delete, ParseIntPipe,Patch, Body } from '@nestjs/common';
import { RolService } from './rol.service';
import { createRolDto } from './dto/createRol.dto';
import { Rol } from './rol.entity';
import { UpdateRolDto } from './dto/updateRol.dto';


@Controller('rol')
export class RolController {
    rolRepository: any;
    constructor(private rolService: RolService){}

    //Petitions API-rest
    @Post()
    createRol(@Body()newRol: createRolDto){
        return this.rolService.createRol(newRol);
    }
    //list
    @Get()
    listRoles(): Promise <Rol[]>{
        return this.rolService.listRoles();
    }
    //byId
    @Get(':id')
    byIdRol(@Param('id', ParseIntPipe) id: number){
        return this.rolService.byIdRol(id)
    }
    //delete
    @Delete(':id')
    deleteRol(@Param('id', ParseIntPipe)id : number){
        return this.rolService.deleteRol(id)
    }
    //update
    @Patch(':id')
    updateRol(@Param('id', ParseIntPipe) id: number, @Body()
    rol: UpdateRolDto){
        return this.rolService.updateRol(id, rol)
    }
}
