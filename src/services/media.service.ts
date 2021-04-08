
export default class MediaService {

    imageResize(uploadCareLink: string): string {
        const prefix = uploadCareLink.slice(0, 57);
        const suffix = uploadCareLink.slice(57);
        const resize = '/-/resize/' + Math.floor(window.innerWidth * 0.8) + '/';
        return prefix + resize + suffix;
    }
}

