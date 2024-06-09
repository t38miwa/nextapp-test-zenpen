import mongoose from "mongoose"

const Schema = mongoose.Schema

const ItemSchema = new Schema({
    Image: String,
    FavorTeam: String,       
    FavorPlayer: String,
    prefecture: String,  
    description: String,
    email: String,    
})

{/*title: String,       
    image: String,
    price: String,      
    description: String,
    email: String,*/}

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

const AddressSchema = new Schema({
    id: {
        type: String,
        required: true
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
        required: true
    }
})

const EventSchema = new Schema({
    Image: String,
    title: String,       
    keyword: String,
    place: String, 
    date: String,
    team: String,
    description: String,  
    prefecture: String, 
})

export const ItemModel = mongoose.models.Item || mongoose.model("Item", ItemSchema)
export const UserModel = mongoose.models.User || mongoose.model("User", UserSchema)
export const AddressModel = mongoose.models.Address || mongoose.model("Address", AddressSchema)
export const EventModel = mongoose.models.Event || mongoose.model("Event", EventSchema)