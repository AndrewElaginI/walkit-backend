import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Geolocation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  latitude: string;

  @Column()
  longitude: string;
}
