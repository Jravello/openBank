import { model, Schema } from 'mongoose';
import { UserInformationDoc } from '../interface/userInformation';

const userInformationSchema = new Schema(
  {
    usersInApps: {
      type: {
        insignias: {
          type: {
            userName: {
              type: String,
            },
          },
        },
        gamificacion: {
          type: {
            userName: {
              type: String,
            },
          },
        },
        stackBio: {
          type: {
            userName: {
              type: String,
            },
          },
        },
        micro: {
          type: {
            userName: {
              type: String,
            },
          },
        },
      },
    },
    emailEncode: {
      type: String,
    },
    iatLastPetition: {
      type: Number,
    },
    domain: {
      type: String,
    },
    badgeIDs: {
      type: [String],
    },
  },
  { collection: 'UserInformation', timestamps: true }
);

export default model<UserInformationDoc>('UserInformation', userInformationSchema);
