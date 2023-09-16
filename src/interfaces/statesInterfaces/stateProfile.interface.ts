import {IPersonalProfile} from "../componentInterfaces/personalProfile.interface";

export interface IStateProfile{
    profile: IPersonalProfile | null,
    errors: any,
    loading: boolean
}