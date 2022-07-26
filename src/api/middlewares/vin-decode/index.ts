import axios from "axios";
import { Request, Response, NextFunction } from "express";
import { ExpressMiddlewareInterface } from "routing-controllers";

export class VinDecodeMiddleware implements ExpressMiddlewareInterface {
  use(req: Request, res: Response, next?: NextFunction): void {
    const { vin } = req.body;

    axios
      .get(`https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/${vin}?format=json`)
      .then(({ data }) => {
        req.body.make = data.Results[6].Value;
        req.body.manufacturerName = data.Results[7].Value;
        req.body.model = data.Results[8].Value;
        req.body.modelYear = data.Results[9].Value;
        next();
      })
      .catch((err) => {
        return res.send(err);
      });
  }
}
