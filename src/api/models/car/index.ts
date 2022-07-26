import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("Cars")
export class CarEntity extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
    id: string;

  @Column({ update: false })
    vin: string;

  @Column({ update: false })
    make: string;

  @Column({ update: false })
    manufacturerName: string;

  @Column({ update: false })
    model: string;

  @Column({ update: false })
    modelYear: number;

  @Column()
    licensePlateNumber: string;

  @Column()
    registrationNumber: string;

  @Column()
    registrationState: string;

  @Column()
    registrationExpiration: Date;

  @Column()
    registrationName: string;

  @Column()
    carValue: number;

  @Column()
    currentMileage: number;

  @Column()
    description: string;

  @Column()
    color: string;

  @CreateDateColumn()
    createdDate: Date;

  @UpdateDateColumn()
    updatedDate: Date;

  @DeleteDateColumn()
    deletedDate: Date;
}
