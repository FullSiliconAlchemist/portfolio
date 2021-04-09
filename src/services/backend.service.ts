import axios, {AxiosResponse} from 'axios';
import * as firebase from 'firebase/app'

export default class BackendService {

    private BACKEND = 'https://s-boarder.herokuapp.com/'

    /**
     * getWorks
     */
    public async getAsset(): Promise<AxiosResponse<Asset>> {
        return axios.get(this.BACKEND + 'getSceneAsset?locations=gltf/axisOrientation.glb');
    }
}

export interface Asset {
    createdDate: firebase.default.firestore.Timestamp;
    enabled: boolean;
    id: string;
    updatedDate: firebase.default.firestore.Timestamp;
    urlAlbedo: string;
    urlAssetType: string;
    urlNormal: string;
    urlRoughness: string;
    urlSpecular: string;
    userId: string;
}