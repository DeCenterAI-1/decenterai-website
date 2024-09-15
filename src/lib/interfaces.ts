import { JOB_STATUS } from "./enums";

export interface ISelectOption {
    value: string;
    name: string;
}

export interface IJobDetails {
    job: string; 
    created: string; 
    status: JOB_STATUS; 
    creator: string; 
    lastUpdated: string; 
    rp: string; 
    cost: string;
}