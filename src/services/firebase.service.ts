import { worksCollection } from '../firebase'

export default class FirebaseService {

    /**
     * getWorks
     */
    public getWorks(): WorksModel[] {     
        const works: WorksModel[] = []; 
        worksCollection.onSnapshot((snap) => {
            snap.forEach((doc) => {
                works.push(doc.data() as WorksModel);
            })
        });
        return works;
    }
}

export interface WorksModel {
    title: string;
    description: string;
    images: string[];
}