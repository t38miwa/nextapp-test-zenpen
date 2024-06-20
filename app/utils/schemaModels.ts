import mongoose, { Document, Model, Schema as MongooseSchema } from "mongoose";

const Schema = MongooseSchema;

type ItemDocument = Document & {
    Image: string;
    FavorTeam: string;
    FavorPlayer: string;
    prefecture: string;
    description: string;
    email: string;
};

const ItemSchema = new Schema<ItemDocument>({
    Image: String,
    FavorTeam: String,
    FavorPlayer: String,
    prefecture: String,
    description: String,
    email: String,
});

type UserDocument = Document & {
    name: string;
    email: string;
    password: string;
};

const UserSchema = new Schema<UserDocument>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

type AddressDocument = Document & {
    id: string;
    lat: string;
    lng: string;
    placeId: string;
};

const AddressSchema = new Schema<AddressDocument>({
    id: {
        type: String,
        required: true,
    },
    lat: {
        type: String,
        required: true,
    },
    lng: {
        type: String,
        required: true,
    },
    placeId: {
        type: String,
        required: true,
    },
});

type EventDocument = Document & {
    Image: string;
    title: string;
    keyword: string;
    place: string;
    date: string;
    team: string;
    description: string;
    prefecture: string;
    email: string;
};

const EventSchema = new Schema<EventDocument>({
    Image: String,
    title: String,
    keyword: String,
    place: String,
    date: String,
    team: String,
    description: String,
    prefecture: String,
    email: String,
});

export const ItemModel: Model<ItemDocument> = mongoose.models.Item || mongoose.model<ItemDocument>("Item", ItemSchema);
export const UserModel: Model<UserDocument> = mongoose.models.User || mongoose.model<UserDocument>("User", UserSchema);
export const AddressModel: Model<AddressDocument> = mongoose.models.Address || mongoose.model<AddressDocument>("Address", AddressSchema);
export const EventModel: Model<EventDocument> = mongoose.models.Event || mongoose.model<EventDocument>("Event", EventSchema);
