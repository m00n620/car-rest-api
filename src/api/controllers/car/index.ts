import {
  Body,
  Get,
  JsonController,
  OnUndefined,
  Param,
  Post,
  UseBefore,
} from "routing-controllers";
import bodyParser from "body-parser";

import { VinDecodeMiddleware } from "../../middlewares";
import { CarEntity } from "../../models";

@JsonController("/cars")
export class CarController {
  /**
   *
   * @returns all car resources
   */
  @Get()
  getAll(): Promise<CarEntity[]> {
    return CarEntity.find();
  }

  /**
   *
   * @param id unique id for car entity
   * @returns a single car resource, otherwise 404
   */
  @Get("/:id")
  @OnUndefined(404)
  getById(@Param("id") id: string): Promise<CarEntity> {
    return CarEntity.findOne(id);
  }

  /**
   * Create a new car with VIN-decoded information
   * @param body car resource creation request information listed on the Sketch UI
   * @returns the created car resource
   */
  @Post()
  @UseBefore(bodyParser.json(), VinDecodeMiddleware)
  create(@Body() body: Pick<CarEntity, "id">): Promise<CarEntity> {
    return CarEntity.create(body).save();
  }
}
