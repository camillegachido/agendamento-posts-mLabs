export enum EMedias {
   instagram = 1,
   linkedin = 2,
   facebook = 3,
   youtube = 4,
   twitter = 5,
}

export interface IPost {
   socialMedias: EMedias[]
   text: string
   hour: string
   date: string
   img: string
}
