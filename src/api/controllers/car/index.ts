import {
  Body,
  Delete,
  Get,
  JsonController,
  OnUndefined,
  Param,
  Patch,
  Post,
  UseBefore,
} from "routing-controllers";
import bodyParser from "body-parser";
import { DeleteResult, getRepository } from "typeorm";

import { VinDecodeMiddleware } from "../../middlewares";
import { CarEntity } from "../../models";

@JsonController("/cars")
export class CarController {
  private carRepository = getRepository(CarEntity);

  /**
   * Get all car resources
   * @returns all car resources
   */
  @Get()
  getAll(): Promise<CarEntity[]> {
    return this.carRepository.find();
  }

  /**
   * Get a single car resource by unique id
   * @param id unique id for car entity
   * @returns a single car resource, otherwise 404
   */
  @Get("/:id")
  @OnUndefined(404)
  getById(@Param("id") id: string): Promise<CarEntity> {
    return this.carRepository.findOne(id);
  }

  /**
   * Create a new car resource with VIN-decoded information
   * @param body car resource creation request information listed on the Sketch UI
   * @returns the created car resource
   */
  @Post()
  @UseBefore(bodyParser.json(), VinDecodeMiddleware)
  create(@Body() body: Pick<CarEntity, "id">): Promise<CarEntity> {
    return this.carRepository.create(body).save();
  }

  /**
   * Update an existing car resource
   * @param id unique car resource id in the database
   * @param body partial car update information
   * @returns update result
   */
  @Patch("/:id")
  @OnUndefined(404)
  async update(@Param("id") id: string, @Body() body: Partial<CarEntity>): Promise<CarEntity> {
    await this.carRepository.update(id, body);
    return this.carRepository.findOne(id);
  }

  /**
   * Delete a car resource
   * @param id unique car resource id in the database
   * @returns delete result
   */
  @Delete("/:id")
  @OnUndefined(404)
  delete(@Param("id") id: string): Promise<DeleteResult> {
    return CarEntity.delete(id);
  }
}
