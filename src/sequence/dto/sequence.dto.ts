import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsJSON, IsOptional ,IsObject ,IsString, IsNumber} from 'class-validator';


////example////
// {
//   "sequenceCommand": [
//     {
//       "mediaId":"clwzxj0bb0000bpbz40e7hyse",
//       "seq":1,
//       "length":5000
//     },
//     {
//       "mediaId":"clwzyuu5y000112j912v8ik0i",
//       "seq":2,
//       "length":1000
//     }
//   ],
//   "mediafiles": [
//     "clwzxj0bb0000bpbz40e7hyse",
//     "clwzyuu5y000112j912v8ik0i"
//   ],
//   "monitors": [
//     "clwzyiyzj000012j9wosgqyms"
//   ]
// }

// {
//   "sequenceCommand": {
//     "clwzxj0bb0000bpbz40e7hyse":{
//       "mediaId":"clwzxj0bb0000bpbz40e7hyse",
//       "seq":1,
//       "length":5000
//     },
//     "clwzyuu5y000112j912v8ik0i":{
//       "seq":2,
//       "length":1000
//     }
//   },
//   "mediafiles": [
//     "clwzxj0bb0000bpbz40e7hyse",
//     "clwzyuu5y000112j912v8ik0i"
//   ],
//   "monitors": [
//     "clwzyiyzj000012j9wosgqyms"
//   ]
// }
////////////////////////////////


export class CreateMonitorSequenceDTO {
  @IsJSON()
  @ApiProperty()
  sequenceCommand: Record<string, any>[]; // Updated to handle JSON object  
  // {
  //   "mediaId":"",
  //   "seq":1,
  //   "length":5000,
  // }
  @IsArray()
  @IsString({ each: true })
  @ApiProperty()
  mediafiles: string[]; // Array of MediaFile IDs

  @IsArray()
  @ApiProperty()
  @IsString({ each: true })
  monitors: string[]; // Array of MonitorStatus IDs
}

export class UpdateMonitorSequenceDto {
    @IsOptional()
    @IsObject()
    @ApiProperty()
    sequenceCommand?: Record<string, any>[];  // Updated to handle JSON object
  
    @IsOptional()
    @IsArray()
    @ApiProperty()
    @IsString({ each: true })
    mediafiles?: string[];
  
    @IsOptional()
    @IsArray()
    @ApiProperty()
    @IsString({ each: true })
    monitors?: string[];
  }