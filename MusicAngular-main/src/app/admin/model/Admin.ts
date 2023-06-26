import { FileHandle } from "./file-handle.model";

export class Admin{
    musicId!: number;
    musicName!: string;
    artistName!: string;
    musicGenre!: string;
    songReleaseDate:string|undefined;
    songLanguage:string|undefined;
    duration:string|undefined;
    country:string|undefined;   
    overallRate!: number;
     musicImages!: FileHandle[]; 
}