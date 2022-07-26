import { Get, JsonController, OnUndefined, Param } from "routing-controllers";

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
}
